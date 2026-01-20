// import React from "react";
// import { Row, Col, Card, Typography } from "antd";

// import icon1 from "../../assets/icon1.png";
// import icon2 from "../../assets/icon2.png";

// const { Paragraph, Title } = Typography;

// const FAQSection = () => {
//   return (
//     <div style={{ padding: "100px 80px" }}>
//       <Row gutter={[60, 40]}>
//         {/* LEFT SIDE */}
//         <Col xs={24} md={8}>
//           <Title level={2} style={{ lineHeight: "50px" }}>
//             Frequently <br /> Asked <br /> Questions
//           </Title>

//           <div style={{ ...styles.sidebar, marginTop: 30 }}>
//             <p style={{fontWeight:"bold"}}>SUBSCRIPTIONS</p>
//             <p>PRIVACY</p>
//             <p>ABOUT EDUCONSERGE</p>
//             <p>EDU MANAGER</p>
//           </div>
//         </Col>

//         {/* RIGHT SIDE */}
//         <Col xs={24} md={16}>
//           {/* Cards */}
//           <Row gutter={[0, 20]} style={{ marginBottom: 40 }}>
//             <Col xs={12} sm={5} style={{ display: "flex", justifyContent: "center" }}>
//               <Card style={styles.activeCard}>
//                 <img src={icon1} alt="Resources" style={styles.iconImg} />
//                 <Paragraph style={styles.cardText}>Resources</Paragraph>
//               </Card>
//             </Col>

//             <Col xs={12} sm={5} style={{ display: "flex", justifyContent: "center" }}>
//               <Card style={styles.card}>
//                 <img
//   src={icon2}
//   alt="Ask AI"

//   height="85"
//    width="85"
// />

//                 <Paragraph style={{fontSize: 16,
//     fontWeight: 600,}}>Ask Ai</Paragraph>
//               </Card>
//             </Col>
//           </Row>

//           {/* Content */}
//           <Title level={4}>How can I cancel my subscription?</Title>
//           <Paragraph style={{ color: "black", maxWidth: 600 }}>
//             We offer full fee-waivers for families experiencing financial
//             difficulty.<br/> Write to us in confidence — your child’s learning support
//             will be fully<br/> covered, and your privacy will be protected.
//           </Paragraph>
//         </Col>
//       </Row>
//     </div>
//   );
// };

// const styles = {
//   card: {
//     height: 130,
//     width: 150,
//     marginLeft:"20px",
//     textAlign: "center",
//     display: "flex",
//     borderRadius:"0",
//     border:"1px solid black",
//     flexDirection: "column",
//     justifyContent: "center",
//   },
//   activeCard: {
//     height: 130,
//     width: 150,
//     borderRadius:"0",
//     textAlign: "center",
//     background: "#A7F58A",
//     display: "flex",
//     flexDirection: "column",
//     justifyContent: "center",
//   },
//   iconImg: {
//     width: 62,      // 👈 icon size
//     height: 62,
//     objectFit: "contain",
//     marginBottom: 10,

//   },
//   cardText: {
//     fontSize: 16,
//     fontWeight: 600,
//     marginBottom: 0,
//   },
//   sidebar: {
//     fontSize: 12,
//     color: "#666",
//     display: "flex",
//     flexDirection: "column",
//     gap: 10,
//   },
// };

// export default FAQSection;

import React from "react";
import { Row, Col, Card, Typography, Grid } from "antd";

import icon1 from "../../assets/icon1.png";
import icon2 from "../../assets/icon2.png";

const { Paragraph, Title } = Typography;
const { useBreakpoint } = Grid;

const FAQSection = () => {
  const screens = useBreakpoint(); // detect mobile

  return (
    <div
      style={{
        padding: screens.xs ? "50px 16px" : "100px 80px", // responsive padding
      }}
    >
      <Row gutter={[screens.xs ? 20 : 60, screens.xs ? 20 : 40]}>
        {/* LEFT SIDE */}
        <Col xs={24} md={8} style={{ marginBottom: screens.xs ? 30 : 0 }}>
          <Title
            level={2}
            style={{
              lineHeight: screens.xs ? "36px" : "50px", // smaller line-height on mobile
              fontSize: screens.xs ? 28 : undefined,   // smaller font on mobile
            }}
          >
            Frequently <br /> Asked <br /> Questions
          </Title>

          <div style={{ ...styles.sidebar, marginTop: screens.xs ? 20 : 30 }}>
            <p style={{ fontWeight: "bold" }}>SUBSCRIPTIONS</p>
            <p>PRIVACY</p>
            <p>ABOUT EDUCONSERGE</p>
            <p>EDU MANAGER</p>
          </div>
        </Col>

        {/* RIGHT SIDE */}
       {/* Added paddingLeft to this main Col to push everything right */}
<Col xs={24} md={16} style={{ paddingLeft: screens.xs ? '20px' : '50px' }}>
  
  {/* Cards Row */}
  <Row
    gutter={[screens.xs ? 16 : 0, screens.xs ? 16 : 20]}
    style={{ marginBottom: screens.xs ? 20 : 40 }}
    justify={screens.xs ? "center" : "start"} 
  >
    <Col
      xs={10} 
      sm={5}
      style={{ 
        display: "flex", 
        justifyContent: "center", 
        marginBottom: screens.xs ? 10 : 0 
      }}
    >
      <Card
        style={{
          ...styles.activeCard,
          height: screens.xs ? 100 : 130,
          width: screens.xs ? 120 : 150,
        }}
      >
        <img
          src={icon1}
          alt="Resources"
          style={{
            ...styles.iconImg,
            width: screens.xs ? 50 : 62,
            height: screens.xs ? 50 : 62,
            marginBottom: screens.xs ? 6 : 10,
          }}
        />
        <Paragraph
          style={{
            ...styles.cardText,
            fontSize: screens.xs ? 14 : 16,
          }}
        >
          Resources
        </Paragraph>
      </Card>
    </Col>

    <Col
      xs={10}
      sm={5}
      style={{ display: "flex", justifyContent: "center" }}
    >
      <Card
        style={{
          ...styles.card,
          height: screens.xs ? 100 : 130,
          width: screens.xs ? 120 : 150,
          marginLeft: screens.xs ? 10 : 20, // Space between cards
        }}
      >
        <img
          src={icon2}
          alt="Ask AI"
          width={screens.xs ? 70 : 85}
          height={screens.xs ? 70 : 80}
          style={{ objectFit: "contain", marginBottom: screens.xs ? 6 : 10 }}
        />
        <Paragraph
          style={{
            fontSize: screens.xs ? 14 : 16,
            fontWeight: 600,
            marginBottom: 0,
          }}
        >
          Ask Ai
        </Paragraph>
      </Card>
    </Col>
  </Row>

  {/* Content Section */}
  <div style={{ paddingLeft: screens.xs ? 0 : '10px' }}> {/* Optional extra nudge for text */}
    <Title level={4} style={{ fontSize: screens.xs ? 18 : undefined }}>
      How can I cancel my subscription?
    </Title>
    <Paragraph
      style={{
        color: "black",
        maxWidth: screens.xs ? "100%" : 500,
        fontSize: screens.xs ? 16 : 15, // Adjusted for better readability
        lineHeight: "1.6"
      }}
    >
      We offer full fee-waivers for families experiencing financial
      difficulty. Write to us in confidence — your child’s learning support
      will be fully covered, and your privacy will be protected.
    </Paragraph>
  </div>
</Col>
      </Row>
    </div>
  );
};

const styles = {
  card: {
    height: 130,
    width: 150,
    marginLeft: "20px",
    textAlign: "center",
    display: "flex",
    borderRadius: "0",
    border: "1px solid black",
    flexDirection: "column",
    justifyContent: "center",
  },
  activeCard: {
    height: 130,
    width: 150,
    borderRadius: "0",
    textAlign: "center",
    background: "#A7F58A",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
  },
  iconImg: {
    width: 62,
    height: 62,
    objectFit: "contain",
    marginBottom: 10,
  },
  cardText: {
    fontSize: 16,
    fontWeight: 600,
    marginBottom: 0,
  },
  sidebar: {
    fontSize: 12,
    color: "#666",
    display: "flex",
    flexDirection: "column",
    gap: 10,
  },
};

export default FAQSection;

