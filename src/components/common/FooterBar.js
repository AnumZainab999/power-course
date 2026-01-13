import React from "react";
import { useNavigate } from "react-router-dom";

import { Row, Col, Space, Grid } from "antd";
import { WhatsAppOutlined } from "@ant-design/icons";
import linkedinImg from "../../assets/Vector.png"; // LinkedIn image

const { useBreakpoint } = Grid;

const Footer = () => {
  const screens = useBreakpoint();
const navigate = useNavigate();

  const footerContainerStyle = {
    width: "100%",
    backgroundColor: "#D5D5D3",
    padding: screens.xs ? "20px 15px" : "30px 60px",
    fontFamily: "sans-serif",
  };

  const linkStyle = {
    color: "#000",
    fontSize: screens.xs ? "12px" : "14px",
    textDecoration: "none",
    marginRight: screens.xs ? "15px" : "25px",
    cursor: "pointer",
    marginBottom: screens.xs ? "8px" : "0",
  };

  const copyrightStyle = {
    color: "#000",
    fontSize: screens.xs ? "12px" : "14px",
    marginTop: "10px",
  };

  // LinkedIn icon
  const linkedinStyle = {
    width: "24px",
    height: "24px",
    color: "#727272",
    marginLeft: screens.xs ? "10px" : "15px",
    cursor: "pointer",
  };

  // WhatsApp icon slightly bigger
  const whatsappStyle = {
    fontSize: screens.xs ? "24px" : "28px", // Slightly smaller on mobile
    color: "#727272",
    marginLeft: screens.xs ? "10px" : "15px",
    cursor: "pointer",
  };

  return (
    <footer style={footerContainerStyle}>
      <Row
        align="top"
        justify={screens.xs ? "center" : "space-between"}
        gutter={screens.xs ? [0, 10] : [0, 0]}
        style={{ flexDirection: screens.xs ? "column" : "row" }}
      >
        {/* Left Side: Links and Copyright */}
        <Col style={{ textAlign: screens.xs ? "center" : "left" }}>
          <div style={{ display: "flex", flexWrap: "wrap", justifyContent: screens.xs ? "center" : "flex-start" }}>
           <span 
  style={linkStyle} 
  onClick={() => navigate("/terms")}
>
  Terms of Use
</span>

            <span style={linkStyle} onClick={() => navigate("/privacy")}>Privacy</span>
            <span style={linkStyle}  onClick={() => navigate("/cookie")}>Cookie preferences</span>
            <span style={linkStyle}  onClick={() => navigate("/contact-us")}>Contact Us</span>
          </div>
          <div style={copyrightStyle}>
            Copyright © 2025 PowerCourses. All rights reserved.
          </div>
        </Col>

        {/* Right Side: Social Icons */}
        <Col style={{ textAlign: screens.xs ? "center" : "right", marginTop: screens.xs ? "10px" : 0 }}>
          <Space size="large">
            {/* LinkedIn Image */}
            <img src={linkedinImg} alt="LinkedIn" style={linkedinStyle} />

            {/* WhatsApp Icon bigger */}
            <WhatsAppOutlined style={whatsappStyle} />
          </Space>
        </Col>
      </Row>
    </footer>
  );
};

export default Footer;
