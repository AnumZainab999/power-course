import React from "react";
import { Button, Row, Col, Typography, notification } from "antd";
import { GoogleOutlined, FacebookOutlined, MailOutlined } from "@ant-design/icons";
import { useNavigate } from "react-router-dom";
import "antd/dist/reset.css";
import signupImage from "../assets/signup.png";

// 👇 import Firebase Auth
import { signInWithPopup } from "firebase/auth";
import { auth, googleProvider } from "../firebase";

const { Title, Text } = Typography;

const GoogleLogin = () => {
  const navigate = useNavigate();

  // 👇 Function to handle Google login
  const handleGoogleLogin = async () => {
    try {
      const result = await signInWithPopup(auth, googleProvider);
      const user = result.user;

      console.log("Google login success:", user);

      // ✅ Success notification
      notification.success({
        message: "Login Successful",
        description: `Welcome ${user.displayName || "User"}!`,
        placement: "topRight",
      });

      // Redirect to home
      navigate("/home");
    } catch (error) {
      console.error("Google login error:", error);

      // ❌ Error notification
      notification.error({
        message: "Login Failed",
        description: "Failed to sign in with Google. Please try again.",
        placement: "topRight",
      });
    }
  };

  return (
    <Row style={{ minHeight: "100vh" }}>
      {/* Left Section (Buttons) */}
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
            Sign In in Seconds
          </Title>
          <Text>
            Use your email or another service to continue and start your learning journey
          </Text>

          <div style={{ marginTop: 24 }}>
            {/* Social Buttons */}
            <Button
              icon={<GoogleOutlined />}
              block
              style={{
                height: 40,
                marginBottom: 10,
                borderColor: "#d9d9d9",
              }}
              onClick={handleGoogleLogin}
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
              onClick={() => navigate("/login")}
            >
              Continue with Email
            </Button>
          </div>
        </div>
      </Col>

      {/* Right Section (Image with overlay text) */}
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

export default GoogleLogin;
