import React, { useEffect, useState } from "react";
import { Form, Input, Button, Row, Col, Typography, notification } from "antd";
import "antd/dist/reset.css";
import classroomImage from "../assets/signup.png";
import { doc, updateDoc } from "firebase/firestore";
import { db } from "../firebase";

const { Title, Text } = Typography;

const SignupCodePage = () => {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [resending, setResending] = useState(false);
  const [timer, setTimer] = useState(60);

  useEffect(() => {
    const storedEmail = localStorage.getItem("signupEmail");
    if (storedEmail) setEmail(storedEmail);
    else {
      notification.warning({
        message: "No Email Found",
        description: "Please sign up again to receive a verification code.",
        placement: "topRight",
      });
    }

    // ⏳ Start 1-min timer
    const interval = setInterval(() => {
      setTimer((prev) => {
        if (prev <= 1) {
          clearInterval(interval);
          return 0;
        }
        return prev - 1;
      });
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  // ✅ Verify OTP and mark email as verified in Firestore (if exists)
  const onFinish = async (values) => {
    if (timer === 0) {
      notification.error({
        message: "OTP Expired",
        description: "Your verification code has expired. Please request a new one.",
        placement: "topRight",
      });
      return;
    }

    setLoading(true);
    try {
      // Step 1️⃣: Verify OTP with backend
      const response = await fetch(
        "https://fancity-backend-n9mm31u8s-komal-anums-projects.vercel.app/api/auth/verify-otp",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ email, otp: values.code }),
        }
      );

      const data = await response.json();
      if (!response.ok) throw new Error(data.message || "Invalid OTP");

      // Step 2️⃣: Try updating Firestore (if user doc exists)
      try {
        const userRef = doc(db, "power_courses_users", email);
        await updateDoc(userRef, { isEmailVerified: true });
        console.log("✅ Firestore document updated for:", email);
      } catch (err) {
        console.warn("⚠️ Firestore doc not found or skipped:", err.message);
        console.log("Verified user likely signed up via Google.");
      }

      // Step 3️⃣: Show success notification
      notification.success({
        message: "OTP Verified",
        description: "Your account has been successfully verified!",
        placement: "topRight",
      });

      localStorage.removeItem("signupEmail");
      window.location.href = "/login";
    } catch (error) {
      console.error("OTP verification failed:", error);
      notification.error({
        message: "Verification Failed",
        description: error.message || "Something went wrong. Please try again.",
        placement: "topRight",
      });
    } finally {
      setLoading(false);
    }
  };

  // 🔁 Resend OTP
  const handleResend = async () => {
    if (!email)
      return notification.error({
        message: "Email Not Found",
        description: "Please sign up again to get a new code.",
        placement: "topRight",
      });

    setResending(true);
    try {
      const res = await fetch(
        "https://fancity-backend-23g8tztpf-komal-anums-projects.vercel.app/api/auth/send-otp",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ email }),
        }
      );
      const data = await res.json();
      if (!res.ok) throw new Error(data.message || "Failed to resend OTP");

      notification.success({
        message: "OTP Resent",
        description: "A new verification code has been sent to your email.",
        placement: "topRight",
      });

      setTimer(60);
    } catch (error) {
      console.error("Resend OTP failed:", error);
      notification.error({
        message: "Failed to Resend OTP",
        description: error.message,
        placement: "topRight",
      });
    } finally {
      setResending(false);
    }
  };

  return (
    <Row style={{ minHeight: "100vh" }}>
      {/* Left Section */}
      <Col
        xs={24}
        md={12}
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: "#fff",
          padding: "40px",
        }}
      >
        <div style={{ maxWidth: 360, width: "100%" }}>
          <Title level={3} style={{ marginBottom: 10 }}>
            Finish Signing Up
          </Title>
          <Text>
            Enter the 4-digit code sent to <b>{email}</b>. It expires in{" "}
            <b>{timer}s</b>.
          </Text>

          <Form layout="vertical" onFinish={onFinish} style={{ marginTop: 24 }}>
            <Form.Item
              label="Verification Code"
              name="code"
              rules={[
                { required: true, message: "Please enter the verification code" },
              ]}
            >
              <Input
                placeholder="Enter 4-digit code"
                maxLength={4}
                inputMode="numeric"
              />
            </Form.Item>

            <Form.Item>
              <Button
                type="primary"
                htmlType="submit"
                block
                style={{ height: 40 }}
                loading={loading}
                disabled={timer === 0}
              >
                Verify
              </Button>
            </Form.Item>
          </Form>

          <Button
            type="link"
            onClick={handleResend}
            loading={resending}
            disabled={timer > 0}
            style={{ padding: 0 }}
          >
            Didn’t get the code? Resend OTP
          </Button>
        </div>
      </Col>

      {/* Right Section */}
      <Col
        xs={24}
        md={12}
        style={{
          position: "relative",
          backgroundImage: `url(${classroomImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div
          style={{
            position: "absolute",
            top: "15%",
            left: "50%",
            transform: "translateX(-50%)",
            color: "#fff",
            textAlign: "center",
          }}
        >
          <Title
            level={2}
            style={{
              color: "#fff",
              fontWeight: "600",
              textShadow: "0 2px 8px rgba(0,0,0,0.3)",
            }}
          >
            Learn with Ease
          </Title>
        </div>
      </Col>
    </Row>
  );
};

export default SignupCodePage;
