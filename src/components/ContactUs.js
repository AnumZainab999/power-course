import React from "react";
import { Row, Col, Form, Input, Button, Typography, Space } from "antd";

const { Title, Text, Link } = Typography;
const { TextArea } = Input;

const ContactUs = () => {
  const [form] = Form.useForm();

  const handleSubmit = (values) => {
    console.log("Form Values:", values);
  };

  const inputStyle = {
    borderRadius: 10,
    backgroundColor: "#4F5C88",
    color: "#fff",
    border: "none",
    height: 42,           // slightly taller for better UX
    fontSize: 16,
    width: "100%",
    padding: "0 12px",
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
        fontFamily: 'Poppins,sans-serif',
      }}
    >
      <style>
        {`
          .custom-input::placeholder,
          .custom-textarea::placeholder {
            color: #C0C7D8;
            opacity: 1;
          }
          /* Ensure the button also stretches if needed */
          .submit-btn {
            width: 150px; 
          }
        `}
      </style>

      <div
        style={{
          display: "flex",
          justifyContent: "center",
          width: "100%",
          maxWidth: 1300, // Increased overall container width
        }}
      >
        <Row gutter={[60, 30]} justify="center" style={{ width: "100%" }}>
          {/* Left Column - Form (Increased width from 12 to 14) */}
          <Col xs={24} md={13} lg={9}>
            <Title level={2} style={{ color: "#ff6eb4", fontWeight: "bold" }}>
              Just Say Hello !
            </Title>
            <Text style={{ color: "#C0C7D8", display: "block", marginBottom: 30 }}>
              Let us know more about you!
            </Text>

            <Form form={form} layout="vertical" onFinish={handleSubmit}>
              <Row gutter={24}>
                <Col xs={24} sm={12}>
                  <Form.Item
                    name="firstName"
                    rules={[{ required: true, message: "Please enter first name" }]}
                    style={{ marginBottom: 20 }}
                  >
                    <Input
                      placeholder="First Name"
                      className="custom-input"
                      style={inputStyle}
                    />
                  </Form.Item>
                </Col>
                <Col xs={24} sm={12}>
                  <Form.Item
                    name="lastName"
                    rules={[{ required: true, message: "Please enter last name" }]}
                    style={{ marginBottom: 20 }}
                  >
                    <Input
                      placeholder="Last Name"
                      className="custom-input"
                      style={inputStyle}
                    />
                  </Form.Item>
                </Col>
              </Row>

              <Row gutter={24}>
                <Col xs={24} sm={12}>
                  <Form.Item
                    name="email"
                    rules={[{ required: true, message: "Please enter email" }]}
                    style={{ marginBottom: 20 }}
                  >
                    <Input
                      placeholder="Email"
                      className="custom-input"
                      style={inputStyle}
                    />
                  </Form.Item>
                </Col>
                <Col xs={24} sm={12}>
                  <Form.Item
                    name="phone"
                    rules={[{ required: true, message: "Please enter phone number" }]}
                    style={{ marginBottom: 20 }}
                  >
                    <Input
                      placeholder="Phone"
                      className="custom-input"
                      style={inputStyle}
                    />
                  </Form.Item>
                </Col>
              </Row>

              <Form.Item
                name="message"
                rules={[{ required: true, message: "Please enter message" }]}
                style={{ marginBottom: 25 }}
              >
                <TextArea
                  rows={6}
                  placeholder="Message"
                  className="custom-textarea"
                  style={{ ...inputStyle, height: 150 }} // Increased height for the text area
                />
              </Form.Item>

              <Form.Item>
               <Button
  type="primary"
  htmlType="submit"
  className="submit-btn"
  style={{
    backgroundColor: "#ff6eb4",
    borderColor: "#ff6eb4",
    height: 40,
    fontSize: 16,
    fontWeight: "bold",
    width: 100,          
  }}
>
  SUBMIT
</Button>

              </Form.Item>
            </Form>
          </Col>

          {/* Right Column - Contact Info (Decreased width slightly to balance) */}
          <Col xs={24} md={8} lg={6}>
            <Title level={2} style={{ color: "#ff6eb4", fontWeight: "bold" }}>
              Contact<br /> Information
            </Title>
            <Text style={{ color: "#C0C7D8", display: "block", marginBottom: 15, fontSize: 16,marginTop:20 }}>
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
              <Link style={{ color: "#C0C7D8" }}>facebook</Link>
              <Link style={{ color: "#C0C7D8" }}>instagram</Link>
              <Link style={{ color: "#C0C7D8" }}>vimeo</Link>
            </Space>
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default ContactUs;