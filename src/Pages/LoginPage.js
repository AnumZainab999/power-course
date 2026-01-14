import React, { useState } from "react";
import { Form, Input, Button, Row, Col, Typography, notification } from "antd";
import { useNavigate } from "react-router-dom";
import { getUserByEmail } from "../services/userService";
import bcrypt from "bcryptjs";
import classroomImage from "../assets/signup.png";
import "antd/dist/reset.css";

const { Title, Text } = Typography;

const LoginPage = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);

  const onFinish = async ({ email, password }) => {
    setLoading(true);
    try {
      const user = await getUserByEmail(email);

      if (!user) {
        notification.error({
          message: "Login Failed",
          description: "No account found with this email.",
          placement: "topRight",
        });
        return;
      }

      // 🔹 Ensure you use the same field name saved during signup
      const storedHash = user.password;

      // 🔹 Compare entered password with hashed password
      const isMatch = await bcrypt.compare(password, storedHash);

      if (!isMatch) {
        notification.error({
          message: "Invalid Credentials",
          description: "The password you entered is incorrect.",
          placement: "topRight",
        });
        return;
      }

      // ✅ Check if email verified
      if (!user.isEmailVerified) {
        notification.warning({
          message: "Email Not Verified",
          description: "Please verify your email before logging in.",
          placement: "topRight",
        });
        return;
      }

      // ✅ Save user session
      localStorage.setItem("userEmail", user.email);
      localStorage.setItem("userData", JSON.stringify(user));

      notification.success({
        message: "Login Successful",
        description: `Welcome back, ${user.fullName || user.email}!`,
        placement: "topRight",
      });

      navigate("/");
    } catch (error) {
      console.error(error);
      notification.error({
        message: "Login Failed",
        description: error.message || "Something went wrong. Please try again.",
        placement: "topRight",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <Row style={{ minHeight: "100vh" }}>
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
          <Title level={3}>Welcome Back</Title>
          <Text>Please log in with your credentials</Text>

          <Form layout="vertical" onFinish={onFinish} style={{ marginTop: 24 }}>
            <Form.Item
              label="Email"
              name="email"
              rules={[
                { required: true, message: "Please enter your email" },
                { type: "email", message: "Enter a valid email" },
              ]}
            >
              <Input placeholder="Enter your email" />
            </Form.Item>

            <Form.Item
              label="Password"
              name="password"
              rules={[{ required: true, message: "Please enter your password" }]}
            >
              <Input.Password placeholder="Enter your password" />
            </Form.Item>

            <Form.Item>
              <Button
                type="primary"
                htmlType="submit"
                block
                style={{ height: 40 }}
                loading={loading}
              >
                Login
              </Button>
            </Form.Item>
             <div style={{ textAlign: "right", marginTop: 10 }}>
              <Button
                type="link"
                style={{ color: "#1677ff", fontSize: 14, padding: 0 }}
                onClick={() => navigate("/signup")}
              >
                Sign up
              </Button>
            </div>
            <div style={{ textAlign: "center", marginTop: 10 }}>
              <Button
                type="link"
                style={{ color: "#1677ff", fontSize: 14, padding: 0 }}
                onClick={() => navigate("/forget-password")}
              >
                Forgot Password?
              </Button>
            </div>
          </Form>
        </div>
      </Col>

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

export default LoginPage;
