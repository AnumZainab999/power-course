import React from "react";
import { Form, Input, Button, Row, Col, Typography, notification } from "antd";
import { useNavigate } from "react-router-dom";
import { collection, query, where, getDocs } from "firebase/firestore";
import { db } from "../firebase";
import "antd/dist/reset.css";
import classroomImage from "../assets/signup.png";

const { Title, Text } = Typography;

const ForgetPasswordPage = () => {
  const navigate = useNavigate();

  const onFinish = async ({ email }) => {
    try {
      const usersRef = collection(db, "power_courses_users");
      const q = query(usersRef, where("email", "==", email));
      const snapshot = await getDocs(q);

      if (snapshot.empty) {
        notification.error({
          message: "Email Not Found",
          description: "No account exists with this email.",
          placement: "topRight",
        });
        return;
      }

      // ✅ Save email for next step
      localStorage.setItem("resetEmail", email);

      notification.success({
        message: "Email Verified",
        description: "You can now reset your password.",
        placement: "topRight",
      });

      navigate("/forgot-password");
    } catch (error) {
      console.error(error);
      notification.error({
        message: "Something went wrong",
        description: "Please try again later.",
        placement: "topRight",
      });
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
          padding: 40,
        }}
      >
        <div style={{ maxWidth: 360, width: "100%" }}>
          <Title level={3}>Forgot Password?</Title>
          <Text>Enter your email to verify your account.</Text>

          <Form layout="vertical" onFinish={onFinish} style={{ marginTop: 24 }}>
            <Form.Item
              label="Email"
              name="email"
              rules={[
                { required: true, message: "Please enter your email" },
                { type: "email", message: "Enter a valid email" },
              ]}
            >
              <Input placeholder="Enter your registered email" />
            </Form.Item>

            <Form.Item>
              <Button type="primary" htmlType="submit" block>
                Continue
              </Button>
            </Form.Item>
          </Form>
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

export default ForgetPasswordPage;
