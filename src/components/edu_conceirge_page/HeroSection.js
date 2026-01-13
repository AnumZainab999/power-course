import React from "react";
import { Row, Col, Typography, Button, Space } from "antd";
import { useNavigate } from "react-router-dom";
import heroImage from "../../assets/edu-hero.png";
import eduLogo from "../../assets/edu.png";

const { Title, Paragraph } = Typography;

const HeroSection = () => {
  const navigate = useNavigate(); // ✅ Inside the component

  return (
    <div style={{ padding: "130px 24px" }}> {/* desktop & tablet padding fixed */}
      <Row align="middle" gutter={[40, 40]}>
        {/* Left Content */}
        <Col xs={24} md={12}>
          <div
            style={{
              textAlign: "center",
              maxWidth: 480,
              margin: "0 auto",
            }}
          >
            {/* Logo */}
            <img
              src={eduLogo}
              alt="Edu Concierge"
              style={{ height: 80, marginBottom: 16 }}
            />

            {/* Title */}
            <Title
              level={1}
              style={{
                fontWeight: 400,
                marginBottom: 12,
                color: "#5E4D8C",
                fontFamily: "'KoHo', sans-serif",
              }}
            >
              Edu Concierge
            </Title>

            {/* Paragraph */}
            <Paragraph style={{ color: "#545454", fontSize: 16, textAlign: "left" }}>
              An all-in-one learning support system for as low as USD 8
              <br /> per month.
            </Paragraph>

            {/* Buttons */}
            <Space
              size={16}
              wrap
              style={{ marginTop: 24, justifyContent: "center" }}
            >
             <Button
  size="large"
  style={{
    backgroundColor: "#fff",
    color: "#1B1A1A",
    border: "1.5px solid #1B1A1A",
    borderRadius: 999,
    minWidth: 160,
    height: 44,
    fontWeight: 400,
  }}
  onClick={() => {
    const element = document.getElementById("plans");
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  }}
>
  Plans
</Button>


              <Button
                size="large"
                style={{
                  backgroundColor: "#fff",
                  color: "#1B1A1A",
                  border: "1.5px solid #1B1A1A",
                  borderRadius: 999,
                  minWidth: 200,
                  height: 44,
                  fontWeight: 400,
                }}
                onClick={() => navigate("/contact-us")}
              >
                Speak to an Expert
              </Button>
            </Space>
          </div>
        </Col>

        {/* Right Image */}
        <Col xs={24} md={12}>
          <img
            src={heroImage}
            alt="Hero"
            style={{ width: "90%", borderRadius: 16, height: "490px" }}
          />
        </Col>
      </Row>
    </div>
  );
};

export default HeroSection;
