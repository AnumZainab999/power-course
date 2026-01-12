import React from "react";
import { Row, Col, Typography, Card, Image, Divider, Button,Grid } from "antd";
import edu from "../../assets/about-spark.png";
import { useNavigate } from "react-router-dom";
const { Title, Paragraph } = Typography;
const { useBreakpoint } = Grid;
const AboutEduConcierge = () => {
    const navigate = useNavigate();
const screens = useBreakpoint();
  const handleClick = () => {
    navigate("/contact-us");
  };
  return (
    <div style={{ background: "#f7f7f7", width: "100%" }}>
      {/* FULL WIDTH WHITE CARD */}
      <Card
        style={{
          width: "100%",
          borderRadius: 0,
          padding: "40px 16px",
        }}
      >
        {/* CONTENT CONTAINER */}
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          {/* HEADING */}
          <Title style={{ textAlign: "center",fontWeight:"400", color: "#5E4D8C",fontSize:"40px",fontFamily: "'Days One', sans-serif" }}>
            Here's how Edu Concierge supports <br /> Parents & Students
          </Title>

          {/* IMAGE */}
          <div style={{ textAlign: "center", marginBottom: 48 }}>
            <Image
              src={edu}
              preview={false}
              style={{
                width: "85%",
                maxWidth: 900,
                borderRadius: 0,
              }}
            />
          </div>
          
{/* CONTENT AFTER IMAGE */}
<div style={{ marginLeft: "62px" }}>

          {/* WHAT PROBLEMS */}
          <Row gutter={[32, 24]}>
            <Col xs={24} md={6}>
              <Title level={5}>What Problems Are We Solving?</Title>
            </Col>
            <Col xs={24} md={18}>
              <Paragraph>
                Common challenges parents face include:
                <br/>
                • Too many choices, little clarity on what is right for the child
                <br/>
                • Education is expensive and money spent needs to be effective 
                 <br />
                 • Lack of visibility into actual learning progress
                   <br />
                 • Stress around exams, boards, and academic pathways
                   <br />
                 • Difficulty connecting school performance with future goals
                 <br />
                 • Limited time to support children consistently
               
              </Paragraph>

              <Paragraph>
                Students face a different kind of pressure:
                <br />
               • Over-studying in some areas, neglecting others
               <br />
                 • Burnout due to excess tutoring or unplanned workload
                 <br />
            • Confusion about priorities
            <br />
            • Lack of structured study habits
            <br />
               • Reduced confidence when progress is unclear
                
              
              </Paragraph>
            </Col>
          </Row>

          {/* PARENTS */}
          <Card
            style={{
              background: "#D0E2FF",
              marginTop: 40,
             borderRadius: 0,
            }}
            bordered={false}
          >
            <Row gutter={[32, 24]}>
              <Col xs={24} md={6}>
                <Title level={5}>How Edu Concierge Helps Parents</Title>
              </Col>
              <Col xs={24} md={18}>
                <Paragraph>
                 Parents no longer have to guess:
                  <br />
                  “Does my child really need tuition?”
                   <br />
                   “Are we overspending?” 
                    <br />
                   “Is my child actually improving?”
                  <br />
                  
                </Paragraph>

                <Paragraph>
                  Edu Concierge helps ensure that every decision is:
                  <br />
                  • Evidence-based
                  <br />
                  • Timely
                  <br />
                  • Financially sensible
                  <br />
                  • In the child's best interest
                </Paragraph>

                <Paragraph>
                  By providing:
                  <br />
                  • A clear overview of the child's academic health
                  <br />
                  • Early identification of risks and learning gaps
                  <br />
                  • Guidance on what action is truly necessary
                  <br />
                  • Support in choosing subjects, boards, or pathways
                  <br />
                  • Independent insight instead of bias-driven advice
                     <br/>
                  • Reduced stress around exams and deadlines
                </Paragraph>
              </Col>
            </Row>
          </Card>

          {/* STUDENTS */}
      <Divider style={{ margin: "48px 0", borderColor: "white" }} />


          <Row gutter={[32, 24]}>
            <Col xs={24} md={6}>
              <Title level={5}>How Edu Concierge Helps Students</Title>
            </Col>
            <Col xs={24} md={18}>
              <Paragraph>
                For students, Edu Concierge:
                <br/>
                •  Provides all required resources & support in one place 
                <br />
                • Builds disciplined, structured learning habits
                <br />
                • Prevents unnecessary workload and burnout
                <br />
                • Keeps study on track through guided planning
                <br />
                • Improves focus on what truly matters
                <br />
                • Encourages responsibility and independence
                <br />
                • Boosts confidence through visible progress tracking
              </Paragraph>
            </Col>
          </Row>

          {/* SAVINGS */}
          <Card
            style={{
              background: "#D0E2FF",
              marginTop: 48,
              borderRadius: 0,
             
            }}
            bordered={false}
          >
            <Row gutter={[32, 24]}>
              <Col xs={24} md={6}>
                <Title level={5}>How Edu Concierge Saves Money</Title>
              </Col>
              <Col xs={24} md={18}>
                <Paragraph>
                  Edu Concierge helps families avoid unnecessary education
                  spending by:
                  <br />
                  • Preventing duplicate, irrelevant, or misaligned learning costs
                  <br />
                  • Optimizing effort vs. outcome — all within a single, affordable subscription
                </Paragraph>

                <Paragraph>
                  For many families, this leads to 30–60% savings on annual tutoring expenses, while delivering a stronger return on every education investment.
                </Paragraph>
              </Col>
            </Row>
          </Card>

          {/* CTA */}
       <Row justify="center">
      <Col xs={22} sm={20} md={20} lg={20}>
        <Card
          style={{
            background: "#FFC7CA",
            textAlign: "center",
            marginTop: 48,
            width: "100%",      // full width in column
            maxWidth: 800,      // max width 800px on desktop
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
              fontSize: screens.xs ? 24 : 32, // smaller font on mobile
              textAlign: "center",
            }}
          >
            Ready to discover Edu Concierge?
          </Title>

          <Button
  size="large"
  onClick={handleClick}
  style={{
    backgroundColor: "#FFC7CA",
    color: "#020202",
    border: "1.5px solid #020202",
    width: screens.xs ? "100%" : 160,   // full width on small screens, fixed on desktop
    maxWidth: screens.xs ? 200 : "none", // optional: max width on mobile so it doesn't stretch too much
    height: screens.xs ? 60 : 44,
    fontWeight: 500,
    borderRadius: 0,
    marginTop: 20,
    whiteSpace: "normal", // allows text wrap
    wordBreak: "break-word", // breaks long words if needed
    padding: "0 8px", // small horizontal padding on mobile
  }}
>
  Take a Free Trial
</Button>

        </Card>
      </Col>
    </Row>

        </div>
        </div>
      </Card>
    </div>
  );
};

export default AboutEduConcierge;
