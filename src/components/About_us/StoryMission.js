import { Row, Col, Typography, Image } from "antd";
import story from "../../assets/story.png";
import mission from "../../assets/mission.png";
import company from "../../assets/company.png";
import outlook from "../../assets/outlook.png";

const { Title, Paragraph } = Typography;

const StoryMission = () => {
  const titleStyle = {
    color: "#33355C",
    fontFamily: "'Days One', sans-serif",
  };

  return (
    <div style={{ 
      width: "100%",
      overflow: "hidden"
    }}>
      {/* Main Container */}
      <Row justify="center">
        <Col xs={24} sm={24} md={22} lg={20} xl={18}>
          
          {/* About Us Section */}
          <div style={{ 
            padding: "40px 20px",
            textAlign: "center"
          }}>
            <Title 
              level={3} 
              style={{
                ...titleStyle,
                marginBottom: "24px",
                fontSize: "clamp(24px, 5vw, 32px)"
              }}
            >
              About Us
            </Title>
            
            <Paragraph 
              style={{ 
                marginBottom: "40px",
                fontSize: "clamp(14px, 1.8vw, 16px)",
                lineHeight: 1.6,
                maxWidth: "800px",
                margin: "0 auto 40px"
              }}
            >
              Whether you're new to PC or already familiar with our services, it's vitally important to us that you know who we are, where we come from and what we stand for. We want you to feel confident in that choice, secure in the knowledge that your values align with ours.
            </Paragraph>
          </div>

          {/* Story & Mission Section */}
          <Row 
            gutter={[
              { xs: 0, sm: 32, md: 48 }, // Horizontal gutter
              { xs: 64, sm: 64, md: 80 }  // Vertical gutter
            ]}
            style={{ padding: "0 16px" }}
          >
            {/* Story */}
            <Col xs={24} md={12}>
              <div style={{ 
                height: "300px",
                overflow: "hidden",
                borderRadius: "12px",
                marginBottom: "32px"
              }}>
                <Image 
                  preview={false} 
                  src={story} 
                  style={{ 
                    width: "100%",
                    height: "100%",
                    objectFit: "cover"
                  }}
                />
              </div>
              
              <Title 
                level={4} 
                style={{ 
                  ...titleStyle,
                  marginBottom: "16px",
                  fontSize: "clamp(20px, 4vw, 24px)"
                }}
              >
                Our Story
              </Title>
              
              <Paragraph 
                style={{ 
                  color: "#515151",
                  lineHeight: 1.6,
                  fontSize: "clamp(14px, 1.6vw, 16px)"
                }}
              >
                We began our journey during COVID, when our work focused on helping people retrain and transition into new jobs through remote learning. It was in those moments that we saw how deeply learning can change lives — and how differently people learn when given flexibility, support, and space. We realized that the future of learning must place control in the hands of the learner. From that belief, our company was born.
              </Paragraph>
            </Col>

            {/* Mission */}
            <Col xs={24} md={12}>
              <div style={{ 
                height: "300px",
                overflow: "hidden",
                borderRadius: "12px",
                marginBottom: "32px"
              }}>
                <Image 
                  preview={false} 
                  src={mission} 
                  style={{ 
                    width: "100%",
                    height: "100%",
                    objectFit: "cover"
                  }}
                />
              </div>
              
              <Title 
                level={4} 
                style={{ 
                  ...titleStyle,
                  marginBottom: "16px",
                  fontSize: "clamp(20px, 4vw, 24px)"
                }}
              >
                Our Mission
              </Title>
              
              <Paragraph 
                style={{ 
                  color: "#515151",
                  lineHeight: 1.6,
                  fontSize: "clamp(14px, 1.6vw, 16px)"
                }}
              >
                Since the moment we are born, we are learning — sometimes actively, sometimes simply by observing the world around us. Learning shapes our choices, our opportunities, our careers, and our wellbeing. It influences the lives we build and the futures we create. That is why our mission is to make learning easier, more guided, and more accessible — so everyone has the support, clarity, and confidence they need across every step of the journey.
              </Paragraph>
            </Col>
          </Row>

          {/* Company & Outlook Section */}
          <Row 
            gutter={[
              { xs: 0, sm: 32, md: 48 }, // Horizontal gutter
              { xs: 64, sm: 64, md: 80 }  // Vertical gutter
            ]}
            style={{ 
              padding: "0 16px",
              marginTop: { xs: "64px", sm: "80px", md: "100px" }
            }}
          >
            {/* Company */}
            <Col xs={24} md={12}>
              <div style={{ 
                height: "300px",
                overflow: "hidden",
                borderRadius: "12px",
                marginBottom: "32px"
              }}>
                <Image 
                  preview={false} 
                  src={company} 
                  style={{ 
                    width: "100%",
                    height: "100%",
                    objectFit: "cover"
                  }}
                />
              </div>
              
              <Title 
                level={4} 
                style={{ 
                  ...titleStyle,
                  marginBottom: "16px",
                  fontSize: "clamp(20px, 4vw, 24px)"
                }}
              >
                Our Company
              </Title>
              
              <Paragraph 
                style={{ 
                  color: "#515151",
                  lineHeight: 1.6,
                  fontSize: "clamp(14px, 1.6vw, 16px)"
                }}
              >
                We're a hungry team, driven by purpose more than size. Our founder is someone who looks at challenges as opportunities to learn and build better solutions, and that spirit runs through all of us. Some of us come from the education world, others bring fresh ideas from different fields — but we share one thing in common: we care deeply about helping learners succeed. Our company is based in the United States, with offices in the UK and the UAE, teams working across the world united by the same mission and heart.
              </Paragraph>
            </Col>

            {/* Outlook */}
            <Col xs={24} md={12}>
              <div style={{ 
                height: "300px",
                overflow: "hidden",
                borderRadius: "12px",
                marginBottom: "32px"
              }}>
                <Image 
                  preview={false} 
                  src={outlook} 
                  style={{ 
                    width: "100%",
                    height: "100%",
                    objectFit: "cover"
                  }}
                />
              </div>
              
              <Title 
                level={4} 
                style={{ 
                  ...titleStyle,
                  marginBottom: "16px",
                  fontSize: "clamp(20px, 4vw, 24px)"
                }}
              >
                Our Outlook
              </Title>
              
              <Paragraph 
                style={{ 
                  color: "#515151",
                  lineHeight: 1.6,
                  fontSize: "clamp(14px, 1.6vw, 16px)"
                }}
              >
                Our outlook is rooted in the belief that the best learning happens at the intersection of human expertise and intelligent AI. We honor the power of the human touch in education while harnessing technology to make learning smarter, faster, and more effective. Through innovative partnerships, products, and services, we aim to shorten learning curves and help people reach their career goals with clarity and speed.
              </Paragraph>
            </Col>
          </Row>
        </Col>
      </Row>

      {/* Responsive CSS */}
      <style jsx="true">{`
        @media (max-width: 575.98px) {
          .ant-typography {
            text-align: left !important;
          }
          
          .ant-image {
            width: 100%;
          }
        }
        
        @media (min-width: 576px) and (max-width: 767.98px) {
          .ant-row {
            padding: 0 20px !important;
          }
          
          .ant-image {
            max-height: 280px;
          }
        }
        
        @media (min-width: 768px) and (max-width: 991.98px) {
          .ant-col-md-12 {
            padding: 0 16px !important;
          }
        }
        
        @media (min-width: 992px) {
          .ant-row {
            margin: 0 auto;
          }
        }
      `}</style>
    </div>
  );
};

export default StoryMission;