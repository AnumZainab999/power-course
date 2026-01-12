import React from "react";
import { Row, Col, Typography, Button, Image } from "antd";
import manager from "../../assets/new.png";
import { useNavigate } from "react-router-dom";
const { Title, Paragraph } = Typography;

const EducationManager = () => {
    const navigate = useNavigate();

  const handleClick = () => {
    navigate("/about-spark");
  };
  return (
    <div style={{ padding: "20px 24px", backgroundColor: "white" }}>
      {/* Top Title - Centered */}
      <div style={{ textAlign: "center", marginBottom: 56 }}>
        <Title
          level={2}
          style={{
            color: "black",
            fontWeight: 500,
            marginBottom: 0,
            fontFamily: "'Days One', sans-serif",
          }}
        >
          Meet Your Education Manager
        </Title>
      </div>

      {/* Main Content - Centered container like other sections */}
      <Row
  gutter={[32, 32]}
  align="middle"
  justify="center"
  style={{ maxWidth: 1200, margin: "0 auto" }}
>
  {/* Text Content first on desktop */}
  <Col
    xs={24}
    md={12}
    order={1} // mobile order
    style={{ display: "flex", justifyContent: "center" }}
  >
    <div style={{ maxWidth: 500 }}>
      <Paragraph
        style={{
          fontSize: 18,
          lineHeight: 1.6,
          color: "#333",
          marginBottom: 32,
        }}
      >
        For the first time, parents and students have a<br/> dedicated education
        expert on their side — <br/>someone who understands their goals, guides<br/>
        their decisions, and supports them throughout<br/> their learning
        journey.
      </Paragraph>

      <Button
        size="large"
        style={{
          backgroundColor: "#fff",
          color: "#1B1A1A",
          border: "1.5px solid #1B1A1A",
          borderRadius: 999,
          minWidth: 140,
          height: 44,
          fontWeight: 500,
          
        }}
        onClick={handleClick} 
      >
        Read more
      </Button>
    </div>
  </Col>

  {/* Image on the right on desktop */}
  <Col
    xs={24}
    md={12}
    order={2} // mobile order
    style={{ display: "flex", justifyContent: "center" }}
  >
    <Image
      src={manager}
      alt="Education Manager"
      style={{
        width: "100%",
        objectFit: "cover",
        borderRadius: 16,
      }}
      preview={false}
    />
  </Col>
</Row>

    </div>
  );
};

export default EducationManager;