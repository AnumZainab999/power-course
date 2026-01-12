import React from "react";
import { Row, Col, Typography, Card } from "antd";
import logo1 from "../../assets/g1.png";
import logo2 from "../../assets/g2.jpg";
import logo3 from "../../assets/g3.png";
import logo4 from "../../assets/g4.png";
import logo5 from "../../assets/g5.png";

const { Title, Paragraph } = Typography;

const logos = [
  { src: logo1, alt: "Logo 1", width: "120px", height: "170px" },
  { src: logo2, alt: "Logo 2", width: "130px", height: "110px" },
  { src: logo3, alt: "Logo 3", width: "130px", height: "130px" },
  { src: logo4, alt: "Logo 4", width: "120px", height: "110px" },
  { src: logo5, alt: "Logo 5", width: "150px", height: "120px" },
];

const GlobalEducationSystems = () => {
  return (
    <div style={{ padding: "60px 40px", background: "#fff" }}>
      <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
        {/* ✅ Centered Heading Section */}
        <div style={{ textAlign: "center", marginBottom: "50px" }}>
          <Title
            level={3}
            style={{
              fontWeight: 600,
              marginBottom: "10px",
            }}
          >
            Global Education Systems Expertise
          </Title>
          <Paragraph
            style={{
              color: "#555",
              fontSize: "16px",
              maxWidth: "700px",
              margin: "0 auto",
              lineHeight: 1.7,
            }}
          >
            We specialize in leading global education systems, ensuring our
            support aligns seamlessly with your child’s curriculum. All our
            teachers are fully qualified and experienced in delivering these
            programs effectively.
          </Paragraph>
        </div>

        {/* ✅ Logos Section (Responsive for Tablet) */}
        <Row
          gutter={[24, 24]}
          justify="center"
          style={{
            flexWrap: "wrap", // ✅ Allows wrapping on tablet/mobile
          }}
        >
          {logos.map((logo, index) => (
            <Col
              key={index}
              xs={12}  // ✅ 2 cards per row on small screens
              sm={8}   // ✅ 3 cards per row on small tablets
              md={6}   // ✅ 4 cards per row on tablets
              lg={4}   // ✅ 5 cards per row on desktops
              style={{
                display: "flex",
                justifyContent: "center",
              }}
            >
              <Card
                hoverable
                style={{
                  width: "100%",
                  maxWidth: 200,
                  textAlign: "center",
                  borderRadius: "12px",
                  boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)",
                  background: "#fff",
                  height: "200px",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
                bodyStyle={{
                  padding: 0,
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  height: "100%",
                }}
              >
                <img
                  src={logo.src}
                  alt={logo.alt}
                  style={{
                    width: logo.width,
                    height: logo.height,
                    objectFit: "contain",
                    margin: "0 auto",
                  }}
                />
              </Card>
            </Col>
          ))}
        </Row>
      </div>
    </div>
  );
};

export default GlobalEducationSystems;
