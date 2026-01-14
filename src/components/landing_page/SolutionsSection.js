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
  const screens = useBreakpoint();

  // Breakpoint detection
  const isMobile = !screens.md; // Mobile & tablet
  const isSmallMobile = screens.xs; // Extra small screens
  const isLargeDesktop = screens.xxl; // Extra large screens

  // Responsive values
  const sectionPadding = isSmallMobile ? "24px 16px" : 
                        isMobile ? "32px 20px" : "40px";
  
  const headingFontSize = isSmallMobile ? "1.5rem" : 
                         isMobile ? "1.7rem" : "2rem";
  
  const headingMarginBottom = isSmallMobile ? "20px" : "24px";
  
  const cardMinHeight = isSmallMobile ? "auto" : 
                       isMobile ? "200px" : "180px";
  
  const cardPadding = isSmallMobile ? "16px" : 
                     isMobile ? "20px" : "30px";

  const logoSize = {
    edu: isSmallMobile ? "50px" : 
         isMobile ? "60px" : "80px",
    spark: isSmallMobile ? "90px" : 
           isMobile ? "110px" : "160px"
  };

  const logoTextSize = isSmallMobile ? "12px" : 
                      isMobile ? "13px" : "14px";

  const descriptionFontSize = isSmallMobile ? "13px" : 
                            isMobile ? "14px" : "16px";

  const descriptionLineHeight = "1.6";

  const greyBoxFontSize = isSmallMobile ? "12px" : 
                         isMobile ? "13px" : "13px";

  const arrowButtonSize = isSmallMobile ? "32px" : 
                         isMobile ? "35px" : "35px";

  const arrowIconSize = isSmallMobile ? "14px" : 
                       isMobile ? "15px" : "16px";

  const cardGap = isSmallMobile ? "16px" : 
                  isMobile ? "20px" : "20px";

  // Card base style
  const cardBaseStyle = {
    borderRadius: "12px",
    border: "none",
    minHeight: cardMinHeight,
    position: "relative",
    overflow: "hidden",
    display: "flex",
    alignItems: "center",
    boxShadow: isMobile ? "0 4px 12px rgba(0,0,0,0.1)" : "none",
    transition: "transform 0.3s ease, box-shadow 0.3s ease",
  };

  // Card hover effects
  const handleMouseEnter = (e) => {
    if (!isMobile) {
      e.currentTarget.style.transform = "translateY(-4px)";
      e.currentTarget.style.boxShadow = "0 8px 25px rgba(0,0,0,0.15)";
    }
  };

  const handleMouseLeave = (e) => {
    if (!isMobile) {
      e.currentTarget.style.transform = "translateY(0)";
      e.currentTarget.style.boxShadow = isMobile ? "0 4px 12px rgba(0,0,0,0.1)" : "none";
    }
  };

  return (
    <div style={{ 
      width: "100%", 
      padding: sectionPadding, 
      background: "#D5D5D3",
      minHeight: isSmallMobile ? "auto" : "400px",
      display: "flex",
      alignItems: "center",
    }}>
      <div style={{ 
        maxWidth: isLargeDesktop ? "1400px" : "1300px", 
        margin: "0 auto",
        width: "100%",
      }}>
        <h2 style={{ 
          marginBottom: headingMarginBottom, 
          fontSize: headingFontSize, 
          fontWeight: 600,
          color: "#333",
          textAlign: isMobile ? "center" : "left",
          paddingLeft: isMobile ? "0" : "8px",
        }}>
          Our Solutions
        </h2>

        <Row gutter={[isSmallMobile ? 16 : 20, isSmallMobile ? 16 : 20]}>
          {/* EDU Concierge Card */}
          <Col xs={24} md={12}>
            <Card
              style={{
                ...cardBaseStyle,
                background: "linear-gradient(135deg, #ff007a 0%, #800040 100%)",
              }}
              bodyStyle={{
                padding: cardPadding,
                width: "100%",
                display: "flex",
                flexDirection: isMobile ? "column" : "row",
                alignItems: isMobile ? "center" : "flex-start",
                gap: cardGap,
              }}
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            >
              {/* Logo Section */}
              <div style={{ 
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                minWidth: isMobile ? "100%" : "140px",
                marginBottom: isMobile ? "12px" : "0",
              }}>
                <img 
                  src={logo1} 
                  alt="EDU Concierge Logo" 
                  style={{ 
                    width: logoSize.edu, 
                    marginBottom: isSmallMobile ? "8px" : "10px",
                    height: "auto"
                  }} 
                />
                <Text
                  style={{
                    color: "#fff",
                    fontWeight: 700,
                    fontSize: logoTextSize,
                    fontFamily: "'KoHo', sans-serif",
                    letterSpacing: "0.5px",
                    textAlign: "center",
                  }}
                >
                  EDU CONCIERGE
                </Text>
              </div>

              {/* Content Section */}
              <div style={{ 
                flex: 1,
                paddingRight: isMobile ? "0" : "40px",
                textAlign: isMobile ? "center" : "left",
              }}>
                <p
                  style={{
                    color: "#fff",
                    fontSize: descriptionFontSize,
                    lineHeight: descriptionLineHeight,
                    margin: 0,
                    marginBottom: isSmallMobile ? "16px" : "0",
                  }}
                >
                  A one-stop education solution that helps students and parents make better choices, save time and money, and stay on track with studies – for as low as AED 30 per month.
                </p>
              </div>

              {/* Arrow Button */}
              <div 
                style={{
                  position: "absolute",
                  bottom: isSmallMobile ? "12px" : "20px",
                  right: isSmallMobile ? "12px" : "20px",
                  width: arrowButtonSize,
                  height: arrowButtonSize,
                  borderRadius: "50%",
                  backgroundColor: "#D2D3CD",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  cursor: "pointer",
                  zIndex: 2,
                  boxShadow: "0 2px 8px rgba(0,0,0,0.15)",
                  transition: "all 0.2s ease",
                }}
                onClick={() => navigate("/edu-concierge")}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = "#fff";
                  e.currentTarget.style.transform = "scale(1.1)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = "#D2D3CD";
                  e.currentTarget.style.transform = "scale(1)";
                }}
              >
                <ArrowRightOutlined style={{ 
                  color: "black", 
                  fontSize: arrowIconSize, 
                  fontWeight: "bold" 
                }} />
              </div>
            </Card>
          </Col>

          {/* Spark Card */}
          <Col xs={24} md={12}>
            <Card
              style={{
                ...cardBaseStyle,
                background: "linear-gradient(135deg, #00b4ff 0%, #004a99 100%)",
              }}
              bodyStyle={{
                padding: cardPadding,
                width: "100%",
                display: "flex",
                flexDirection: isMobile ? "column" : "row",
                alignItems: isMobile ? "center" : "flex-start",
                position: "relative",
                gap: cardGap,
              }}
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            >
              {/* Logo Section */}
              <div style={{ 
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                minWidth: isMobile ? "100%" : "160px",
                marginBottom: isMobile ? "12px" : "0",
              }}>
                <img 
                  src={logo2} 
                  alt="Spark Logo" 
                  style={{ 
                    width: logoSize.spark, 
                    marginBottom: isSmallMobile ? "8px" : "0",
                    height: "auto"
                  }} 
                />
              </div>

              {/* Content Section */}
              <div style={{ 
                flex: 1,
                textAlign: isMobile ? "center" : "left",
                width: "100%",
              }}>
                <p
                  style={{
                    color: "#fff",
                    fontSize: descriptionFontSize,
                    marginBottom: isSmallMobile ? "12px" : "16px",
                    lineHeight: descriptionLineHeight,
                  }}
                >
                  Special Programs, Short Courses & Contests.
                </p>

                {/* Grey Box */}
                <div
                  style={{
                    background: "#E9EAE6",
                    borderRadius: "8px",
                    padding: isSmallMobile ? "10px 12px" : "12px 16px",
                    display: "inline-block",
                    width: isMobile ? "100%" : "270px",
                    maxWidth: "100%",
                    boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
                  }}
                >
                  <Text
                    style={{
                      color: "#000",
                      fontSize: greyBoxFontSize,
                      fontWeight: 500,
                      lineHeight: "1.4",
                      display: "block",
                      textAlign: "left",
                    }}
                  >
                    Get CBSE Grade 10 Exam Prep. Support — Absolutely Free
                  </Text>
                </div>
              </div>

              {/* Arrow Button */}
              <div
                style={{
                  position: "absolute",
                  right: isSmallMobile ? "12px" : "20px",
                  bottom: isSmallMobile ? "12px" : "20px",
                  width: arrowButtonSize,
                  height: arrowButtonSize,
                  borderRadius: "50%",
                  backgroundColor: "#E9EAE6",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  cursor: "pointer",
                  zIndex: 2,
                  boxShadow: "0 2px 8px rgba(0,0,0,0.15)",
                  transition: "all 0.2s ease",
                }}
                onClick={() => navigate("/spark")}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = "#fff";
                  e.currentTarget.style.transform = "scale(1.1)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = "#E9EAE6";
                  e.currentTarget.style.transform = "scale(1)";
                }}
              >
                <ArrowRightOutlined style={{ 
                  color: "black", 
                  fontSize: arrowIconSize, 
                  fontWeight: "bold" 
                }} />
              </div>
            </Card>
          </Col>
        </Row>
      </div>

      {/* Mobile-specific CSS */}
      <style jsx="true">{`
        @media (max-width: 767.98px) {
          /* Improve touch targets */
          [role="button"], .ant-card {
            cursor: pointer;
          }
          
          /* Prevent text selection on tap */
          .ant-card-body * {
            user-select: none;
          }
          
          /* Better tap feedback */
          .ant-card:active {
            opacity: 0.9;
            transform: scale(0.98);
          }
          
          /* Ensure proper spacing on very small screens */
          @media (max-width: 374px) {
            .ant-col-24 {
              padding-left: 8px !important;
              padding-right: 8px !important;
            }
            
            h2 {
              font-size: 1.3rem !important;
            }
          }
        }
        
        /* Large desktop enhancements */
        @media (min-width: 1600px) {
          .ant-card {
            min-height: 220px !important;
          }
          
          .ant-card-body {
            padding: 40px !important;
          }
          
          p {
            font-size: 17px !important;
            line-height: 1.7 !important;
          }
        }
      `}</style>
    </div>
  );
};

export default SolutionsSection;