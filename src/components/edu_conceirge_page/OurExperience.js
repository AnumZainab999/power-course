import React from "react";
import { Typography } from "antd";

const { Title, Paragraph } = Typography;

const OurExperience = () => {
  return (
    <div
      style={{
        backgroundColor: "#7CEFBF",
        padding: "70px 24px",
        textAlign: "center",
        marginTop:"70px"
      }}
    >
      {/* Title */}
      <Title
        level={2}
        style={{
          color: "#020202",
          fontWeight: 400,
          marginBottom: 24,
          fontFamily: "'Days One', sans-serif"
        }}
      >
        Our Experience
      </Title>

      {/* Paragraph */}
      <Paragraph
        style={{
          maxWidth: 800,
          margin: "0 auto",
          fontSize: 15,
          lineHeight: 1.8,
          color: "#020202",
        }}
      >
        In what we do, experience alone isn’t enough. Our team, from six
        countries with over 200 years of combined<br/> expertise, pairs deep
        knowledge with a modern approach, unwavering commitment and a robust
        quality assurance process to provide the highest standard of support.
        We’re here to make a real difference in every student’s learning<br/>
        journey.
      </Paragraph>
    </div>
  );
};

export default OurExperience;
