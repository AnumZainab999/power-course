import React, { useState } from "react";
import {
  Row,
  Col,
  Typography,
  Button,
  Space,
  Grid,
} from "antd";
import { useNavigate } from "react-router-dom";
import heroImage from "../../assets/edu-hero.png";
import eduLogo from "../../assets/edu.png";
import SpeakToExpertModal from "./SpeakToExpertModal"; // ✅ IMPORT MODAL

const { Title, Paragraph } = Typography;
const { useBreakpoint } = Grid;

const HeroSection = () => {
  const screens = useBreakpoint();
  const navigate = useNavigate();

  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <div style={{ padding: "130px 24px" }}>
        <Row align="middle" gutter={[40, 40]}>
          {/* Left Content */}
          <Col xs={24} md={12}>
            <div
              style={{
                textAlign: "center",
                maxWidth: 480,
                margin: "0 auto",
              }}
            >
              <img
                src={eduLogo}
                alt="Edu Concierge"
                style={{ height: 80, marginBottom: 16 }}
              />

              <Title
                level={1}
                style={{
                  fontWeight: 400,
                  marginBottom: 12,
                  color: "#5E4D8C",
                  fontFamily: "'KoHo', sans-serif",
                }}
              >
                Edu Concierge
              </Title>

              <Paragraph
                style={{ color: "#545454", fontSize: 16, textAlign: "left" }}
              >
                An all-in-one learning support system for as low as USD 8
                <br /> per month.
              </Paragraph>

              <Space
                size={16}
                wrap
                style={{ marginTop: 24, justifyContent: "center" }}
              >
                <Button
                  size="large"
                  style={{
                    backgroundColor: "#fff",
                    color: "#1B1A1A",
                    border: "1.5px solid #1B1A1A",
                    borderRadius: 999,
                    minWidth: 160,
                    height: 44,
                  }}
                  onClick={() => {
                    const element = document.getElementById("plans");
                    if (element) {
                      element.scrollIntoView({
                        behavior: "smooth",
                        block: "start",
                      });
                    }
                  }}
                >
                  Plans
                </Button>

                <Button
                  size="large"
                  style={{
                    backgroundColor: "#fff",
                    color: "#1B1A1A",
                    border: "1.5px solid #1B1A1A",
                    borderRadius: 999,
                    minWidth: 200,
                    height: 44,
                  }}
                  onClick={() => setIsModalOpen(true)}
                >
                  Speak to an Expert
                </Button>
              </Space>
            </div>
          </Col>

          {/* Right Image */}
          <Col
            xs={24}
            md={12}
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <img
              src={heroImage}
              alt="Hero"
              style={{
                width: screens.xs ? "100%" : "90%",
                height: screens.xs ? "260px" : "490px",
                borderRadius: 16,
                objectFit: "cover",
              }}
            />
          </Col>
        </Row>
      </div>

      {/* ✅ MODAL COMPONENT */}
      <SpeakToExpertModal
        open={isModalOpen}
        onCancel={() => setIsModalOpen(false)}
      />
    </>
  );
};

export default HeroSection;
