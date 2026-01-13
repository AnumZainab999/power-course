import React from "react";
import { Row, Col, Typography, Grid } from "antd";

const { Title, Paragraph } = Typography;
const { useBreakpoint } = Grid;

const PowerCourses = () => {
  const screens = useBreakpoint();

  return (
    <div
      style={{
        background: "#fff",
        padding: screens.xl
          ? "60px 600px 60px 80px"
          : screens.lg
          ? "60px 120px 60px 80px"
          : screens.md
          ? "50px 60px 50px 30px"
          : "40px 20px 40px 20px",
      }}
    >
      <Row>
        <Col xs={24} md={18}>
          <Title
            level={2}
            style={{
              color: "#33355C",
              marginTop: "20px",
              fontFamily: "'Days One', sans-serif",
            }}
          >
            We are PowerCourses
          </Title>

          <Paragraph style={{ margin: "0 auto" }}>
            Learning is what we power. It's what gets us out of bed each morning.
            It inspires us to constantly reimagine how people learn better —
            with purpose, agility, and continuity.
          </Paragraph>

          <Paragraph>
            For all the careers they aspire to.
            <br />
            For all the skills they want to build.
            <br />
            For all the possibilities they want to explore.
            <br />
            Across every stage of learning.
            <br />
            Across every industry.
            <br />
            Across the world.
          </Paragraph>
        </Col>
      </Row>
    </div>
  );
};

export default PowerCourses;
