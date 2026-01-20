import { Row, Col, Typography, Image } from "antd";
import story from "../../assets/story.png";
import mission from "../../assets/mission.png";
import company from "../../assets/company.png";
import outlook from "../../assets/outlook.png";

const { Title, Paragraph } = Typography;

const StoryMission = () => {
  const titleStyle = {
    color: "#33355C",
    marginBottom: "30px",
    fontFamily: "'Days One', sans-serif",
  };

  return (
  <Row 
  justify="start"
  style={{
    paddingTop: "5px",
    paddingBottom: "5px",
    paddingLeft: window.innerWidth < 768 ? "20px" : "80px", // no padding on mobile
    paddingRight: window.innerWidth < 768 ? "10px" : "120px",
  }}
>

      {/* Increased column spans to utilize the new space on the left */}
      <Col xs={24} sm={24} md={22} lg={22}>
        
        <Title level={3} style={titleStyle}>About Us</Title>
        <Paragraph style={{ marginBottom: "60px" }}>
          Whether you’re new to PC or already familiar with our services, it’s vitally important to us <br/>
          that you know who we are, where we come from and what we stand for. We want you to <br/>
          feel confident in that choice, secure in the knowledge that your values align with ours.
        </Paragraph>

        {/* Section 1: Story & Mission */}
        {/* gutter={[48, 32]} maintains the exact center gap between items */}
        <Row gutter={[48, 32]}>
          <Col xs={24} md={12}>
            <Image preview={false} src={story} width="100%" />
            <Title level={4} style={{ ...titleStyle, marginTop: "40px" }}>Our Story</Title>
            <Paragraph style={{ marginBottom: "100px", color: "#515151" }}>
              We began our journey during COVID, when our work focused on helping people retrain and transition into new jobs through remote learning. It was in those moments that we saw how deeply learning can change lives — and how differently people learn when given flexibility, support, and space. We realized that the future of learning must place control in the hands of the learner. From that belief, our company was born.
            </Paragraph>
          </Col>

          <Col xs={24} md={12}>
            <Image preview={false} src={mission} width="100%" />
            <Title level={4} style={{ ...titleStyle, marginTop: "40px" }}>Our Mission</Title>
            <Paragraph style={{ marginBottom: "100px", color: "#515151" }}>
              Since the moment we are born, we are learning — sometimes actively, sometimes simply by observing the world around us. Learning shapes our choices, our opportunities, our careers, and our wellbeing. It influences the lives we build and the futures we create. That is why our mission is to make learning easier, more guided, and more accessible — so everyone has the support, clarity, and confidence they need across every step of the journey.
            </Paragraph>
          </Col>
        </Row>

        {/* Section 2: Company & Outlook */}
        <Row gutter={[48, 32]}>
          <Col xs={24} md={12}>
            <Image preview={false} src={company} width="100%" />
            <Title level={4} style={{ ...titleStyle, marginTop: "40px" }}>Our Company</Title>
            <Paragraph style={{ marginBottom: "40px", color: "#515151" }}>
              We’re a hungry team, driven by purpose more than size. Our founder is someone who looks at challenges as opportunities to learn and build better solutions, and that spirit runs through all of us. Some of us come from the education world, others bring fresh ideas from different fields — but we share one thing in common: we care deeply about helping learners succeed. Our company is based in the United States, with offices in the UK and the UAE, teams working across the world united by the same mission and heart.
            </Paragraph>
          </Col>

          <Col xs={24} md={12}>
            <Image preview={false} src={outlook} width="100%" />
            <Title level={4} style={{ ...titleStyle, marginTop: "40px" }}>Our Outlook</Title>
            <Paragraph style={{ marginBottom: "40px", color: "#515151" }}>
              Our outlook is rooted in the belief that the best learning happens at the intersection of human expertise and intelligent AI. We honor the power of the human touch in education while harnessing technology to make learning smarter, faster, and more effective. Through innovative partnerships, products, and services, we aim to shorten learning curves and help people reach their career goals with clarity and speed.
            </Paragraph>
          </Col>
        </Row>
      </Col>
    </Row>
  );
};

export default StoryMission;