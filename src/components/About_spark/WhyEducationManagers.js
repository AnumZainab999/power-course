import React from "react";
import { Row, Col, Typography, Image, Card, Button } from "antd";
import heroImg from "../../assets/about-edu.png"; 
import { useNavigate } from "react-router-dom";

const { Title, Paragraph, Text } = Typography;

const WhyEducationManagers = () => {
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
    display: "block",
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
    <div style={{ width: "100%", background: "#ffffff" }}>
      
      {/* ===== TOP IMAGE ===== */}
      <Image
        src={heroImg}
        preview={false}
        style={{
          width: "100%",
          height: "auto",
          display: "block",
          objectFit: "cover",
        }}
      />

      {/* ===== CONTENT SECTION ===== */}
      <div style={{ padding: "48px 16px",marginLeft:"80px" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          
          <Title level={2} style={{ color: "#5E4D8C", textAlign: "center", fontFamily: "'Days One', sans-serif", fontWeight: "400", marginBottom: "24px" }}>
            Why Education Managers Matter
          </Title>

          <Paragraph style={{ ...commonTextStyle, textAlign: "center",  margin: "0 auto" ,paddingBottom:"30px"}}>
            Modern education is complex — parents are busier, children are more distracted,
            and learning lacks<br/> structure and continuity. Yet most families are left to navigate
            this alone. That’s where the Education<br/> Manager steps in — an experienced guide who
            supports, organizes, and oversees the learning journey.
          </Paragraph>

          {sectionSpacer}

          {/* ===== SECTION 1 ===== */}
          <Row gutter={[32, 32]}>
            <Col xs={24} md={8}>
              <Text style={boldHeaderStyle}>What an Education Manager Does</Text>
            </Col>
            <Col xs={24} md={16}>
              <Paragraph style={{ ...commonTextStyle, marginBottom: "12px" }}>
                An Education Manager is not a tutor or counselor — they function as a<br/>
                strategic partner in the child’s academic journey.<br/> Their role includes:
              </Paragraph>
              <ul style={listStyle}>
                <DotListItem>Understanding the child’s current academic health and learning style</DotListItem>
                <DotListItem>Overseeing progress consistently across subjects and terms</DotListItem>
                <DotListItem>Identifying risks or gaps before they become major problems</DotListItem>
                <DotListItem>Coordinating priorities between school, home, and external support</DotListItem>
                <DotListItem>Guiding where to add support — and when not to</DotListItem>
                <DotListItem>Helping students build accountability and healthy study habits</DotListItem>
                <DotListItem>Ensuring every step aligns with long-term goals</DotListItem>
              </ul>
            </Col>
          </Row>

          {sectionSpacer}

          {/* ===== SECTION 2 ===== */}
          <Row gutter={[32, 32]}>
            <Col xs={24} md={8}>
              <Text style={boldHeaderStyle}>Experience Matters</Text>
            </Col>
            <Col xs={24} md={16}>
              <Paragraph style={{ ...commonTextStyle, marginBottom: "12px" }}>Our Education Managers are:</Paragraph>
              <ul style={listStyle}>
                <DotListItem>Trained to understand academic structures, not just subject content</DotListItem>
                <DotListItem>Experienced in dealing with different learning profiles</DotListItem>
                <DotListItem>Objective and independent — not selling tuition or services</DotListItem>
                <DotListItem>Capable of making calm, reasoned decisions under pressure</DotListItem>
              </ul>
              <Paragraph style={{ ...commonTextStyle, marginTop: "16px" }}>
                Their value lies not only in knowledge — but in perspective, neutrality, and <br/>consistency.
              </Paragraph>
            </Col>
          </Row>

          {sectionSpacer}

          {/* ===== SECTION 3 ===== */}
          <Row gutter={[32, 32]}>
            <Col xs={24} md={8}>
              <Text style={boldHeaderStyle}>How Education Managers<br/> Create Real Impact</Text>
            </Col>
            <Col xs={24} md={16}>
              <Paragraph style={commonTextStyle}>With an Education Manager in place:</Paragraph>
              
              <Paragraph style={{ ...commonTextStyle, fontWeight: 400, marginTop: "16px" }}>Parents gain:</Paragraph>
              <ul style={listStyle}>
                <DotListItem>clarity instead of uncertainty</DotListItem>
                <DotListItem>oversight without burnout</DotListItem>
                <DotListItem>confidence that progress is being monitored responsibly</DotListItem>
              </ul> 

              <Paragraph style={{ ...commonTextStyle, fontWeight: 400, marginTop: "16px" }}>Students gain:</Paragraph>
              <ul style={listStyle}>
                <DotListItem>structure and discipline</DotListItem>
                <DotListItem>improved focus</DotListItem>
                <DotListItem>guidance without micromanagement</DotListItem>
              </ul>

              <Paragraph style={{ ...commonTextStyle, fontWeight: 400, marginTop: "16px" }}>The family gains:</Paragraph>
              <ul style={listStyle}>
                <DotListItem>Reduced chaos</DotListItem>
                <DotListItem>Smarter educational spending</DotListItem>
                <DotListItem>Meaningful, measurable outcomes</DotListItem>
              </ul>
            </Col>
          </Row>

          {sectionSpacer}

          {/* ===== SECTION 4 ===== */}
          <Row gutter={[32, 32]}>
            <Col xs={24} md={8}>
              <Text style={boldHeaderStyle}>Why Families Need This Today</Text>
            </Col>
            <Col xs={24} md={16}>
              <Paragraph style={commonTextStyle}>
                Even the most caring parents cannot oversee everything, every day.<br/>
                Historically, learning environments had mentors, elders, and guides<br/>
                who provided structure and continuity. In modern life, that role has<br/>
                disappeared — replaced by fragmented services and short-term fixes.
              </Paragraph>
              <Paragraph style={{ ...commonTextStyle, marginTop: "16px" }}>
                Edu Concierge re-introduces that missing pillar:<br/>
                Our Education Managers are experienced education partners who walk<br/> beside the family - not just when things become urgent — but every<br/> step of the journey.
              </Paragraph>
            </Col>
          </Row>
<Card
  style={{
    background: "#FFD6D6",
    textAlign: "center",
    marginTop: 60,
    borderRadius: 0,
    padding: "40px 0",
    /* --- NEW STYLES TO REDUCE WIDTH AND CENTER --- */
    maxWidth: "900px",      // Sets the specific width of the rectangle
    margin: "60px auto 0",  // Centers the card horizontally
  }}
  bordered={false}
>
  <Title level={4} style={{ margin: 0, padding: "0 20px" }}>
    Would you like to speak to one of our Education Managers?
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
      marginTop: '20px',
      fontWeight: 500,
    }}
    onClick={handleClick} 
  >
    Schedule a call
  </Button>
</Card>
        </div>
      </div>
    </div>
  );
};

export default WhyEducationManagers;