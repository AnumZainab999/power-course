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
            padding: "60px 20px 40px 20px",
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
                fontSize: "clamp(14px, 1.8vw, 16px)",
                lineHeight: 1.6,
                maxWidth: "800px",
                margin: "0 auto 0"
              }}
            >
              Whether you're new to PC or already familiar with our services, it's vitally important to us that you know who we are, where we come from and what we stand for. We want you to feel confident in that choice, secure in the knowledge that your values align with ours.
            </Paragraph>
          </div>

          {/* Story & Mission Section */}
          <Row 
            gutter={[
              { xs: 0, sm: 32, md: 48, lg: 64, xl: 80 }, // Horizontal gutter - increases with screen size
              { xs: 8, sm: 18, md: 28, lg: 64, xl: 80 }  // Vertical gutter - increases with screen size
            ]}
            style={{ padding: "0 16px" }}
          >
            {/* Story */}
            <Col xs={24} md={12}>
              <div style={{ 
                height: { xs: "200px", sm: "250px", md: "280px", lg: "300px", xl: "320px" },
                overflow: "hidden",
                borderRadius: "12px",
                marginBottom: "24px"
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
                  marginBottom: { xs: "8px", sm: "12px", md: "16px", lg: "20px", xl: "24px" },
                  fontSize: "clamp(18px, 4vw, 24px)"
                }}
              >
                Our Story
              </Title>
              
              <Paragraph 
                style={{ 
                  color: "#515151",
                  lineHeight: 1.6,
                  fontSize: "clamp(14px, 1.6vw, 16px)",
                  marginBottom: { xs: "0", sm: "0", md: "0", lg: "0", xl: "0" }
                }}
              >
                We began our journey during COVID, when our work focused on helping people retrain and transition into new jobs through remote learning. It was in those moments that we saw how deeply learning can change lives — and how differently people learn when given flexibility, support, and space. We realized that the future of learning must place control in the hands of the learner. From that belief, our company was born.
              </Paragraph>
            </Col>

            {/* Mission */}
            <Col xs={24} md={12}>
              <div style={{ 
                height: { xs: "200px", sm: "250px", md: "280px", lg: "300px", xl: "320px" },
                overflow: "hidden",
                borderRadius: "12px",
                marginBottom: "24px"
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
                  marginBottom: { xs: "8px", sm: "12px", md: "16px", lg: "20px", xl: "24px" },
                  fontSize: "clamp(18px, 4vw, 24px)"
                }}
              >
                Our Mission
              </Title>
              
              <Paragraph 
                style={{ 
                  color: "#515151",
                  lineHeight: 1.6,
                  fontSize: "clamp(14px, 1.6vw, 16px)",
                  marginBottom: { xs: "0", sm: "0", md: "0", lg: "0", xl: "0" }
                }}
              >
                Since the moment we are born, we are learning — sometimes actively, sometimes simply by observing the world around us. Learning shapes our choices, our opportunities, our careers, and our wellbeing. It influences the lives we build and the futures we create. That is why our mission is to make learning easier, more guided, and more accessible — so everyone has the support, clarity, and confidence they need across every step of the journey.
              </Paragraph>
            </Col>
          </Row>

          {/* Company & Outlook Section */}
          <Row 
            gutter={[
              { xs: 0, sm: 32, md: 48, lg: 64, xl: 80 }, // Horizontal gutter - increases with screen size
              { xs: 24, sm: 32, md: 48, lg: 64, xl: 80 }  // Vertical gutter - increases with screen size
            ]}
            style={{ 
              padding: "0 16px",
              marginTop: { xs: "24px", sm: "32px", md: "48px", lg: "64px", xl: "80px" }
            }}
          >
            {/* Company */}
            <Col xs={24} md={12}>
              <div style={{ 
                height: { xs: "200px", sm: "250px", md: "280px", lg: "300px", xl: "320px" },
                overflow: "hidden",
                borderRadius: "12px",
                marginBottom: "24px"
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
                  marginBottom: { xs: "8px", sm: "12px", md: "16px", lg: "20px", xl: "24px" },
                  fontSize: "clamp(18px, 4vw, 24px)"
                }}
              >
                Our Company
              </Title>
              
              <Paragraph 
                style={{ 
                  color: "#515151",
                  lineHeight: 1.6,
                  fontSize: "clamp(14px, 1.6vw, 16px)",
                  marginBottom: { xs: "0", sm: "0", md: "0", lg: "0", xl: "0" }
                }}
              >
                We're a hungry team, driven by purpose more than size. Our founder is someone who looks at challenges as opportunities to learn and build better solutions, and that spirit runs through all of us. Some of us come from the education world, others bring fresh ideas from different fields — but we share one thing in common: we care deeply about helping learners succeed. Our company is based in the United States, with offices in the UK and the UAE, teams working across the world united by the same mission and heart.
              </Paragraph>
            </Col>

            {/* Outlook */}
            <Col xs={24} md={12}>
              <div style={{ 
                height: { xs: "200px", sm: "250px", md: "280px", lg: "300px", xl: "320px" },
                overflow: "hidden",
                borderRadius: "12px",
                marginBottom: "24px"
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
                  marginBottom: { xs: "8px", sm: "12px", md: "16px", lg: "20px", xl: "24px" },
                  fontSize: "clamp(18px, 4vw, 24px)"
                }}
              >
                Our Outlook
              </Title>
              
              <Paragraph 
                style={{ 
                  color: "#515151",
                  lineHeight: 1.6,
                  fontSize: "clamp(14px, 1.6vw, 16px)",
                  marginBottom: { xs: "0", sm: "0", md: "0", lg: "0", xl: "0" }
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
          
          /* Very compact mobile layout */
          .ant-col-24 {
            padding-bottom: 8px !important;
          }
          
          /* Minimal spacing for mobile */
          .ant-row {
            margin-bottom: 0 !important;
          }
        }
        
        @media (min-width: 576px) and (max-width: 767.98px) {
          .ant-row {
            padding: 0 20px !important;
          }
        }
        
        @media (min-width: 768px) and (max-width: 991.98px) {
          .ant-col-md-12 {
            padding: 0 24px !important;
          }
          
          /* Medium spacing */
          .ant-row {
            margin-bottom: 24px !important;
          }
        }
        
        @media (min-width: 992px) and (max-width: 1199.98px) {
          /* Generous spacing for large screens */
          .ant-row {
            margin-bottom: 32px !important;
          }
          
          .ant-col-lg-12 {
            padding: 0 32px !important;
          }
        }
        
        @media (min-width: 1200px) {
          /* Very generous spacing for extra large screens */
          .ant-row {
            margin-bottom: 40px !important;
          }
          
          .ant-col-xl-12 {
            padding: 0 40px !important;
          }
          
          /* Increased reading comfort */
          .ant-typography {
            line-height: 1.8 !important;
          }
        }
      `}</style>
    </div>
  );
};

export default StoryMission;