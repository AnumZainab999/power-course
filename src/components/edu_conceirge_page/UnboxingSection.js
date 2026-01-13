import React from "react";
import { Row, Col, Typography, Button } from "antd";
import hero from "../../assets/hero-image.png";

const { Title, Paragraph } = Typography;

const UnboxingSection = () => {
  return (
    <div style={{ padding: "80px 24px" }}>
      {/* Section Title */}
      <div style={{ textAlign: "center", marginBottom: 56 }}>
        <Title
          level={3}
          style={{
            color: "#5E4D8C",
            fontWeight: 600,
            marginBottom: "30px",
          }}
        >
          Unboxing Edu Concierge
        </Title>
      </div>

      {/* Content Row - Same padding & maxWidth style as EducationJourneySection */}
      <Row
        align="top"
        justify="center"
        style={{ maxWidth: 1200, margin: "0 auto" }} // Center container + max width like journey section
      >
        {/* Image Column */}
        <Col
          xs={24}
          md={12}
          style={{
            display: "flex",
            justifyContent: "center",
            padding: "0 10px",
            marginBottom: 24, // Mobile vertical gap
          }}
        >
          <img
            src={hero}
            alt="Education"
            style={{
              width: "100%",
              borderRadius: 16,
              objectFit: "cover",
              height: "350px",
            }}
          />
        </Col>

        {/* Text Column */}
        <Col
          xs={24}
          md={12}
          style={{
            display: "flex",
            alignItems: "flex-start",
            padding: "0 10px",
          }}
        >
          <div style={{ maxWidth: 520 }}>
            <Title
              level={3}
              style={{ fontSize: 32, lineHeight: 1.3, marginBottom: 16 }}
            >
              We help parents and students by responding to their biggest challenges
            </Title>

            <Paragraph style={{ fontSize: 26, lineHeight: 1.3, marginBottom: 24 }}>
              We help parents and students by responding to their biggest challenges,
              making education easy and seamless.
            </Paragraph>

            <Button
              shape="round"
              style={{
                backgroundColor: "white",
                borderColor: "black",
                color: "black",
                fontWeight: 600,
              }}
            >
              Read More
            </Button>
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default UnboxingSection;