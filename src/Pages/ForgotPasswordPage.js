import React, { useState } from "react";
import { Form, Input, Button, Row, Col, Typography, notification } from "antd";
import { useNavigate } from "react-router-dom";
import { collection, query, where, getDocs, updateDoc, doc } from "firebase/firestore";
import { db } from "../firebase";
import bcrypt from "bcryptjs";
import "antd/dist/reset.css";
import classroomImage from "../assets/signup.png";

const { Title, Text } = Typography;

const ForgotPasswordPage = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);

  const onFinish = async ({ newPassword, confirmPassword }) => {
    const email = localStorage.getItem("resetEmail");

    if (!email) {
      notification.error({
        message: "Email Not Found",
        description: "Please restart the password reset process.",
        placement: "topRight",
      });
      return;
    }

    if (newPassword !== confirmPassword) {
      notification.error({
        message: "Passwords Do Not Match",
        description: "Please re-enter matching passwords.",
        placement: "topRight",
      });
      return;
    }

    try {
      setLoading(true);

      // ✅ Step 1: Find user in Firestore
      const usersRef = collection(db, "power_courses_users");
      const q = query(usersRef, where("email", "==", email));
      const querySnapshot = await getDocs(q);

      if (querySnapshot.empty) {
        notification.error({
          message: "User Not Found",
          description: "No account exists for this email.",
          placement: "topRight",
        });
        return;
      }

      const userDoc = querySnapshot.docs[0];
      const userRef = doc(db, "power_courses_users", userDoc.id);

      // ✅ Step 2: Hash new password
      const hashedPassword = await bcrypt.hash(newPassword, 10);

      // ✅ Step 3: Update Firestore password field
      await updateDoc(userRef, {
        password: hashedPassword,
        isPasswordHashed: true,
      });

      // ✅ Step 4: Clean up and redirect
      localStorage.removeItem("resetEmail");

      notification.success({
        message: "Password Updated",
        description: "Your password has been successfully updated.",
        placement: "topRight",
      });

      navigate("/login");
    } catch (error) {
      console.error(error);
      notification.error({
        message: "Error Updating Password",
        description: error.message,
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
          padding: 40,
        }}
      >
        <div style={{ maxWidth: 360, width: "100%" }}>
          <Title level={3}>Reset Your Password</Title>
          <Text>Enter and confirm your new password.</Text>

          <Form layout="vertical" onFinish={onFinish} style={{ marginTop: 24 }}>
            <Form.Item
              label="New Password"
              name="newPassword"
              rules={[
                { required: true, message: "Please enter your new password" },
                { min: 8, message: "Password must be at least 8 characters long" },
              ]}
            >
              <Input.Password placeholder="Enter new password" />
            </Form.Item>

            <Form.Item
              label="Confirm Password"
              name="confirmPassword"
              dependencies={["newPassword"]}
              rules={[{ required: true, message: "Please confirm your password" }]}
            >
              <Input.Password placeholder="Confirm new password" />
            </Form.Item>

            <Form.Item>
              <Button
                type="primary"
                htmlType="submit"
                loading={loading}
                block
                style={{ height: 40 }}
              >
                Update Password
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
            Reset Password
          </Title>
        </div>
      </Col>
    </Row>
  );
};

export default ForgotPasswordPage;
