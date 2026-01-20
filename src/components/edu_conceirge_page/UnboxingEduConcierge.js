// import React from "react";
// import { Row, Col, Card, Typography } from "antd";
// import heroImage from "../../assets/unboxing.png"; 

// const { Title, Text } = Typography;

// const cardData = [
//   {
//     title: <>Dedicated Support /<br/> Education Manager</>,
//     description: (
//       <>
//         <div style={{ marginBottom: "16px" }}>
//           Serves as the central point of coordination for student support and follow-ups.
//         </div>
//         <div>
//           Provides guided oversight across academic activities and scheduled sessions.
//         </div>
//       </>
//     ),
//     color: "#E6E0FF",
//   },
//   {
//     title: <>Curriculum-Linked<br/> Academic Support</>,
//     description: (
//       <>
//         <div style={{ marginBottom: "12px" }}>
//           Weekly support aligned with school subjects and ongoing lessons.
//         </div>
//         <div style={{ marginBottom: "12px" }}>
//           Subject-wise doubt clarification and topic revision when required.
//         </div>
//         <div>
//           Available in group sessions with the option for 1-to-1 teacher guidance.
//         </div>
//       </>
//     ),
//     color: "#DFF7EB",
//   },
//   {
//     title: <>Progress Monitoring & <br/> Study Support</>,
//     description: (
//       <>
//         <div style={{ marginBottom: "12px" }}>
//           Periodic progress reviews and follow-ups to help students stay on track.
//         </div>
//         <div style={{ marginBottom: "12px" }}>
//           Assistance with study planning, task organization, and revision priorities.
//         </div>
//         <div>
//           Parent coordination to maintain continuity in learning support.
//         </div>
//       </>
//     ),
//     color: "#D6EEFF",
//   },
//   {
//     title: "Exam Preparation Support",
//     description: (
//       <>
//         <div style={{ marginBottom: "12px" }}>
//           Structured guidance for exam readiness and concept reinforcement.
//         </div>
//         <div style={{ marginBottom: "12px" }}>
//           Study planning assistance – support with organising tasks, revision, and learning priorities.
//         </div>
//         <div>
//           Past Papers & Mock Exams
//         </div>
//       </>
//     ),
//     color: "#E6E0FF",
//   },
//   {
//     title: "More Services",
//     description: (
//       <>
//         <div style={{ marginBottom: "12px" }}>
//           Learning Assessment – diagnostic assessments to identify learning gaps, strengths, and support needs.
//         </div>
//         <div>
//           Student Counseling (Specialist-Led) — access to counseling and guidance.
//         </div>
//       </>
//     ),
//     color: "#DFF7EB",
//   },
//   {
//     title: "Value Add-Ons",
//     description:(
//       <>
//         <div style={{ marginBottom: "12px" }}>
//           Partner discounts on selected academic and learning services.
//         </div>
//         <div>
//           Eligibility for periodic free raffle opportunities.
//         </div>
//       </>
//     ),
//     color: "#D6EEFF",
//   },
// ];

// const UnboxingEduConcierge = () => {
//   return (
//     <div style={{ padding: "10px 20px", maxWidth: 1300, margin: "0 auto" }}>
      
//        <Title level={2} style={{ textAlign: "center",  color: "#5E4D8C", fontWeight: 400 , fontFamily: "'Days One', sans-serif", marginBottom:"40px"}}>
//           Unboxing Edu Concierge
//         </Title>

//       <div style={{ textAlign: "center", margin: "20px 0" }}>
//         <img
//           src={heroImage}
//           alt="Edu Concierge"
//           style={{ maxWidth: "70%", borderRadius: 8 }}
//         />
//       </div>

//       <Text style={{ display: "block", textAlign: "center", marginBottom: 32, fontSize:"29px" }}>
//         What you get is an all-inclusive, managed academic support service
//       </Text>

//       <Row gutter={[36, 48]} justify="center">
//         {cardData.map((card, index) => (
//           <Col key={index}>
//             <Card
//               title={
//                 <div
//                   style={{
//                     display: "flex",
//                     alignItems: "center",
//                     height: "160px",
//                     paddingLeft: "30px",
//                     textAlign: "left",
//                     whiteSpace: "normal",
//                     lineHeight: "1.4",
//                     fontFamily: "inter",
//                     fontSize: "20px",
//                     fontWeight: 800,
//                   }}
//                 >
//                   {card.title}
//                 </div>
//               }
//               headStyle={{
//                 backgroundColor: card.color,
//                 height: "160px",
//                 padding: 0,
//                 borderBottom: "none",
//                 display: "block",
//               }}
//               bodyStyle={{
//                 backgroundColor: "#fff",
//                 minHeight: 220,
//                 padding: "24px",
//               }}
//               style={{
//                 width: "350px",
//                 minHeight: 220,
//                 borderRadius: 8,
//               boxShadow: "1px 8px 14px rgba(0,0,0,0.12)",

//                 overflow: "hidden",
//                 border: "none",
//               }}
//             >
//               <Text
//                 style={{
//                   fontSize: 15,
//                   color: "#444",
//                   fontFamily: "Roboto",
//                   lineHeight: "1.6", // Added for better vertical spacing between lines
//                 }}
//               >
//                 {card.description}
//               </Text>
//             </Card>
//           </Col>
//         ))}
//       </Row>
//     </div>
//   );
// };

// export default UnboxingEduConcierge;


import React from "react";
import { Row, Col, Card, Typography, Grid } from "antd";
import heroImage from "../../assets/unboxing.png"; 

const { Title, Text } = Typography;
const { useBreakpoint } = Grid;

const cardData = [
  {
    title: <>Dedicated Support /<br/> Education Manager</>,
    description: (
      <>
        <div style={{ marginBottom: "16px" }}>
          Serves as the central point of coordination for student support and follow-ups.
        </div>
        <div>
          Provides guided oversight across academic activities and scheduled sessions.
        </div>
      </>
    ),
    color: "#F0EBFF",
  },
  {
    title: <>Curriculum-Linked<br/> Academic Support</>,
    description: (
      <>
        <div style={{ marginBottom: "12px" }}>
          Weekly support aligned with school subjects and ongoing lessons.
        </div>
        <div style={{ marginBottom: "12px" }}>
          Subject-wise doubt clarification and topic revision when required.
        </div>
        <div>
          Available in group sessions with the option for 1-to-1 teacher guidance.
        </div>
      </>
    ),
    color: "#C2F5E2",
  },
  {
    title: <>Progress Monitoring & <br/> Study Support</>,
    description: (
      <>
        <div style={{ marginBottom: "12px" }}>
          Periodic progress reviews and follow-ups to help students stay on track.
        </div>
        <div style={{ marginBottom: "12px" }}>
          Assistance with study planning, task organization, and revision priorities.
        </div>
        <div>
          Parent coordination to maintain continuity in learning support.
        </div>
      </>
    ),
    color: "#B1DEFB",
  },
  {
    title: "Exam Preparation Support",
    description: (
      <>
        <div style={{ marginBottom: "12px" }}>
          Structured guidance for exam readiness and concept reinforcement.
        </div>
        <div style={{ marginBottom: "12px" }}>
          Study planning assistance – support with organising tasks, revision, and learning priorities.
        </div>
        <div>
          Past Papers & Mock Exams
        </div>
      </>
    ),
    color: "#E6E0FF",
  },
  {
    title: "More Services",
    description: (
      <>
        <div style={{ marginBottom: "12px" }}>
          Learning Assessment – diagnostic assessments to identify learning gaps, strengths, and support needs.
        </div>
        <div>
          Student Counseling (Specialist-Led) — access to counseling and guidance.
        </div>
      </>
    ),
    color: "#C2F5E2",
  },
  {
    title: "Value Add-Ons",
    description:(
      <>
        <div style={{ marginBottom: "12px" }}>
          Partner discounts on selected academic and learning services.
        </div>
        <div>
          Eligibility for periodic free raffle opportunities.
        </div>
      </>
    ),
    color: "#B1DEFB",
  },
];

const UnboxingEduConcierge = () => {
  const screens = useBreakpoint(); // detect screen size

  return (
    <div style={{ padding: screens.xs ? "40px 16px" : "10px 20px", maxWidth: 1300, margin: "0 auto" }}>
      
      <Title
        level={2}
        style={{
          textAlign: "center",
          color: "#5E4D8C",
          fontWeight: 400,
          fontFamily: "'Days One', sans-serif",
          marginBottom: screens.xs ? 24 : 40
        }}
      >
        Unboxing Edu Concierge
      </Title>

      <div style={{ textAlign: "center", margin: screens.xs ? "16px 0" : "20px 0" }}>
        <img
          src={heroImage}
          alt="Edu Concierge"
          style={{ maxWidth: screens.xs ? "90%" : "70%", borderRadius: 8 }}
        />
      </div>

      <Text
        style={{
          display: "block",
          textAlign: "center",
          marginBottom: screens.xs ? 24 : 32,
          fontSize: screens.xs ? 20 : 29,
        }}
      >
        What you get is an all-inclusive, managed academic support service
      </Text>

      <Row
        gutter={[36, screens.xs ? 24 : 48]} // **horizontal 36px as original**, vertical adjusted for mobile
        justify="center"
        style={{
          marginTop: screens.xs ? 24 : 48, // spacing above the cards
        }}
      >
        {cardData.map((card, index) => (
          <Col
            key={index}
            xs={24}  // full width on mobile
            sm={12}  // 2 cards per row on small screens
            md={8}   // 3 cards per row on medium screens
            lg={8}   // 3 cards per row on large screens
            xl={8}
            style={{ display: "flex", justifyContent: "center" }}
          >
            <Card
              title={
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    height: screens.xs ? "auto" : "130px",
                    paddingLeft: screens.xs ? "16px" : "30px",
                    textAlign: "left",
                    whiteSpace: "normal",
                    lineHeight: "1.4",
                    fontFamily: "inter",
                    fontSize: screens.xs ? 16 : 20,
                    fontWeight: 800,
                  }}
                >
                  {card.title}
                </div>
              }
              headStyle={{
                backgroundColor: card.color,
                height: screens.xs ? "auto" : "130px",
                padding: screens.xs ? "16px" : 0,
                borderBottom: "none",
                display: "block",
              }}
              bodyStyle={{
                backgroundColor: "#fff",
                minHeight: screens.xs ? "auto" : 220,
                padding: screens.xs ? "16px" : "24px",
              }}
              style={{
                width: screens.xs ? "100%" : "350px",
                minHeight: screens.xs ? "auto" : 220,
                borderRadius: 8,
                boxShadow: "1px 8px 14px rgba(0,0,0,0.12)",
                overflow: "hidden",
                border: "none",
                marginBottom: screens.xs ? 16 : 0, // vertical spacing for stacked cards
              }}
            >
              <Text
                style={{
                  fontSize: screens.xs ? 14 : 15,
                  color: "#444",
                  fontFamily: "Roboto",
                  lineHeight: "1.6",
                }}
              >
                {card.description}
              </Text>
            </Card>
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default UnboxingEduConcierge;
