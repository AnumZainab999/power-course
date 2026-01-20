import React from "react";
import { ArrowRightOutlined } from "@ant-design/icons";
import heroImage from "../../assets/hero_mobile.png";

const HeroSectionMobile = () => {
  return (
    <div
      style={{
        position: "relative",
        height: "85vh",
        backgroundImage: `url(${heroImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* overlay */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          background: "rgba(0,0,0,0.35)",
        }}
      />

      <div
        style={{
          position: "absolute",
          bottom: 24,
          left: 16,
          right: 16,
          color: "#fff",
        }}
      >
        <h1
          style={{
            fontSize: "1.8rem",
            fontWeight: 500,
            maxWidth: 300,
            lineHeight: 1.25,
            marginBottom: 12,
          }}
        >
          Transforming learning through purpose-built education solutions
        </h1>

        <p
          style={{
            fontSize: "0.95rem",
            maxWidth: 280,
            marginBottom: 18,
          }}
        >
          With our products and solutions, we’re working to restore the true
          purpose of education i.e. to change lives.
        </p>

        <div
          style={{
            width: 40,
            height: 40,
            borderRadius: "50%",
            background: "#D2D3CD",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <ArrowRightOutlined style={{ color: "#000" }} />
        </div>
      </div>
    </div>
  );
};

export default HeroSectionMobile;
