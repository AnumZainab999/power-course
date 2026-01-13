import React, { useState } from "react";
import { Row, Col, Form, Input, Button, Typography, Space, message, Alert } from "antd";
import { saveContactMessage } from "../services/contactService";

const { Title, Text, Link } = Typography;
const { TextArea } = Input;

const ContactUs = () => {
  const [form] = Form.useForm();
  const [loading, setLoading] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null); // null, 'success', 'error'

  const handleSubmit = async (values) => {
    setLoading(true);
    setSubmitStatus(null);
    
    try {
      const result = await saveContactMessage(values);
      
      if (result.success) {
        message.success(result.message || "Message sent successfully!");
        setSubmitStatus('success');
        form.resetFields(); // Clear form after successful submission
        
        // Auto hide success message after 5 seconds
        setTimeout(() => {
          setSubmitStatus(null);
        }, 5000);
      } else {
        message.error(result.error || "Failed to send message. Please try again.");
        setSubmitStatus('error');
      }
    } catch (error) {
      console.error("Submission error:", error);
      message.error("An unexpected error occurred. Please try again later.");
      setSubmitStatus('error');
    } finally {
      setLoading(false);
    }
  };

  const inputStyle = {
    borderRadius: 10,
    backgroundColor: "#4F5C88",
    color: "#fff",
    border: "none",
    height: 42,
    fontSize: 16,
    width: "100%",
    padding: "0 12px",
  };

  // Custom validation rules
  const validateMessages = {
    required: '${label} is required!',
    types: {
      email: '${label} is not a valid email!',
    },
  };

  return (
    <div
      style={{
        backgroundColor: "#2E3664",
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "50px 20px",
        fontFamily: 'Poppins, sans-serif',
      }}
    >
      <style>
        {`
          .custom-input::placeholder,
          .custom-textarea::placeholder {
            color: #C0C7D8;
            opacity: 1;
          }
          
          .custom-input:focus,
          .custom-textarea:focus {
            border-color: #ff6eb4 !important;
            box-shadow: 0 0 0 2px rgba(255, 110, 180, 0.2) !important;
          }
          
          .submit-btn {
            transition: all 0.3s ease;
          }
          
          .submit-btn:hover {
            transform: translateY(-2px);
            box-shadow: 0 4px 12px rgba(255, 110, 180, 0.3);
          }
        `}
      </style>

      <div
        style={{
          display: "flex",
          justifyContent: "center",
          width: "100%",
          maxWidth: 1300,
        }}
      >
        <Row gutter={[60, 30]} justify="center" style={{ width: "100%" }}>
          {/* Left Column - Form */}
          <Col xs={24} md={13} lg={9}>
            <Title level={2} style={{ color: "#ff6eb4", fontWeight: "bold" }}>
              Just Say Hello !
            </Title>
            <Text style={{ color: "#C0C7D8", display: "block", marginBottom: 30 }}>
              Let us know more about you!
            </Text>

            {/* Success/Error Messages */}
            {submitStatus === 'success' && (
              <Alert
                message="Success!"
                description="Your message has been sent successfully. We'll get back to you soon!"
                type="success"
                showIcon
                style={{ marginBottom: 24, borderRadius: 10 }}
              />
            )}
            
            {submitStatus === 'error' && (
              <Alert
                message="Error"
                description="Failed to send message. Please try again later."
                type="error"
                showIcon
                style={{ marginBottom: 24, borderRadius: 10 }}
              />
            )}

            <Form
              form={form}
              layout="vertical"
              onFinish={handleSubmit}
              validateMessages={validateMessages}
              disabled={loading}
            >
              <Row gutter={24}>
                <Col xs={24} sm={12}>
                  <Form.Item
                    name="firstName"
                    label={<Text style={{ color: "#C0C7D8" }}>First Name</Text>}
                    rules={[{ required: true }]}
                    style={{ marginBottom: 20 }}
                  >
                    <Input
                      placeholder="First Name"
                      className="custom-input"
                      style={inputStyle}
                      disabled={loading}
                    />
                  </Form.Item>
                </Col>
                <Col xs={24} sm={12}>
                  <Form.Item
                    name="lastName"
                    label={<Text style={{ color: "#C0C7D8" }}>Last Name</Text>}
                    rules={[{ required: true }]}
                    style={{ marginBottom: 20 }}
                  >
                    <Input
                      placeholder="Last Name"
                      className="custom-input"
                      style={inputStyle}
                      disabled={loading}
                    />
                  </Form.Item>
                </Col>
              </Row>

              <Row gutter={24}>
                <Col xs={24} sm={12}>
                  <Form.Item
                    name="email"
                    label={<Text style={{ color: "#C0C7D8" }}>Email</Text>}
                    rules={[
                      { required: true },
                      { type: 'email' }
                    ]}
                    style={{ marginBottom: 20 }}
                  >
                    <Input
                      placeholder="Email"
                      className="custom-input"
                      style={inputStyle}
                      disabled={loading}
                    />
                  </Form.Item>
                </Col>
                <Col xs={24} sm={12}>
                  <Form.Item
                    name="phone"
                    label={<Text style={{ color: "#C0C7D8" }}>Phone</Text>}
                    rules={[{ required: true }]}
                    style={{ marginBottom: 20 }}
                  >
                    <Input
                      placeholder="Phone"
                      className="custom-input"
                      style={inputStyle}
                      disabled={loading}
                    />
                  </Form.Item>
                </Col>
              </Row>

              <Form.Item
                name="message"
                label={<Text style={{ color: "#C0C7D8" }}>Message</Text>}
                rules={[{ required: true }]}
                style={{ marginBottom: 25 }}
              >
                <TextArea
                  rows={6}
                  placeholder="Message"
                  className="custom-textarea"
                  style={{ ...inputStyle, height: 150, resize: 'vertical' }}
                  disabled={loading}
                />
              </Form.Item>

              <Form.Item>
                <Button
                  type="primary"
                  htmlType="submit"
                  className="submit-btn"
                  loading={loading}
                  style={{
                    backgroundColor: "#ff6eb4",
                    borderColor: "#ff6eb4",
                    height: 40,
                    fontSize: 16,
                    fontWeight: "bold",
                    width: 100,
                  }}
                >
                  {loading ? "SENDING..." : "SUBMIT"}
                </Button>
              </Form.Item>
            </Form>
          </Col>

          {/* Right Column - Contact Info */}
          <Col xs={24} md={8} lg={6}>
            <Title level={2} style={{ color: "#ff6eb4", fontWeight: "bold" }}>
              Contact<br /> Information
            </Title>
            <Text style={{ color: "#C0C7D8", display: "block", marginBottom: 15, fontSize: 16, marginTop: 20 }}>
              77 Baker Street <br />
              Bondowoso. 87655 <br />
              Indonesia
            </Text>

            <Text style={{ color: "#C0C7D8", display: "block", marginBottom: 15, fontSize: 16 }}>
              Call Us: +62 81 334 61 00
            </Text>

            <Text style={{ color: "#C0C7D8", display: "block", marginBottom: 15, fontSize: 16 }}>
              We are open from Monday – Friday <br />
              08.00 am – 05.00 pm
            </Text>

            <Title level={2} style={{ color: "#ff6eb4", marginTop: 40, fontWeight: "bold" }}>
              Follow Us
            </Title>
            <Space size="middle">
              <Link href="https://facebook.com" target="_blank" style={{ color: "#C0C7D8" }}>facebook</Link>
              <Link href="https://instagram.com" target="_blank" style={{ color: "#C0C7D8" }}>instagram</Link>
              <Link href="https://vimeo.com" target="_blank" style={{ color: "#C0C7D8" }}>vimeo</Link>
            </Space>
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default ContactUs;