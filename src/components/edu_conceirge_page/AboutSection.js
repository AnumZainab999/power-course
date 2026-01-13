import React from "react";
import { Row, Col, Typography } from "antd";
import aboutImg from "../../assets/about-img.png";

const { Title, Paragraph } = Typography;

const AboutSection = () => (
  <section className="about-section">
    <Row justify="center" align="middle" gutter={[40, 40]}>
      <Col xs={24} md={12}>
        <img src={aboutImg} alt="About Spark" className="about-image" />
      </Col>
      <Col xs={24} md={12}>
        <Title level={3}>About Edu Concierge</Title>
        <Paragraph>
         Edu Concierge connects each student with a personal education manager who organizes their study routine, arranges expert sessions, and keeps their learning on track. Our goal is to make personalized education simple, effective, and affordable for every learner.
        </Paragraph>
        <Paragraph>
From school to tuition to online resources — everything is managed in one platform, making personalized education simple, effective, and affordable for every learner.        </Paragraph>
      </Col>
    </Row>
  </section>
);

export default AboutSection;
