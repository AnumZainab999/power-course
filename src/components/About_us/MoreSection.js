import React from "react";
import { Row, Col, Typography, Grid } from "antd";
import {
  NotificationOutlined,
  TeamOutlined,
} from "@ant-design/icons";

const { Title, Text } = Typography;
const { useBreakpoint } = Grid;

const MoreSection = () => {
  const screens = useBreakpoint();

  return (
    <div
      style={{
        marginBottom: "150px",
        background: "#fff",
        /* CSS Padding Shorthand: Top | Right | Bottom | Left 
           We kept the 'Right' values high and reduced the 'Left' values.
        */
        padding: screens.xl
          ? "20px 600px 20px 80px"  // Right: 180px, Left: 40px
          : screens.lg
          ? "20px 120px 20px 80px"  // Right: 120px, Left: 40px
          : screens.md
          ? "50px 60px 50px 30px"   // Right: 60px, Left: 30px
          : "50px 20px 50px 20px",
      }}
    >
      {/* Heading */}
      <Title level={3} style={{ marginBottom: 30, fontFamily: "'Days One', sans-serif", color: "#33355C" }}>
        More
      </Title>

      {/* Content */}
      <Row gutter={[48, 32]}>
        {/* Stay Updated */}
        <Col xs={24} md={12}>
          <div>
            <NotificationOutlined
              style={{
                fontSize: 22,
                marginBottom: 12,
                color: "#1f1f1f",
              }}
            />
            <Title level={5}>Stay Updated</Title>
            <Text type="secondary" style={{color:"#515151"}}>
              Get announcements about partnerships, app <br/>updates,
              initiatives, and more near you and<br/> around the world.
            </Text>
          </div>
        </Col>

        {/* Join Us */}
        <Col xs={24} md={12}>
          {/* Removed negative margin to maintain the fixed center gap (gutter) */}
          <div style={{ textAlign: "left" }}>
            <TeamOutlined
              style={{
                fontSize: 22,
                marginBottom: 12,
                color: "#1f1f1f",
              }}
            />
            <Title level={5}>Join Us</Title>
            <Text type="secondary" style={{color:"#515151"}}>
              If you're curious, driven, and excited to work in a
              small, hungry team where ideas turn into real impact,
              we'd love to hear from you.
            </Text>
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default MoreSection;