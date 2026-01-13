import React from "react";
import { Row, Col, Typography, Image, Card, Button } from "antd";
import heroImg from "../assets/privacy.png"; // You can replace this with a privacy-specific image
import { useNavigate } from "react-router-dom";

const { Title, Paragraph, Text } = Typography;

const Privacy = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/contact-us");
  };

  const commonTextStyle = {
    fontSize: "16px",
    lineHeight: "1.8",
    color: "#000",
    margin: 0,
  };

  const boldHeaderStyle = {
    ...commonTextStyle,
    fontWeight: "bold",
    display: "block",
  };

  const listStyle = {
    listStyleType: "none",
    paddingLeft: 0,
    margin: "8px 0",
  };

  const listItemStyle = {
    ...commonTextStyle,
    display: "flex",
    alignItems: "flex-start",
    marginBottom: "6px",
  };

  const dotGapStyle = {
    paddingRight: "16px",
    flexShrink: 0,
  };

  const sectionSpacer = <div style={{ height: "48px" }} />;

  const DotListItem = ({ children }) => (
    <li style={listItemStyle}>
      <span style={dotGapStyle}>•</span>
      <span>{children}</span>
    </li>
  );

  return (
    <div style={{ width: "100%", background: "#ffffff" }}>
      {/* ===== TOP IMAGE ===== */}
      <Image
        src={heroImg}
        preview={false}
        style={{ width: "100%", height: "auto", display: "block", objectFit: "cover" }}
      />

      {/* ===== CONTENT SECTION ===== */}
      <div style={{ padding: "48px 16px" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
        <div style={{ maxWidth: 700, margin: "0 auto" }}>
               <Title level={2} style={{ color: "#5E4D8C", textAlign: "center", fontFamily: "'Days One', sans-serif", fontWeight: "400", marginBottom: "24px" }}>
          We Value Your Privacy
          </Title>

          <Paragraph style={{ ...commonTextStyle, textAlign: "center",  margin: "0 auto" ,paddingBottom:"30px"}}>
            
At PowerCourses, we are committed to protecting your privacy. This Privacy Policy explains how we collect, use, and safeguard your information when you visit our website and use our educational services.
          </Paragraph>

        </div>
          {sectionSpacer}

          <Row gutter={[32, 32]}>
            {/* ===== Information We Collect ===== */}
            <Col xs={24} md={8}>
              <Text style={boldHeaderStyle}>Information We Collect</Text>
            </Col>
            <Col xs={24} md={16}>
              <Paragraph style={commonTextStyle}>
                We collect information that you provide directly to us, including:
              </Paragraph>
              <ul style={listStyle}>
                <DotListItem><b>Account Information:</b> Name, email address, and password when you register.</DotListItem>
                <DotListItem><b>Payment Information:</b> If you purchase a course, we collect billing details (processed securely via our payment partners).</DotListItem>
                <DotListItem><b>Profile Data:</b> Information you choose to add to your student profile.</DotListItem>
                <DotListItem><b>Communication:</b> Any information you provide when contacting our support team.</DotListItem>
              </ul>
            </Col>

            {/* ===== How We Use Your Information ===== */}
            <Col xs={24} md={8}>
              <Text style={boldHeaderStyle}>How We Use Your Information</Text>
            </Col>
            <Col xs={24} md={16}>
              <Paragraph style={commonTextStyle}>
                We use the collected data to:
              </Paragraph>
              <ul style={listStyle}>
                <DotListItem>Provide and maintain our educational platform.</DotListItem>
                <DotListItem>Process your transactions and send course enrollments.</DotListItem>
                <DotListItem>Send you technical notices, updates, and administrative messages.</DotListItem>
                <DotListItem>Improve our content and user experience based on your feedback.</DotListItem>
                <DotListItem>Comply with legal obligations.</DotListItem>
              </ul>
            </Col>

            {/* ===== Cookies and Tracking ===== */}
            <Col xs={24} md={8}>
              <Text style={boldHeaderStyle}>Cookies and Tracking</Text>
            </Col>
            <Col xs={24} md={16}>
              <Paragraph style={commonTextStyle}>
                We use cookies to enhance your experience. These help us:
              </Paragraph>
              <ul style={listStyle}>
                <DotListItem>Keep you logged in.</DotListItem>
                <DotListItem>Understand how you interact with our courses.</DotListItem>
                <DotListItem>Remember your preferences (e.g., dark mode or language).</DotListItem>
              </ul>
              <Paragraph style={commonTextStyle}>
                Note: You can manage your cookie settings through your browser at any time.
              </Paragraph>
            </Col>

            {/* ===== Data Sharing and Disclosure ===== */}
            <Col xs={24} md={8}>
              <Text style={boldHeaderStyle}>Data Sharing and Disclosure</Text>
            </Col>
            <Col xs={24} md={16}>
              <Paragraph style={commonTextStyle}>
                We do not sell your personal data. We only share information with:
              </Paragraph>
              <ul style={listStyle}>
                <DotListItem><b>Service Providers:</b> Third-party vendors who help with payment processing, email delivery, and hosting.</DotListItem>
                <DotListItem><b>Legal Requirements:</b> If required by law to protect our rights or the safety of our users.</DotListItem>
              </ul>
            </Col>

            {/* ===== Your Rights ===== */}
            <Col xs={24} md={8}>
              <Text style={boldHeaderStyle}>Your Rights</Text>
            </Col>
            <Col xs={24} md={16}>
              <Paragraph style={commonTextStyle}>
                Depending on your location, you may have the right to:
              </Paragraph>
              <ul style={listStyle}>
                <DotListItem>Access the personal data we hold about you.</DotListItem>
                <DotListItem>Request the correction or deletion of your information.</DotListItem>
                <DotListItem>Withdraw consent for marketing communications.</DotListItem>
              </ul>
            </Col>

            {/* ===== Security ===== */}
            <Col xs={24} md={8}>
              <Text style={boldHeaderStyle}>Security</Text>
            </Col>
            <Col xs={24} md={16}>
              <Paragraph style={commonTextStyle}>
                We implement industry-standard security measures to protect your data. However, no method of transmission over the internet is 100% secure, and we cannot guarantee absolute security.
              </Paragraph>
            </Col>
          </Row>

          {/* ===== CALL TO ACTION CARD ===== */}
          <Card
            style={{
              background: "#FFD6D6",
              textAlign: "center",
              marginTop: 60,
              borderRadius: 0,
              padding: "40px 0",
              maxWidth: "900px",
              margin: "60px auto 0",
            }}
            bordered={false}
          >
            <Title level={4} style={{ margin: 0, padding: "0 20px" }}>
             If you have concerns about our Privacy Policy please contact us 
            </Title>
            <Button
              size="large"
              style={{
                backgroundColor: "#FFD6D6",
                color: "#020202",
                border: "1.5px solid #020202",
                borderRadius: "0",
                minWidth: 160,
                height: 44,
                marginTop: "20px",
                fontWeight: 500,
              }}
              onClick={handleClick}
            >
              Contact Us
            </Button>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Privacy;
