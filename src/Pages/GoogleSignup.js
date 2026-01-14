import React from "react";
import { Button, Row, Col, Typography, notification } from "antd";
import { GoogleOutlined, FacebookOutlined, MailOutlined } from "@ant-design/icons";
import { useNavigate } from "react-router-dom";
import "antd/dist/reset.css";
import signupImage from "../assets/signup.png";

// Firebase Auth
import { signInWithPopup } from "firebase/auth";
import { auth, googleProvider } from "../firebase";

const { Title, Text } = Typography;

const GoogleSignup = () => {
  const navigate = useNavigate();

  const handleGoogleSignup = async () => {
    try {
      // ✅ Step 1: Sign in with Google
      const result = await signInWithPopup(auth, googleProvider);
      const userEmail = result.user.email;
      console.log("Google signup success:", userEmail);

      // ✅ Step 2: Send OTP to backend API
      const response = await fetch(
        "https://fancity-backend-n9mm31u8s-komal-anums-projects.vercel.app/api/auth/send-otp",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ email: userEmail }),
        }
      );

      const data = await response.json();
      if (!response.ok) throw new Error(data.message || "Failed to send OTP");

      // ✅ Success notification
      notification.success({
        message: "OTP Sent Successfully",
        description: `An OTP has been sent to ${userEmail}. Please verify your email to continue.`,
        placement: "topRight",
      });

      // Save email locally for verification step
      localStorage.setItem("signupEmail", userEmail);

      // Navigate to verification page
      navigate("/signup-code");
    } catch (error) {
      console.error("Google signup error:", error);

      // ❌ Error notification
      notification.error({
        message: "Google Signup Failed",
        description:
          error.message ||
          "Google signup or OTP sending failed. Please try again later.",
        placement: "topRight",
      });
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
            Sign up in Seconds
          </Title>
          <Text>
            Use your Google or email account to continue and start your learning journey.
          </Text>

          <div style={{ marginTop: 24 }}>
            <Button
              icon={<GoogleOutlined />}
              block
              style={{
                height: 40,
                marginBottom: 10,
                borderColor: "#d9d9d9",
              }}
              onClick={handleGoogleSignup}
            >
              Continue with Google
            </Button>

            <Button
              icon={<FacebookOutlined />}
              block
              style={{
                height: 40,
                marginBottom: 10,
                borderColor: "#d9d9d9",
              }}
            >
              Continue with Facebook
            </Button>

            <Button
              icon={<MailOutlined />}
              block
              style={{
                height: 40,
                marginBottom: 20,
                borderColor: "#d9d9d9",
              }}
              onClick={() => navigate("/signup")}
            >
              Continue with Email
            </Button>
          </div>
        </div>
      </Col>

      {/* Right Section */}
      <Col
        xs={24}
        md={12}
        style={{
          position: "relative",
          backgroundImage: `url(${signupImage})`,
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

export default GoogleSignup;
