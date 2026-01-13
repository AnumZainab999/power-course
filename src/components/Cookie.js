import React from "react";
import { Row, Col, Typography, Image, Card, Button } from "antd";
import heroImg from "../assets/cookie.png"; 
import { useNavigate } from "react-router-dom";

const { Title, Paragraph, Text } = Typography;

const Cookie = () => {
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
          {sectionSpacer}
          {/* ===== COOKIE POLICY SECTION ===== */}
         <Row gutter={[32, 32]}>
  {/* ===== SECTION 1 ===== */}
  <Col xs={24} md={8}>
    <Text style={boldHeaderStyle}>Information About Our Use of Cookies and Similar Technologies</Text>
  </Col>
  <Col xs={24} md={16}>
    <Paragraph style={commonTextStyle}>
      Power Course (“we,” “our,” or “us”) uses cookies and similar technologies on our website www.powercourse.com and its subdomains (collectively referred to as the “Site”). Our Site uses these technologies to:
    </Paragraph>
    <ul style={listStyle}>
      <DotListItem>Distinguish you from other users.</DotListItem>
      <DotListItem>Improve your experience while browsing and learning.</DotListItem>
      <DotListItem>Help us understand platform usage for performance improvements.</DotListItem>
    </ul>
    <Paragraph style={commonTextStyle}>
      By continuing to browse or use Power Course, you agree to our use of cookies and similar technologies as described in this Cookie Policy.
    </Paragraph>
  </Col>

  {/* ===== SECTION 2 ===== */}
  <Col xs={24} md={8}>
    <Text style={boldHeaderStyle}>Types of Technologies We Use</Text>
  </Col>
  <Col xs={24} md={16}>
    <Paragraph style={commonTextStyle}>
      Cookies are small text files placed on your computer or device when you visit a website. These help us remember your preferences, maintain session data and improve the Site’s performance. We use the following types of cookies on Power Course:
    </Paragraph>

    <Text style={{ ...boldHeaderStyle, fontSize: 16 }}>a. Strictly Necessary Cookies</Text>
    <ul style={listStyle}>
      <DotListItem>Required for the website to function properly — e.g., login, online classes, dashboard.</DotListItem>
      <DotListItem>Examples: session_token, csrf_token, recaptcha_cookie</DotListItem>
    </ul>

    <Text style={{ ...boldHeaderStyle, fontSize: 16 }}>b. Functional Cookies</Text>
    <ul style={listStyle}>
      <DotListItem>Remember your preferences and personalize learning experience.</DotListItem>
      <DotListItem>Examples: user_language, theme_mode, remember_me</DotListItem>
    </ul>

    <Text style={{ ...boldHeaderStyle, fontSize: 16 }}>c. Analytical / Performance Cookies</Text>
    <ul style={listStyle}>
      <DotListItem>Help us understand how users interact with Power Course and improve the platform.</DotListItem>
      <DotListItem>Examples: _ga, _gid, _gat, _pc_analytics</DotListItem>
    </ul>

    <Text style={{ ...boldHeaderStyle, fontSize: 16 }}>d. Marketing and Communication Cookies</Text>
    <ul style={listStyle}>
      <DotListItem>Used to promote upcoming courses, webinars or programs that might interest you.</DotListItem>
      <DotListItem>Third-party services like Google Ads or Meta (Facebook) Ads may be used for limited educational promotions.</DotListItem>
    </ul>
  </Col>

  {/* ===== SECTION 3 ===== */}
  <Col xs={24} md={8}>
    <Text style={boldHeaderStyle}>Why We Use Cookies and Similar Technologies</Text>
  </Col>
  <Col xs={24} md={16}>
    <Paragraph style={commonTextStyle}>
      Power Course uses cookies and related tools for the following purposes:
    </Paragraph>
    <ul style={listStyle}>
      <DotListItem><b>Functionality:</b> To operate SPARK and Parent Portal, maintain secure logins and manage class sessions.</DotListItem>
      <DotListItem><b>Personalization:</b> To remember your learning progress, preferred settings and dashboard layout.</DotListItem>
      <DotListItem><b>Analytics:</b> To understand how students and parents use our Site and improve the platform.</DotListItem>
      <DotListItem><b>Marketing:</b> To share relevant updates, programs or courses aligned with your interests.</DotListItem>
    </ul>
  </Col>

  {/* ===== SECTION 4 ===== */}
  <Col xs={24} md={8}>
    <Text style={boldHeaderStyle}>Third-Party Cookies</Text>
  </Col>
  <Col xs={24} md={16}>
    <Paragraph style={commonTextStyle}>
      Some cookies on our Site may be placed by trusted third parties such as:
    </Paragraph>
    <ul style={listStyle}>
      <DotListItem>Google Analytics – To collect anonymous usage data.</DotListItem>
      <DotListItem>Stripe or PayPal – For secure payment processing (if you purchase courses).</DotListItem>
      <DotListItem>Cloudflare – For website security and performance optimization.</DotListItem>
    </ul>
  </Col>

  {/* ===== SECTION 5 ===== */}
  <Col xs={24} md={8}>
    <Text style={boldHeaderStyle}>Managing Your Cookie Preferences</Text>
  </Col>
  <Col xs={24} md={16}>
    <Paragraph style={commonTextStyle}>
      You can control or delete cookies at any time through your browser settings. Most browsers allow you to:
    </Paragraph>
    <ul style={listStyle}>
      <DotListItem>Block all cookies.</DotListItem>
      <DotListItem>Delete existing cookies.</DotListItem>
      <DotListItem>Receive a warning before cookies are stored.</DotListItem>
    </ul>
    <Paragraph style={commonTextStyle}>
      Please note: Disabling cookies may affect certain features on Power Course, such as login sessions or class attendance tracking. For more information about managing cookies, visit <a href="https://www.allaboutcookies.org" target="_blank">www.allaboutcookies.org</a>.
    </Paragraph>
  </Col>

  {/* ===== SECTION 6 ===== */}
  <Col xs={24} md={8}>
    <Text style={boldHeaderStyle}>Social Media and Integrations</Text>
  </Col>
  <Col xs={24} md={16}>
    <Paragraph style={commonTextStyle}>
      If you use social media features (like sharing class updates via Facebook or Google login), these platforms may collect data through cookies and other tracking technologies. Please review the privacy settings on your social media accounts to control this data sharing.
    </Paragraph>
  </Col>

  {/* ===== SECTION 7 ===== */}
  <Col xs={24} md={8}>
    <Text style={boldHeaderStyle}>Consent and Legitimate Use</Text>
  </Col>
  <Col xs={24} md={16}>
    <Paragraph style={commonTextStyle}>
      By using Power Course, you consent to our use of cookies as described in this policy. Certain cookies are essential for providing our online learning services and operate based on legitimate educational purposes.
    </Paragraph>
  </Col>

  {/* ===== SECTION 8 ===== */}
  <Col xs={24} md={8}>
    <Text style={boldHeaderStyle}>Changes to This Cookie Policy</Text>
  </Col>
  <Col xs={24} md={16}>
    <Paragraph style={commonTextStyle}>
      We may update this Cookie Policy from time to time to reflect changes in technology, legal requirements or our services. Updates will be posted on this page with a new “Last Updated” date.
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
              If you have concerns about our use of cookies please contact us 
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

export default Cookie;
