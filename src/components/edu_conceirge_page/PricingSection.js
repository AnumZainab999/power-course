import React, { useState } from "react";
import { Row, Col, Card, Typography, Button } from "antd";
import "./PricingSection.css"; 

const { Title, Paragraph } = Typography;

const weeklyPlans = [
  {
    title: "Edu Concierge Basic",
    price: "AED 30.00",
    period: "/ Month",
    features: [
      "1.5 Hours / Week Foundation Support",
      "All Core Subjects",
      "Live Support",
      "Mobile App",
      "Quarterly School Fee Payment Lottery (Term)",
    ],
  },
  {
    title: "Edu Concierge Plus",
    price: "AED 200.00",
    period: "/ Month",
    features: [
      "Dedicated Edu. Manager",
      "3 Hours / Week 1 hour / Week (1:1) Foundation Support",
      "Live Learning Specialists as needed",
      "Assessments & Exam Prep.",
      "Parent Progress Reporting",
      "Mobile App",
      "Quarterly School Fee Payment Lottery (Term)",
    ],
  },
  {
    title: "Edu Concierge Basic",
    price: "AED 375.00",
    period: "/ Month",
    features: [
      "Dedicated Edu. Manager",
      "3 Hours / Week 1 hour / Week (1:1) Foundation Support",
      "Live Learning Specialists as needed",
      "Assessments & Exam Prep.",
      "Parent Progress Reporting",
      "Mobile App",
      "Quarterly School Fee Payment Lottery (Term)",
      "3 Students Account Supported (for Siblings)",
    ],
  },
];

const annualPlans = [
  {
    title: "Edu Concierge Plus",
    price: "AED 500.00",
    period: "/ Year",
    features: [
      "Dedicated Edu. Manager",
      "3 Hours / Week 1:1 Foundation Support",
      "Parent Progress Reporting",
      "Live Learning Specialists",
      "Mobile App",
      "Quarterly School Fee Payment Lottery (Term)",
    ],
  },
  {
    title: "Edu Concierge Total",
    price: "AED 900.00",
    period: "/ Year",
    features: [
      "Dedicated Edu. Manager",
      "Custom Learning Plan",
      "Parent Progress Dashboard",
      "Mobile App",
      "3 Students Supported",
      "Quarterly School Fee Payment Lottery (Term)",
    ],
  },
];

const PricingSection = () => {
  const [activeTab, setActiveTab] = useState("weekly");
  const [activeSubTab, setActiveSubTab] = useState("monthly");

  const renderPlans =
    activeTab === "weekly" ? weeklyPlans : activeTab === "annually" ? annualPlans : [];

  return (
    <div className="pricing-container"  id="plans">
      <Title level={2} className="plans-title">
        Plans
      </Title>

      {/* --- First Tab Bar --- */}
      <div className="tab-bar">
        <Button
          className={`tab-btn ${activeTab === "weekly" ? "active" : ""}`}
          onClick={() => setActiveTab("weekly")}
        >
          Weekly / Monthly
        </Button>
        <Button
          className={`tab-btn ${activeTab === "annually" ? "active" : ""}`}
          onClick={() => setActiveTab("annually")}
        >
          Annually | Save 30%
        </Button>
      </div>

    

      {/* --- Pricing Cards --- */}
   <Row
  gutter={[24, 24]}
  justify="center"
  align="stretch"
  className="plans-row"
>
  {renderPlans.map((plan, index) => (
    <Col
      xs={24}
      sm={12}
      md={8}
      key={index}
      style={{ display: "flex" }}   // 🔑 important
    >
      <Card
        className="plan-card"
        bordered={false}
        style={{ width: "100%", height: "100%" }} // 🔑 equal height
      >
        <Title level={4} className="plan-title">
          {plan.title}
        </Title>

        <Title level={2} className="plan-price">
          {plan.price}
        </Title>

        <Paragraph className="plan-period">{plan.period}</Paragraph>

        <Paragraph className="plan-desc">
          One simple subscription, no juggling multiple platforms or hidden costs.
          From foundational skills to advanced career pathways.
        </Paragraph>

        <div className="plan-btns">
          <Button type="primary" className="buy-btn">
            Buy Now
          </Button>
          <Button className="learn-btn">Learn More</Button>
        </div>

        <ul className="feature-list">
          {plan.features.map((feature, idx) => (
            <li key={idx}>{feature}</li>
          ))}
        </ul>
      </Card>
    </Col>
  ))}
</Row>
 
    </div>
  );
};

export default PricingSection;
