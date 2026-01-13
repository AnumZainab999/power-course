import React from "react";
import { Row, Col, Typography, Image, Card, Button,Grid  } from "antd";
import { useNavigate } from "react-router-dom";
import termsImg from "../assets/terms.png";

const { Title, Paragraph,Text } = Typography;
const { useBreakpoint } = Grid;
const TermsOfUse = () => {
    const screens = useBreakpoint();
     const navigate = useNavigate();
     const handleClick = () => {
    navigate("/contact-us");
  };
     // --- SHARED STYLES FOR CONSISTENCY ---
  const commonTextStyle = {
    fontSize: "16px",
    lineHeight: "1.6",
    color: "#000",
    margin: 0,
  };

  const boldHeaderStyle = {
    ...commonTextStyle,
    fontWeight: "bold",
    display: "block"
  };

  const listStyle = {
    listStyleType: "none",
    paddingLeft: 0, // Removes space before the list
    margin: 0,
  };

  const listItemStyle = {
    ...commonTextStyle,
    display: "flex",
    alignItems: "flex-start",
    marginBottom: "4px",
  };

  const dotGapStyle = {
    paddingRight: "40px", // The "8-digit" space after the dot
    flexShrink: 0,
  };

  const sectionSpacer = <div style={{ height: "48px" }} />;

  // Helper component to keep the code clean
  const DotListItem = ({ children }) => (
    <li style={listItemStyle}>
      <span style={dotGapStyle}>•</span>
      <span>{children}</span>
    </li>
  );
  return (
    <div style={styles.wrapper}>
      {/* ================= HERO SECTION ================= */}
      <Row gutter={[40, 40]} align="middle">
        {/* LEFT HERO TEXT */}
        <Col xs={24} md={14}>
          <Title level={1} style={styles.mainTitle}>
            We Value Your Privacy
          </Title>

          <Paragraph style={styles.paragraph}>
            Welcome to Power Course, an online learning platform designed to
            provide quality education, interactive classes and teacher support
            through our Spark and Education Connect services. By accessing or
            using Power Course, you agree to comply with and be bound by the
            following Terms of Use. Please read them carefully before using our
            website or services.
          </Paragraph>
        </Col>

        {/* RIGHT HERO IMAGE */}
        <Col xs={24} md={10}>
          <div>
           
            <Image
              src={termsImg}
              preview={false}
              style={styles.image}
            />
          </div>
        </Col>
      </Row>

      {/* ================= CONTENT SECTION ================= */}
   {/* ================= CONTENT SECTION ================= */}
<Row gutter={[32, 32]} style={{ marginTop: 40 }} >
  <Col xs={24} md={8}>
    <Text style={boldHeaderStyle}>Acceptance of Terms</Text>
  </Col>
  <Col xs={24} md={16}>
    <Paragraph style={commonTextStyle}>
      By accessing or using Power Course in any manner, including visiting the
      website, registering an account or using our services, you agree to be
      bound by these Terms of Use, our Privacy Policy and any additional
      guidelines or rules applicable to specific features of the platform.
    </Paragraph>
  </Col>
</Row>

{sectionSpacer}

{/* ===== SERVICES OVERVIEW ===== */}
<Row gutter={[32, 32]}>
  <Col xs={24} md={8}>
    <Text style={boldHeaderStyle}>Services Overview</Text>
  </Col>
  <Col xs={24} md={16}>
    <Paragraph style={{ ...commonTextStyle, marginBottom: 12 }}>
      Power Course provides online educational services through two main
      sections:
    </Paragraph>

    <Paragraph style={{ ...commonTextStyle, fontWeight: 400 }}>
      Spark
    </Paragraph>
    <ul style={listStyle}>
      <DotListItem>A virtual learning environment for students to attend classes</DotListItem>
      <DotListItem>Access educational resources</DotListItem>
      <DotListItem>Connect with teachers</DotListItem>
    </ul>

    <Paragraph style={{ ...commonTextStyle, fontWeight: 400, marginTop: 16 }}>
      Education Concierge
    </Paragraph>
    <ul style={listStyle}>
      <DotListItem>A platform for parents to monitor student progress</DotListItem>
      <DotListItem>Communicate with teachers</DotListItem>
      <DotListItem>Stay informed about academic updates</DotListItem>
    </ul>

    <Paragraph style={{ ...commonTextStyle, marginTop: 16 }}>
      We aim to create a safe, interactive and accessible space for both
      students and parents to engage in learning activities.
    </Paragraph>
  </Col>
</Row>

{sectionSpacer}

{/* ===== USER RESPONSIBILITIES ===== */}
<Row gutter={[32, 32]}>
  <Col xs={24} md={8}>
    <Text style={boldHeaderStyle}>User Responsibilities</Text>
  </Col>
  <Col xs={24} md={16}>
    <ul style={listStyle}>
      <DotListItem>You must provide accurate and complete information during registration</DotListItem>
      <DotListItem>You are responsible for maintaining the confidentiality of your login credentials</DotListItem>
      <DotListItem>You agree to use Power Course only for lawful educational purposes</DotListItem>
      <DotListItem>You must not share, copy or distribute course materials without authorization</DotListItem>
      <DotListItem>
        Any misuse of the platform — including harassment, cheating or
        unauthorized data sharing — may result in suspension or permanent
        account termination
      </DotListItem>
    </ul>
  </Col>
</Row>

{sectionSpacer}

{/* ===== INTELLECTUAL PROPERTY ===== */}
<Row gutter={[32, 32]}>
  <Col xs={24} md={8}>
    <Text style={boldHeaderStyle}>Intellectual Property</Text>
  </Col>
  <Col xs={24} md={16}>
    <Paragraph style={commonTextStyle}>
      All content, including course materials, text, graphics, logos, videos
      and software available on Power Course, is owned or licensed by us and is
      protected by copyright and intellectual property laws.
    </Paragraph>
    <Paragraph style={{ ...commonTextStyle, marginTop: 12 }}>
      You may not reproduce, distribute, modify or create derivative works from
      any part of the site without prior written permission from Power Course.
    </Paragraph>
  </Col>
</Row>

{sectionSpacer}

{/* ===== TERMINATION ===== */}
<Row gutter={[32, 32]}>
  <Col xs={24} md={8}>
    <Text style={boldHeaderStyle}>Termination of Use</Text>
  </Col>
  <Col xs={24} md={16}>
    <Paragraph style={commonTextStyle}>
      We reserve the right to suspend or terminate access to Power Course at any
      time if you violate these Terms or engage in activities harmful to the
      platform or its users.
    </Paragraph>
  </Col>
</Row>

{sectionSpacer}

{/* ===== LIMITATION OF LIABILITY ===== */}
<Row gutter={[32, 32]}>
  <Col xs={24} md={8}>
    <Text style={boldHeaderStyle}>Limitation of Liability</Text>
  </Col>
  <Col xs={24} md={16}>
    <Paragraph style={commonTextStyle}>
      Power Course strives to provide reliable and uninterrupted access to our
      platform. However, we do not guarantee that services will always be
      available or error-free.
    </Paragraph>
    <Paragraph style={{ ...commonTextStyle, marginTop: 12 }}>
      We are not responsible for any loss, interruption or damage arising from
      your use of the platform or reliance on any content provided.
    </Paragraph>
  </Col>
</Row>

  <Row justify="center" >
 <Col xs={24} sm={22} md={18} lg={16}>

    <Card
      style={{
        background: "#FFC7CA",
        textAlign: "center",
       margin: "48px auto 0",

        width: "100%",
        maxWidth: 800,
        padding: "20px 0",
        borderRadius: 0,
      }}
      bordered={false}
    >
      <Title
        level={2}
        style={{
          marginBottom: 16,
          fontWeight: "400",
          fontSize: screens.xs ? 24 : 26,
          textAlign: "center",
        }}
      >
        If you have concerns about these Terms please contact us 
      </Title>

      <Button
        size="large"
        onClick={handleClick}
        style={{
          backgroundColor: "#FFC7CA",
          color: "#020202",
          border: "1.5px solid #020202",
          width: screens.xs ? "100%" : 160,
          maxWidth: screens.xs ? 200 : "none",
          height: screens.xs ? 60 : 44,
          fontWeight: 500,
          borderRadius: 0,
          marginTop: 20,
          padding: "0 8px",
        }}
      >
        Contact Us
      </Button>
    </Card>
  </Col>
</Row>

    </div>
  );
};

export default TermsOfUse;

const styles = {
  wrapper: {
    padding: "60px 80px",
    backgroundColor: "#fff",
  },

  mainTitle: {
    color: "#5E4D8C",
    fontWeight: 400,
    marginBottom: 18,
    fontFamily: "'Days One', sans-serif"
  },

  sectionTitle: {
    fontWeight: 600,
    marginTop: 28,
    marginBottom: 10,
  },

  paragraph: {
    fontSize: 14,
    lineHeight: 1.8,
    color: "#555",
    maxWidth: 720,
  },

  list: {
    paddingLeft: 18,
    fontSize: 14,
    lineHeight: 1.9,
    color: "#555",
  },

  contentSection: {
    marginTop: 50,
  },

  imageCard: {
    position: "relative",
    borderRadius: 12,
    overflow: "hidden",
    boxShadow: "0 15px 40px rgba(0,0,0,0.15)",
  },

  overlayText: {
    position: "absolute",
    top: "45%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    background: "#fff",
    padding: "10px 18px",
    borderRadius: 6,
    fontWeight: 600,
    zIndex: 2,
  },
sideTitle: {
  fontWeight: 600,
  marginBottom: 32,
  color: "#111",
},

  image: {
    width: "100%",
    display: "block",
  },
};

