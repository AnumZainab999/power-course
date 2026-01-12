import React from "react";
import { Row, Col, Card, Typography, Alert } from "antd";
import {
  GiftOutlined,
  HeartOutlined,
  CheckCircleOutlined,
} from "@ant-design/icons";

const { Title, Paragraph } = Typography;

const LotterySection = () => {
  const styles = {
    container: {
      maxWidth: 1100, // ✅ Slightly wider container
      margin: "0 auto",
      padding: "40px 20px",
    },
    title: {
      textAlign: "center",
      marginBottom: 8,
    },
    description: {
      color: "#555",
      marginBottom: 30,
      textAlign: "center",
      maxWidth: 700,
      margin: "0 auto",
    },
    card: {
      backgroundColor: "#f5f9ff",
      borderRadius: 12,
      padding: 24,
      boxShadow: "0 4px 12px rgba(0, 0, 255, 0.05)",
      transition: "all 0.3s ease",
      textAlign: "left",
      height: 220, // ✅ Equal fixed height for all cards
      width: "95%", // ✅ Slightly increased width
      margin: "0 auto",
      marginTop:30,
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
    },
    cardHover: {
      boxShadow: "0 6px 20px rgba(0, 102, 255, 0.15)",
      transform: "translateY(-5px)",
    },
    iconCircle: {
      backgroundColor: "#1677ff",
      color: "#fff",
      borderRadius: "50%",
      width: 50,
      height: 50,
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      fontSize: 24,
      marginBottom: 16,
    },
    alert: {
      marginTop: 30,
      backgroundColor: "#e6f4ff",
      border: "1px solid #91caff",
      color: "#0958d9",
      textAlign: "center",
    },
  };

  const [hoveredCard, setHoveredCard] = React.useState(null);

  const handleMouseEnter = (index) => setHoveredCard(index);
  const handleMouseLeave = () => setHoveredCard(null);

  const cards = [
    {
      icon: <GiftOutlined />,
      title: "Raffle Prizes",
      text: "Prizes include back-to-school vouchers and term fee payments for selected members.",
    },
    {
      icon: <HeartOutlined />,
      title: "Financial Support",
      text: "A mission to ease the financial burden of education for striving families.",
    },
    {
      icon: <CheckCircleOutlined />,
      title: "Fair & Transparent",
      text: "The system is designed to support all members fairly and without discrimination.",
    },
  ];

  return (
    <div style={styles.container}>
      <Title level={3} style={styles.title}>
        Giving Back: The Quarterly Lottery
      </Title>
      <Paragraph style={styles.description}>
        Our self-funded raffle program aims to ease the financial burden on
        families, offering everyone an equal chance to win valuable prizes.
      </Paragraph>

      <Row gutter={[24, 24]} justify="center">
        {cards.map((card, index) => (
          <Col xs={24} sm={12} md={8} key={index}>
            <Card
              bordered={false}
              style={{
                ...styles.card,
                ...(hoveredCard === index ? styles.cardHover : {}),
              }}
              onMouseEnter={() => handleMouseEnter(index)}
              onMouseLeave={handleMouseLeave}
            >
              <div style={styles.iconCircle}>{card.icon}</div>
              <Title level={4}>{card.title}</Title>
              <Paragraph>{card.text}</Paragraph>
            </Card>
          </Col>
        ))}
      </Row>

      <Alert
        style={styles.alert}
        message="Note: Raffle prizes are currently offered only in the UAE in 2025–2026. Terms and Conditions apply."
        type="info"
        showIcon
      />
    </div>
  );
};

export default LotterySection;
