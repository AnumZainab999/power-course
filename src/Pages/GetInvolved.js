import React from "react";
import {
  Layout,
  Typography,
  Row,
  Col,
  Card,
  Button,
  Divider,
} from "antd";
import {
  TeamOutlined,
  SolutionOutlined,
  HeartOutlined,
  BankOutlined,
} from "@ant-design/icons";

const { Content } = Layout;
const { Title, Paragraph, Text } = Typography;

const colors = {
  primary: "#1F7A63",
  softBg: "#F3FBF8",
  softCard: "#E6F4EF",
  textDark: "#0F2A24",
  textMuted: "#5F7D74",
};

const GetInvolved = () => {
  return (
    <Layout style={{ background: "#fff" }}>
      <Content>

        {/* HERO SECTION */}
        <section
          style={{
            background: colors.softBg,
            padding: "90px 80px",
            textAlign: "center",
          }}
        >
          <Title style={{ color: colors.textDark }}>
            Get Involved with IDRAK Academy
          </Title>
          <Paragraph
            style={{
              maxWidth: 820,
              margin: "0 auto",
              fontSize: 16,
              color: colors.textMuted,
            }}
          >
            IDRAK Academy is a Center for Islamic Thought and Application. We
            welcome individuals and institutions who wish to contribute toward
            authentic knowledge, ethical education, and meaningful impact.
          </Paragraph>
        </section>

        {/* INVOLVEMENT OPTIONS */}
        <section style={{ padding: "60px 80px" }}>
          <Row gutter={[24, 24]}>

            {/* CAREER */}
            <Col xs={24} md={12}>
              <Card
                bordered={false}
                style={{
                  background: colors.softCard,
                  borderRadius: 16,
                  height: "100%",
                }}
              >
                <SolutionOutlined
                  style={{ fontSize: 28, color: colors.primary }}
                />
                <Title level={4}>Build Your Career</Title>
                <Paragraph>
                  Join IDRAK Academy as an educator, researcher, content
                  developer, curriculum designer, or administrative
                  professional. Grow your career while serving the Deen with
                  responsibility and integrity.
                </Paragraph>
                <Button type="primary" style={{ background: colors.primary }}>
                  Explore Opportunities
                </Button>
              </Card>
            </Col>

            {/* PARTNER */}
            <Col xs={24} md={12}>
              <Card
                bordered={false}
                style={{
                  background: colors.softCard,
                  borderRadius: 16,
                  height: "100%",
                }}
              >
                <BankOutlined
                  style={{ fontSize: 28, color: colors.primary }}
                />
                <Title level={4}>Become a Partner</Title>
                <Paragraph>
                  Partner with IDRAK Academy as an institution, organization,
                  scholar, or professional body to expand access to structured
                  Islamic education and collaborative learning initiatives.
                </Paragraph>
                <Button type="primary" style={{ background: colors.primary }}>
                  Partner With Us
                </Button>
              </Card>
            </Col>

            {/* DONATION */}
            <Col xs={24} md={12}>
              <Card
                bordered={false}
                style={{
                  background: colors.softCard,
                  borderRadius: 16,
                  height: "100%",
                }}
              >
                <HeartOutlined
                  style={{ fontSize: 28, color: colors.primary }}
                />
                <Title level={4}>Support Through Donation</Title>
                <Paragraph>
                  Your contribution helps us develop courses, support students,
                  maintain learning infrastructure, and promote authentic
                  Islamic education for future generations.
                </Paragraph>
                <Button type="primary" style={{ background: colors.primary }}>
                  Donate Now
                </Button>
              </Card>
            </Col>

            {/* VOLUNTEER */}
            <Col xs={24} md={12}>
              <Card
                bordered={false}
                style={{
                  background: colors.softCard,
                  borderRadius: 16,
                  height: "100%",
                }}
              >
                <TeamOutlined
                  style={{ fontSize: 28, color: colors.primary }}
                />
                <Title level={4}>Volunteer & Contribute</Title>
                <Paragraph>
                  Offer your skills in design, development, research, writing,
                  translation, or community support to contribute meaningfully
                  toward the mission of IDRAK Academy.
                </Paragraph>
                <Button type="primary" style={{ background: colors.primary }}>
                  Join as Volunteer
                </Button>
              </Card>
            </Col>

          </Row>

          <Divider />

          {/* CLOSING MESSAGE */}
          <Card
            bordered={false}
            style={{
              background: colors.softBg,
              borderRadius: 16,
              textAlign: "center",
              padding: "40px",
            }}
          >
            <Title level={4}>Together, We Build Knowledge with Purpose</Title>
            <Paragraph style={{ color: colors.textMuted }}>
              Whether through teaching, partnership, service, or support — your
              involvement helps strengthen authentic Islamic learning and its
              practical application in the modern world.
            </Paragraph>
            <Text strong>
              “The best of people are those who are most beneficial to others.”
            </Text>
          </Card>

        </section>

      </Content>
    </Layout>
  );
};

export default GetInvolved;