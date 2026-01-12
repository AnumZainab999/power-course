import React from "react";
import { Row, Col, Card, Typography } from "antd";

const { Paragraph, Title } = Typography;

const testimonials = [
  {
    title: "I love using VEED.",
    desc: "The speech to subtitles transcription is the most accurate I’ve seen on the market. It’s available on all edit videos in just a minute — taking my content to the next level.",
    name: "Laura Haigh",
    role: "Brand Marketing Manager, Contagious Inspires",
    headerColor: "#b37feb",
  },
  {
    title: "VEED’s product has been game-changing.",
    desc: "It’s allowed us to create gorgeous content for social promotion and ad units with ease.",
    name: "Meta Allen",
    role: "Director of Audience Development, NBC",
    headerColor: "#5cdbd3",
  },
  {
    title: "VEED saves us valuable time and money.",
    desc: "It’s allowed my team to add subtitles and repurpose assets for different channels in just a few clicks.",
    name: "Adam Harrison",
    role: "VP of Marketing, Warner",
    headerColor: "#69c0ff",
  },
  {
    title: "Other editors just can’t compete.",
    desc: "VEED enables subtitling, editing, encoding, and many advanced features other editors can’t compete with.",
    name: "Chris Y.",
    role: "Content Creator",
    headerColor: "#95de64",
  },
];

const TestimonialCards = () => (
  <div style={{ padding: "80px 40px", textAlign: "center", background: "#fff" }}>
    {/* Section Title */}
    <Title level={2} style={{ fontWeight: 600, marginBottom: 50 }}>
      Schools rely on it. Students love it.
    </Title>

    {/* Responsive Grid */}
    <Row gutter={[24, 24]} justify="center">
      {testimonials.map((card, index) => (
        <Col xs={24} sm={12} md={12} lg={6} key={index}>
          <Card
            bordered={false}
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
              height: "100%",
              minHeight: 340,
              borderRadius: 12,
              overflow: "hidden",
              boxShadow: "0 2px 10px rgba(0,0,0,0.08)",
              background: "#fff",
            }}
          >
            {/* Colored Header */}
            <div
              style={{
                background: card.headerColor,
                color: "#fff",
                padding: "18px 20px",
                fontWeight: 600,
                fontSize: 16,
                minHeight: 70,
                display: "flex",
                alignItems: "center",
              }}
            >
              “{card.title}”
            </div>

            {/* Card Body */}
            <div style={{ padding: "20px", textAlign: "left", flex: 1 }}>
              <Paragraph style={{ color: "#555", fontSize: 14 }}>
                {card.desc}
              </Paragraph>
              <Paragraph style={{ marginTop: 10, fontWeight: 600, marginBottom: 0 }}>
                {card.name}
              </Paragraph>
              <Paragraph style={{ marginTop: 0, color: "#888", fontSize: 13 }}>
                {card.role}
              </Paragraph>
            </div>
          </Card>
        </Col>
      ))}
    </Row>
  </div>
);

export default TestimonialCards;
