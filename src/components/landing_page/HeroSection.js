import React from "react";
import { Row, Col, Grid } from "antd";
import { ArrowRightOutlined } from "@ant-design/icons";
import heroImage from "../../assets/hero.png";

const { useBreakpoint } = Grid;

const HeroSection = () => {
  const screens = useBreakpoint();

  // Responsive hero height (mobile only)
  const heroHeight = screens.xs ? "70vh" : "800px"; 
  const headingFontSize = screens.xs ? "1.8rem" : "2.1rem";
  const paragraphFontSize = screens.xs ? "1rem" : "1.1rem";
  const maxParagraphWidth = screens.xs ? "100%" : "390px";
  const contentBottom = screens.xs ? "20px" : "40px";
  const contentLeft = screens.xs ? "20px" : "40px";
  const headingMaxWidth = screens.xs ? "300px" : "400px";

  return (
    <div
      style={{
        width: "100%",
        minHeight: heroHeight,
        backgroundImage: `url(${heroImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        position: "relative",
        color: "#fff",
      }}
    >
      {/* Overlay for subtle dark effect */}
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          backgroundColor: screens.xs ? "rgba(0,0,0,0.35)" : "transparent",
          zIndex: 1,
        }}
      />

      {/* Hero content */}
      <Row
        style={{
          position: "absolute",
          bottom: contentBottom,
          left: contentLeft,
          zIndex: 2,
          padding: "0 20px",
          maxWidth: 1200,
          width: "100%",
        }}
      >
        <Col xs={24} md={12}>
          <h1
            style={{
              fontSize: headingFontSize,
              fontWeight: 500,
              lineHeight: 1.2,
              marginBottom: 16,
              maxWidth: headingMaxWidth,
            }}
          >
            Transforming learning through purpose-built education solutions
          </h1>

          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "flex-start",
            }}
          >
            <p
              style={{
                fontSize: paragraphFontSize,
                marginBottom: 24,
                maxWidth: maxParagraphWidth,
              }}
            >
              With our products and solutions, we’re working to restore the true
              purpose of education i.e. to change lives.
            </p>

            {/* Arrow Button */}
            <div
              style={{
                width: "40px",
                height: "40px",
                borderRadius: "50%",
                backgroundColor: "#D2D3CD",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                cursor: "pointer",
                transition: "0.3s",
              }}
            >
              <ArrowRightOutlined
                style={{ color: "black", fontSize: "18px", fontWeight: "bold" }}
              />
            </div>
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default HeroSection;
