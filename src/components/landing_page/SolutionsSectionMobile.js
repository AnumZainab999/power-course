import React from "react";
import { ArrowRightOutlined } from "@ant-design/icons";
import {  Typography ,Grid} from "antd";
import { useNavigate } from "react-router-dom";
import logo1 from "../../assets/edu-logo.png";
import logo2 from "../../assets/spark-logo.png";
const { Text } = Typography;
const { useBreakpoint } = Grid;
const SolutionsSectionMobile = () => {
  const navigate = useNavigate();
  const screens = useBreakpoint();
   const isMobile = !screens.md; // Mobile & tablet
   const isSmallMobile = screens.xs; // Extra small screens
 const greyBoxFontSize = isSmallMobile ? "12px" : 
                         isMobile ? "13px" : "13px";

  return (
    <div style={{ background: "#D5D5D3", padding: "24px 16px" }}>
      <h2
        style={{
          fontSize: "1.4rem",
          fontWeight: 600,
          marginBottom: 16,
          textAlign: "center",
        }}
      >
        Our Solutions
      </h2>

      {/* EDU */}
      <div
        style={{
          background: "linear-gradient(135deg,#ff007a,#800040)",
          borderRadius: 16,
          padding: 20,
          marginBottom: 16,
           height:"240px",
          position: "relative",
          color: "#fff",
        }}
      >
        <img src={logo1} width={55} alt="" />
        <h4 style={{ marginTop: 8 }}>EDU CONCIERGE</h4>
        <p style={{ fontSize: 14 }}>
         A one-stop education assistant that helps students and parents make better choices, save time and money, and stay on track with studies - for as low as AED 30 per month.
        </p>

        <div
          onClick={() => navigate("/edu-concierge")}
          style={{
            position: "absolute",
            right: 16,
            bottom: 16,
            width: 34,
            height: 34,
            borderRadius: "50%",
            background: "#E9EAE6",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <ArrowRightOutlined style={{ 
                  color: "black", }}/>
        </div>
      </div>

      {/* SPARK */}
      <div
        style={{
          background: "linear-gradient(135deg,#00b4ff,#004a99)",
          borderRadius: 16,
           height:"250px",
          padding: 20,
          position: "relative",
          color: "#fff",
        }}
      >
        <img src={logo2} width={95} alt="" />
       <h4 style={{ marginTop: 8 }}>EXAM PREP</h4>
        <p style={{ fontSize: 14 }}>
        Get CBSE Grade 10 Exam Preparation Support — Absolutely Free
</p>
          <div
                  style={{
                    background: "#E9EAE6",
                    borderRadius: "8px",
                    padding: "10px 12px" ,
                    display: "inline-block",
                    width:  "100%",
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
        <div
          onClick={() => navigate("/spark")}
          style={{
            position: "absolute",
            right: 16,
            bottom: 16,
            width: 34,
            height: 34,
            borderRadius: "50%",
            background: "#E9EAE6",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <ArrowRightOutlined style={{ 
                  color: "black", }} />
        </div>
      </div>
    </div>
  );
};

export default SolutionsSectionMobile;
