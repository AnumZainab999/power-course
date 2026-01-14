// src/pages/SignupPage.js
import React from "react";
import { Form, Input, Button, Row, Col, Typography, notification } from "antd";
import { useNavigate } from "react-router-dom";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase";
import { createUser } from "../services/userService";
import classroomImage from "../assets/signup.png";
import "antd/dist/reset.css";

const { Title, Text } = Typography;

const SignupPage = () => {
  const navigate = useNavigate();

  const onFinish = async (values) => {
    const { email, password } = values;

    try {
      // ✅ 1. Create Firebase Auth account
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;

      // ✅ 2. Save plain password — it will be hashed inside userService.js
      await createUser({
        email,
        password, // plain password here — will be hashed inside service
        isEmailVerified: user.emailVerified || false,
        provider: user.providerData[0]?.providerId || "email",
        createdAt: new Date().toISOString(),
      });

      // ✅ 3. Send OTP via backend
      const response = await fetch(
        "https://fancity-backend-n9mm31u8s-komal-anums-projects.vercel.app/api/auth/send-otp",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ email }),
        }
      );

      const data = await response.json();
      if (!response.ok) throw new Error(data.message || "Failed to send OTP");

      // ✅ 4. Save session temporarily
      localStorage.setItem("signupEmail", email);
      localStorage.setItem("authToken", await user.getIdToken());

      notification.success({
        message: "OTP Sent Successfully",
        description: "An OTP has been sent to your email. Please verify it to continue.",
        placement: "topRight",
      });

      navigate("/signup-code");
    } catch (error) {
      console.error("Signup failed:", error);
      notification.error({
        message: "Signup Failed",
        description: error.message || "Something went wrong. Please try again later.",
        placement: "topRight",
      });
    }
  };

  return (
    <Row style={{ minHeight: "100vh" }}>
      {/* Left Form Section */}
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
            Sign up in Seconds
          </Title>
          <Text>Please enter a valid email to create your account</Text>

          <Form layout="vertical" onFinish={onFinish} style={{ marginTop: 24 }}>
            <Form.Item
              label="Email (work or personal)"
              name="email"
              rules={[
                { required: true, message: "Please enter your email" },
                { type: "email", message: "Enter a valid email" },
              ]}
            >
              <Input placeholder="Enter your email" />
            </Form.Item>

            <Form.Item
              label="Set Password"
              name="password"
              rules={[
                { required: true, message: "Please set your password" },
                { min: 8, message: "Password must be at least 8 characters" },
              ]}
            >
              <Input.Password placeholder="Enter password" />
            </Form.Item>

            <Form.Item
              label="Confirm Password"
              name="confirmPassword"
              dependencies={["password"]}
              rules={[
                { required: true, message: "Please confirm your password" },
                ({ getFieldValue }) => ({
                  validator(_, value) {
                    if (!value || getFieldValue("password") === value) {
                      return Promise.resolve();
                    }
                    return Promise.reject(new Error("Passwords do not match!"));
                  },
                }),
              ]}
            >
              <Input.Password placeholder="Confirm password" />
            </Form.Item>

            <Form.Item>
              <Button type="primary" htmlType="submit" block style={{ height: 40 }}>
                Continue
              </Button>
            </Form.Item>
          </Form>
        </div>
      </Col>

      {/* Right Image Section */}
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

export default SignupPage;
