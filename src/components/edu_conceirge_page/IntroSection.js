import React from "react";
import { Typography } from "antd";

const { Title, Paragraph } = Typography;

const IntroSection = () => {
  return (
    <div style={{ padding: "0 80px", marginBottom: 60 }}>
      <div style={{ maxWidth: 800, margin: "0 auto", textAlign: "center" }}>
        
        <Paragraph
          type="secondary"
          style={{
            fontSize: 18,
            lineHeight: 1.8,
            marginBottom: 20,
          }}
        >
          At Atypical, we focus on creating learning experiences that are safe,
          fun, and science-based. Our AI-native solutions are grounded in proven
          learning science, making education more accessible, equitable, and
          effective for everyone.
        </Paragraph>

        <Title
          level={2}
          style={{
            color: "#4B2AAD",
            fontSize: 40,
            fontWeight: 600,
            margin: 0,
          }}
        >
          Unboxing Education
        </Title>

      </div>
    </div>
  );
};

export default IntroSection;
