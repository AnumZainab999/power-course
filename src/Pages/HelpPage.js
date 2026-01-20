import React from "react";
import {
  Layout,
  Typography,
  Collapse,
  Divider,
  Row,
  Col,
  Card,
} from "antd";
import {
  QuestionCircleOutlined,
  BookOutlined,
  SafetyOutlined,
  MailOutlined,
} from "@ant-design/icons";

const { Content } = Layout;
const { Title, Paragraph, Text } = Typography;
const { Panel } = Collapse;

const colors = {
  primary: "#1F7A63",
  softBg: "#F3FBF8",
  softCard: "#E6F4EF",
  textDark: "#0F2A24",
  textMuted: "#5F7D74",
};

const HelpFaqPage = () => {
  return (
    <Layout style={{ background: "#fff" }}>
      <Content>

        {/* HERO */}
        <section
          style={{
            background: colors.softBg,
            padding: "80px 80px",
            textAlign: "center",
          }}
        >
          <Title style={{ color: colors.textDark }}>
            Help & FAQs
          </Title>
          <Paragraph
            style={{
              maxWidth: 820,
              margin: "0 auto",
              fontSize: 16,
              color: colors.textMuted,
            }}
          >
            Welcome to <strong>IDRAK Academy</strong>. This page is designed to
            assist you with clarity and responsibility as you engage in
            structured Islamic learning that preserves authenticity and promotes
            real-world application.
          </Paragraph>
        </section>

        {/* MAIN CONTENT */}
        <section style={{ padding: "60px 80px" }}>

          {/* ABOUT HELP */}
          <Row gutter={24}>
            <Col xs={24} md={12}>
              <Card
                bordered={false}
                style={{
                  background: colors.softCard,
                  borderRadius: 14,
                  height: "100%",
                }}
              >
                <BookOutlined style={{ color: colors.primary }} />{" "}
                <Text strong>About Learning Support</Text>
                <Paragraph style={{ marginTop: 8 }}>
                  Our courses are structured to ensure disciplined learning,
                  academic integrity, and gradual understanding — whether you
                  are beginning or advancing in Islamic sciences.
                </Paragraph>
              </Card>
            </Col>

            <Col xs={24} md={12}>
              <Card
                bordered={false}
                style={{
                  background: colors.softCard,
                  borderRadius: 14,
                  height: "100%",
                }}
              >
                <SafetyOutlined style={{ color: colors.primary }} />{" "}
                <Text strong>Knowledge Integrity</Text>
                <Paragraph style={{ marginTop: 8 }}>
                  Islamic knowledge is an amanah (trust). We emphasize accuracy,
                  ethical use of materials, and respect for scholarly
                  methodology.
                </Paragraph>
              </Card>
            </Col>
          </Row>

          <Divider />

          {/* FAQ SECTION */}
          <Title level={3}>Frequently Asked Questions</Title>

          <Collapse accordion ghost>
            <Panel
              header="What is IDRAK Academy?"
              key="1"
            >
              IDRAK Academy is a Center for Islamic Thought and Application,
              offering structured Islamic education that preserves authenticity
              and translates knowledge into ethical real-world practice.
            </Panel>

            <Panel
              header="Who can enroll in IDRAK Academy courses?"
              key="2"
            >
              Our courses are open to both men and women. Some programs may be
              beginner-friendly, while others may require prior knowledge.
            </Panel>

            <Panel
              header="Are the courses suitable for beginners?"
              key="3"
            >
              Yes. Courses are designed with strong foundations and progress
              gradually to advanced levels.
            </Panel>

            <Panel
              header="Do the courses focus only on theory?"
              key="4"
            >
              No. Alongside Islamic sciences, we offer Applied Deen courses that
              emphasize ethical application, skill development, and halal income
              pathways.
            </Panel>

            <Panel
              header="Is certification provided?"
              key="5"
            >
              Certificates are awarded upon successful completion of applicable
              courses.
            </Panel>

            <Panel
              header="What ethical standards does IDRAK Academy follow?"
              key="6"
            >
              We uphold strict academic integrity. Fabrication, distortion,
              plagiarism, and misuse of religious knowledge are not permitted.
            </Panel>

            <Panel
              header="How can I contact support?"
              key="7"
            >
              You may reach our support team via email. We strive to respond with
              care, clarity, and responsibility.
            </Panel>
          </Collapse>

          <Divider />

          {/* CONTACT */}
          <Card
            bordered={false}
            style={{
              background: colors.softBg,
              borderRadius: 14,
              textAlign: "center",
            }}
          >
            <QuestionCircleOutlined style={{ color: colors.primary }} />{" "}
            <Paragraph>
              If your question is not listed above, our support team is here to
              assist you.
            </Paragraph>
            <Text strong>
              <MailOutlined /> support@idrakacademy.com
            </Text>
          </Card>
        </section>

      </Content>
    </Layout>
  );
};

export default HelpFaqPage;