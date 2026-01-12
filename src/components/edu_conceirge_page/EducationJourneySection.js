import React from "react";
import { Row, Col, Typography, Button, Grid } from "antd";
import journeyImg from "../../assets/journey.png"; 
import { useNavigate } from "react-router-dom";

const { Title, Paragraph, Text } = Typography;
const { useBreakpoint } = Grid;

const EducationJourneySection = () => {
  const navigate = useNavigate();
  const screens = useBreakpoint(); // detect screen size

  const handleClick = () => {
    navigate("/about-edu-concierge");
  };

  return (
    <div style={{ padding: screens.xs ? "60px 16px" : "80px 24px" }}>
      {/* Top Section */}
      <Row
        gutter={[screens.xs ? 20 : 40, screens.xs ? 20 : 40]}
        align="middle"
        style={{ maxWidth: 1200, margin: "0 auto" }}
      >
        {/* Left Image */}
        <Col xs={24} md={10}>
          <img
            src={journeyImg}
            alt="Education Journey"
            style={{
              width: "100%",
              borderRadius: 16,
              objectFit: "cover",
              height: screens.xs ? "auto" : 570, // mobile auto height
            }}
          />
        </Col>

        {/* Right Content */}
        <Col xs={24} md={14}>
          <div style={{ textAlign: screens.xs ? "center" : "left" }}>
            <Title
              level={2}
              style={{
                color: "#5b4ca7",
                fontWeight: 400,
                fontFamily: "'Days One', sans-serif",
              }}
            >
              Education is a journey
            </Title>

            <Paragraph
              style={{
                color: "#444",
                fontSize: screens.xs ? 14 : 15,
                maxWidth: screens.xs ? "100%" : 400,
                margin: screens.xs ? "0 auto" : undefined, // center text only on mobile
              }}
            >
              Parents are busy, and children are growing up in a world full of
              distraction. Schools educate, tutors teach lessons, apps provide
              tools — somewhere in between, many students still struggle to stay
              on track, not because they lack talent or they aren’t trying, but
              because no one is truly walking the journey with them.
            </Paragraph>

            <Paragraph
              style={{
                color: "#444",
                fontSize: screens.xs ? 14 : 15,
                maxWidth: screens.xs ? "100%" : undefined,
                margin: screens.xs ? "0 auto" : undefined,
              }}
            >
              That is why Edu Concierge was born — from the belief that:
              <br />
              No parent should feel alone in their child’s education.
              <br />
              No student should feel lost or left behind.
              <br />
              And expert support should not be a luxury.
            </Paragraph>

            <Paragraph
              style={{
                color: "#444",
                fontSize: screens.xs ? 14 : 15,
                maxWidth: screens.xs ? "100%" : 400,
                margin: screens.xs ? "0 auto" : undefined,
              }}
            >
              Edu Concierge gives families a calm, steady hand beside them. A
              mentor for students who cares, notices and guides. A partner in
              learning.
            </Paragraph>

            <Button
              size="large"
              style={{
                backgroundColor: "#fff",
                color: "#1B1A1A",
                border: "1.5px solid #020202",
                borderRadius: 999,
                minWidth: 160,
                height: 44,
                fontWeight: 500,
                marginTop: screens.xs ? 30 : 50,
              }}
              onClick={handleClick}
            >
              Read more
            </Button>
          </div>
        </Col>
      </Row>

      {/* Bottom Section */}
      <div style={{ marginTop: screens.xs ? 60 : 80, textAlign: "center" }}>
        <Title
          level={2}
          style={{
            color: "#5E4D8C",
            fontWeight: 400,
            fontFamily: "'Days One', sans-serif",
            marginBottom: "30px",
          }}
        >
          Edu Concierge is Different
        </Title>

        <Paragraph
          style={{
            maxWidth: screens.xs ? "100%" : 820,
            margin: "0 auto 48px",
            color: "#444",
            fontSize: screens.xs ? 14 : 15,
            lineHeight: 1.5,
          }}
        >
          Edu Concierge is a first-of-its-kind learning support system that works like an academic autopilot — monitoring
          <br /> progress, identifying gaps, guiding decisions, and supporting students throughout their learning journey.
          <br />
          Our experienced Education Managers take a proactive role in planning and oversight. They help students stay
          <br /> organized, make smarter academic choices, and significantly reduce learning complexity, stress, and spending.
        </Paragraph>

        <Row
          gutter={[screens.xs ? 16 : 32, screens.xs ? 16 : 24]}
          justify="center"
          align="center"
          style={{ maxWidth: screens.xs ? "100%" : 550, margin: "0 auto" }}
        >
          {/* Left List */}
          <Col xs={24} md={12} style={{ paddingLeft: 0, paddingRight: 0 }}>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: screens.xs ? "center" : "flex-start",
                gap: 4,
              }}
            >
              <Text style={{ display: "block", margin: 0 }}>
                EduConcierge is not:
              </Text>

              <ul
                style={{
                  margin: 0,
                  padding: 0,
                  listStyle: "none",
                  textAlign: screens.xs ? "center" : "left",
                }}
              >
                {[
                  "A tuition center",
                  "A coaching service",
                  "A course marketplace",
                  "A homework help app",
                ].map((item) => (
                  <li
                    key={item}
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: 8,
                      color: "#444",
                      lineHeight: "1.4",
                      justifyContent: screens.xs ? "center" : "flex-start",
                    }}
                  >
                    <span style={{ width: 10 }}>•</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </Col>

          {/* Right List */}
          <Col xs={24} md={12} style={{ paddingLeft: 0, paddingRight: 0 }}>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: screens.xs ? "center" : "flex-start",
                gap: 4,
              }}
            >
              <Text style={{ display: "block", margin: 0 }}>
                It is an all-in-one learning system that:
              </Text>

              <ul
                style={{
                  margin: 0,
                  padding: 0,
                  listStyle: "none",
                  textAlign: screens.xs ? "center" : "left",
                }}
              >
                {[
                  "Monitors learning",
                  "Intervenes when required",
                  "Provides learning & exam support",
                  "Protects from confusion and overload",
                ].map((item) => (
                  <li
                    key={item}
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: 8,
                      color: "#444",
                      lineHeight: "1.4",
                      justifyContent: screens.xs ? "center" : "flex-start",
                    }}
                  >
                    <span style={{ width: 10 }}>•</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default EducationJourneySection;
