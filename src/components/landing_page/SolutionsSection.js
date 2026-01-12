import React from "react";
import { Row, Col, Card, Typography, Grid } from "antd";
import { ArrowRightOutlined } from "@ant-design/icons";
import logo1 from "../../assets/edu-logo.png";
import logo2 from "../../assets/spark-logo.png";
import { useNavigate } from "react-router-dom";

const { Text } = Typography;
const { useBreakpoint } = Grid;

const SolutionsSection = () => {
  const navigate = useNavigate();
  const screens = useBreakpoint(); // AntD hook for responsive breakpoints

  // Unified card base style
  const cardBaseStyle = {
    borderRadius: 12,
    border: "none",
    minHeight: 180,
    position: "relative",
    overflow: "hidden",
    display: "flex",
    alignItems: "center",
  };

  // Responsive body style for EDU Concierge card
  const getBodyStyle = () => ({
    padding: screens.xs ? "20px" : "30px",
    width: "100%",
    display: "flex",
    flexDirection: screens.xs ? "column" : "row", // stack on mobile
    alignItems: "center",
    gap: "20px",
    textAlign: screens.xs ? "center" : "left",
  });

  const logoGroupStyle = {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    minWidth: screens.xs ? "100%" : "140px",
    marginBottom: screens.xs ? "12px" : 0,
  };

  const arrowButtonStyle = {
    position: "absolute",
    bottom: "20px",
    right: "20px",
    width: "35px",
    height: "35px",
    borderRadius: "50%",
    backgroundColor: "#D2D3CD",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    cursor: "pointer",
    color: "black",
    fontSize: "16px",
  };

  return (
    <div style={{ width: "100%", padding: screens.xs ? "20px 10px" : "20px 40px", background: "#D5D5D3" }}>
      <div style={{ maxWidth: 1300, margin: "0 auto" }}>
        <h2 style={{ marginBottom: 24, fontSize: screens.xs ? "1.3rem" : "1.5rem", fontWeight: "bold" }}>
          Our Solutions
        </h2>

        <Row gutter={[20, 20]}>
          {/* Left Card - EDU Concierge */}
          <Col xs={24} md={12}>
            <Card
              style={{
                ...cardBaseStyle,
                background: "linear-gradient(135deg, #ff007a 0%, #800040 100%)",
              }}
              bodyStyle={getBodyStyle()}
            >
              <div style={logoGroupStyle}>
                <img src={logo1} alt="Logo" style={{ width: screens.xs ? 60 : 80, marginBottom: 10 }} />
                <Text
                  style={{
                    color: "#fff",
                    fontWeight: "bold",
                    fontSize: screens.xs ? "13px" : "14px",
                    fontFamily: "'KoHo', sans-serif",
                  }}
                >
                  EDU CONCIERGE
                </Text>
              </div>
              <div style={{ flex: 1, paddingRight: screens.xs ? 0 : "40px" }}>
                <p
                  style={{
                    color: "#fff",
                    fontSize: screens.xs ? "14px" : "16px",
                    lineHeight: "1.6",
                    margin: 0,
                  }}
                >
                  A one-stop education solution that helps students and parents make better choices, save time and money, and stay on track with studies – for as low as AED 30 per month.
                </p>
              </div>
              <div style={arrowButtonStyle} onClick={() => navigate("/edu-concierge")}>
                <ArrowRightOutlined />
              </div>
            </Card>
          </Col>

          {/* Right Card - Spark */}
          <Col xs={24} md={12}>
            <Card
              style={{
                ...cardBaseStyle,
                background: "linear-gradient(135deg, #00b4ff 0%, #004a99 100%)",
              }}
              bodyStyle={{
                padding: screens.xs ? "20px" : "24px",
                width: "100%",
                display: "flex",
                flexDirection: screens.xs ? "column" : "row",
                alignItems: "center",
                position: "relative",
                gap: "20px",
                textAlign: screens.xs ? "center" : "left",
              }}
            >
              {/* Logo */}
              <div style={logoGroupStyle}>
                <img src={logo2} alt="Logo" style={{ width: screens.xs ? 120 : 160, marginBottom: screens.xs ? 12 : 0 }} />
              </div>

              {/* Text + Grey Box */}
              <div style={{ flex: 1 }}>
                <p
                  style={{
                    color: "#fff",
                    fontSize: screens.xs ? "14px" : "16px",
                    marginBottom: screens.xs ? "10px" : "10px",
                    lineHeight: 1.5,
                  }}
                >
                  Special Programs, Short Courses &<br /> Contests.
                </p>

                <div
                  style={{
                    background: "#E9EAE6",
                    borderRadius: "0",
                    padding: "12px 16px",
                    display: "inline-block",
                    width: screens.xs ? "100%" : "270px",
                    margin: screens.xs ? "0 auto" : "0",
                  }}
                >
                  <Text
                    style={{
                      color: "#000",
                      fontSize: "13px",
                      fontWeight: 500,
                      lineHeight: "1.4",
                      display: "block",
                    }}
                  >
                    Get CBSE Grade 10 Exam Prep. Support — Absolutely Free
                  </Text>
                </div>
              </div>

              {/* Arrow Button */}
              <div
                style={{
                  ...arrowButtonStyle,
                  position: "absolute",
                  right: screens.xs ? "20px" : "20px",
                  bottom: screens.xs ? "20px" : "20px",
                  background: "#E9EAE6",
                }}
                onClick={() => navigate("/spark")}
              >
                <ArrowRightOutlined />
              </div>
            </Card>
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default SolutionsSection;
