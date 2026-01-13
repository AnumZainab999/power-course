// import React from "react";
// import { Row, Col, Card, Button, Typography, Segmented } from "antd";
// import DLogo from "../../assets/d.png"; 

// const { Title, Text } = Typography;

// const ROW_HEIGHT = 54; 
// // This height ensures the data starts at the exact same point for labels and cards
// const TOP_OFFSET = 335; 

// const featureGroups = [
//   { title: "Foundation Support ⓘ", items: ["Group session online", "Online Teacher support (1:1)"] },
//   { title: "Subjects", items: [] },
//   { title: "Support Desk", items: [] },
//   { title: "Exam Preparation ⓘ", items: [] },
//   { title: "Education Manager", items: [] },
//   { title: "Mobile App", items: [] },
//   { title: "Bonus Features", items: [] },
//   { title: "Quarterly School Fee Raffle ⓘ", items: [] },
//   { title: "Learning Style Assessment", items: [] },
// ];

// const styles = {
//   page: { padding: "60px 80px", fontFamily: "'Public Sans', sans-serif" },
//   subText: { display: "block", textAlign: "center", color: "#4D4D4D", fontSize: 14 },
//   toggleWrap: { display: "flex", justifyContent: "center", marginTop: 24 },
//   card: {
//     borderRadius: 12,
//     borderWidth: 1,
//     position: "relative",
//     height: "100%",
//     minHeight: "850px", // Increased to accommodate all aligned rows
//     display: "flex",
//     flexDirection: "column",
//     marginTop: "40px",
//     boxShadow: "0 10px 30px rgba(0, 0, 0, 0.12)",
//     backgroundColor: "#fff",
//   },
//   cardHeader: { 
//     textAlign: "center", 
//     height: "295px", // Fixed container for header content
//     display: "flex",
//     flexDirection: "column",
//     justifyContent: "center",
//     padding: "24px 12px 0 12px"
//   },
//   row: {
//     height: ROW_HEIGHT,
//     display: "flex",
//     alignItems: "center",
//     justifyContent: "center",
//     fontSize: 13,
//     color: "#4D4D4D",
//     textAlign: "center",
//     border: "none",
//   },
//   labelHeading: { 
//     fontSize: "18px", 
//     fontWeight: "bold", 
//     color: "#4D4D4D", 
//     height: ROW_HEIGHT, 
//     display: "flex", 
//     alignItems: "center" 
//   },
//   labelSubHeading: { 
//     fontSize: "16px", 
//     color: "#4D4D4D", 
//     paddingLeft: "20px", 
//     height: ROW_HEIGHT, 
//     display: "flex", 
//     alignItems: "center" 
//   },
//   tryFreeBtn: {
//     marginTop: 16,
//     background: "#01BA97",
//     color: "#fff",
//     border: "none",
//     width: "150px",
//     height: "38px",
//     borderRadius: "4px",
//     fontWeight: "bold",
//     alignSelf: "center"
//   },
// };

// const SubscriptionPlans = () => {
//   return (
//     <div style={styles.page}>
//       <Title level={2} style={{ color: "#020202", fontWeight: 400, marginBottom: 24, textAlign: "center" }}>
//         Subscription Plans
//       </Title>

//       <Text style={styles.subText}>
//         Simple, transparent pricing — one subscription. No hidden fees. No platform switching.
//       </Text>

//       <div style={styles.toggleWrap}>
//         <Segmented options={["Quarterly", "Annual (10 months)"]} defaultValue="Annual (10 months)" />
//       </div>

//       <Row gutter={16} style={{ marginTop: 48 }}>
//         {/* LABEL COLUMN */}
//         <Col span={6}>
//           <div style={{ marginTop: TOP_OFFSET }}>
//             {featureGroups.map((group, i) => (
//               <React.Fragment key={i}>
//                 <div style={styles.labelHeading}>{group.title}</div>
//                 {group.items.map((sub, j) => <div key={j} style={styles.labelSubHeading}>{sub}</div>)}
//               </React.Fragment>
//             ))}
//           </div>
//         </Col>

//         {/* BASIC */}
//         <Col span={6}>
//           <PlanCard
//             title="BASIC"
//             titleColor="#0076FF"
//             price="30.00"
//             subtitle="/ Month / Student"
//             values={[
//               "", // Parallel to Foundation Support Header
//               "1.5 Hours/week", 
//               "Not included", 
//               <>All Core Subjects <br/> (Languages English only)</>, 
//               <>Live Support Desk <br/> during working hours</>, 
//               <>Not included <br/> (Additional charge)</>, 
//               "Not included", 
//               "included", 
//               "", // Parallel to Bonus Features Header
//               "Included", 
//               "Included"
//             ]}
//           />
//         </Col>

//         {/* PLUS */}
//         <Col span={6}>
//           <PlanCard
//             title="PLUS"
//             titleColor="#001F43"
//             price="230.00"
//             subtitle="/ Month / Student"
//             isPopular
//             values={[
//               "", // Parallel to Foundation Support Header
//               "", // Group session empty
//               "1 Hour / Week",
//               <>All Core Subjects <br/> (Languages English, Arabic only)</>,
//               <>Live Support Desk <br/> during working hours</>,
//               "Included",
//               "included",
//               "included",
//               "", // Parallel to Bonus Features Header
//               "Included",
//               "Included"
//             ]}
//           />
//         </Col>

//         {/* FAMILY */}
//         <Col span={6}>
//           <PlanCard
//             title="FAMILY"
//             titleColor="#001F43"
//             price="375.00"
//             subtitle="/ Month / 3 Siblings"
//             values={[
//               "", // Foundation Support Header
//               "All the features of Plus for 3 siblings",
//               "Raffle entry shall be only for one ward.",
//               "", // Subjects row empty
//               "", // Support Desk empty
//               "", // Exam Prep empty
//               "", // Edu Manager empty
//               "", // Mobile App empty
//               "", // Bonus Features Header empty
//               "", // Raffle empty
//               ""  // Assessment empty
//             ]}
//           />
//         </Col>
//       </Row>
//     </div>
//   );
// };

// const PlanCard = ({ title, titleColor, price, subtitle, values, isPopular }) => {
//   return (
//     <Card bordered style={styles.card} bodyStyle={{ padding: "0px", flex: 1 }}>
//       <div style={styles.cardHeader}>
//         <Title style={{ color: titleColor, fontSize: "26px", fontWeight: 600, marginBottom: 6 }}>{title}</Title>
//         <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: "8px" }}>
//           <img src={DLogo} alt="D" style={{ width: "44px", height: "44px" }} />
//           <span style={{ fontSize: "44px", fontWeight: "bold" }}>{price}</span>
//         </div>
//         <Text>{subtitle}</Text>
//         <Button style={styles.tryFreeBtn}>Try for Free</Button>
//       </div>

//       <div style={{ paddingBottom: "24px" }}>
//         {values.map((val, i) => (
//           <div key={i} style={styles.row}>
//             {val}
//           </div>
//         ))}
//       </div>
//     </Card>
//   );
// };

// export default SubscriptionPlans;



import React from "react";
import { Row, Col, Card, Button, Typography, Segmented, Grid } from "antd";
import DLogo from "../../assets/d.png";

const { Title, Text } = Typography;
const { useBreakpoint } = Grid;

const ROW_HEIGHT = 54;
const TOP_OFFSET = 335;

const featureGroups = [
  { title: "Foundation Support ⓘ", items: ["Group session online", "Online Teacher support (1:1)"] },
  { title: "Subjects", items: [] },
  { title: "Support Desk", items: [] },
  { title: "Exam Preparation ⓘ", items: [] },
  { title: "Education Manager", items: [] },
  { title: "Mobile App", items: [] },
  { title: "Bonus Features", items: [] },
  { title: "Quarterly School Fee Raffle ⓘ", items: [] },
  { title: "Learning Style Assessment", items: [] },
];

const styles = {
  page: { padding: "60px 80px", fontFamily: "'Public Sans', sans-serif" },
  subText: { display: "block", textAlign: "center", color: "#4D4D4D", fontSize: 14 },
  toggleWrap: { display: "flex", justifyContent: "center", marginTop: 24 },
  card: {
    borderRadius: 12,
    borderWidth: 1,
    position: "relative",
    height: "100%",
    minHeight: "850px",
    display: "flex",
    flexDirection: "column",
    marginTop: "40px",
    boxShadow: "0 10px 30px rgba(0, 0, 0, 0.12)",
    backgroundColor: "#fff",
    width: "100%", // This ensures cards take full column width in desktop
  },
  cardHeader: {
    textAlign: "center",
    height: "295px",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    padding: "24px 12px 0 12px",
  },
  row: {
    height: ROW_HEIGHT,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontSize: 13,
    color: "#4D4D4D",
    textAlign: "center",
    border: "none",
  },
  labelHeading: {
    fontSize: "18px",
    fontWeight: "bold",
    color: "#4D4D4D",
    height: ROW_HEIGHT,
    display: "flex",
    alignItems: "center",
  },
  labelSubHeading: {
    fontSize: "16px",
    color: "#4D4D4D",
    paddingLeft: "20px",
    height: ROW_HEIGHT,
    display: "flex",
    alignItems: "center",
  },
  tryFreeBtn: {
    marginTop: 16,
    background: "#01BA97",
    color: "#fff",
    border: "none",
    width: "150px",
    height: "38px",
    borderRadius: "4px",
    fontWeight: "bold",
    alignSelf: "center",
  },
};

const SubscriptionPlans = () => {
  const screens = useBreakpoint(); // Detect screen size

  return (
    <div style={{ ...styles.page, padding: screens.xs ? "40px 16px" : styles.page.padding }} id="plans">
      <Title
        level={2}
        style={{
          color: "#020202",
          fontWeight: 400,
          marginBottom: 24,
          textAlign: "center",
          fontSize: screens.xs ? 22 : 26,
        }}
      >
        Subscription Plans
      </Title>

      <Text style={{ ...styles.subText, fontSize: screens.xs ? 12 : styles.subText.fontSize }}>
        Simple, transparent pricing — one subscription. No hidden fees. No platform switching.
      </Text>

      <div style={{ ...styles.toggleWrap, marginTop: screens.xs ? 16 : styles.toggleWrap.marginTop }}>
        <Segmented options={["Quarterly", "Annual (10 months)"]} defaultValue="Annual (10 months)" size={screens.xs ? "small" : "middle"} />
      </div>

      <Row gutter={16} style={{ marginTop: screens.xs ? 24 : 48 }}>
        {/* LABEL COLUMN - hide on mobile */}
        {!screens.xs && (
          <Col span={6}>
            <div style={{ marginTop: TOP_OFFSET }}>
              {featureGroups.map((group, i) => (
                <React.Fragment key={i}>
                  <div style={styles.labelHeading}>{group.title}</div>
                  {group.items.map((sub, j) => (
                    <div key={j} style={styles.labelSubHeading}>
                      {sub}
                    </div>
                  ))}
                </React.Fragment>
              ))}
            </div>
          </Col>
        )}

        {/* PLAN CARDS */}
        {[
          {
            title: "BASIC",
            titleColor: "#0076FF",
            price: "30.00",
            subtitle: "/ Month / Student",
            values: [
              "",
              "1.5 Hours/week",
              "Not included",
              <>All Core Subjects <br /> (Languages English only)</>,
              <>Live Support Desk <br /> during working hours</>,
              <>Not included <br /> (Additional charge)</>,
              "Not included",
              "included",
              "",
              "Included",
              "Included",
            ],
          },
          {
            title: "PLUS",
            titleColor: "#001F43",
            price: "230.00",
            subtitle: "/ Month / Student",
            values: [
              "",
              "",
              "1 Hour / Week",
              <>All Core Subjects <br /> (Languages English, Arabic only)</>,
              <>Live Support Desk <br /> during working hours</>,
              "Included",
              "included",
              "included",
              "",
              "Included",
              "Included",
            ],
            isPopular: true,
          },
          {
            title: "FAMILY",
            titleColor: "#001F43",
            price: "375.00",
            subtitle: "/ Month / 3 Siblings",
            values: [
              "",
              "All the features of Plus for 3 siblings",
              "Raffle entry shall be only for one ward.",
              "",
              "",
              "",
              "",
              "",
              "",
              "",
              "",
            ],
          },
        ].map((plan) => (
          <Col
            key={plan.title}
            xs={24}
            md={6}
            style={{ display: "flex", justifyContent: "center", marginTop: screens.xs ? 24 : 0 }}
          >
            <PlanCard {...plan} isMobile={screens.xs} />
          </Col>
        ))}
      </Row>
    </div>
  );
};

const PlanCard = ({ title, titleColor, price, subtitle, values, isMobile }) => {
  return (
    <Card
      bordered
      style={{
        ...styles.card,
        minHeight: isMobile ? "650px" : styles.card.minHeight,
      }}
      bodyStyle={{ padding: "0px", flex: 1 }}
    >
      <div style={{ ...styles.cardHeader, height: isMobile ? "220px" : styles.cardHeader.height }}>
        <Title style={{ color: titleColor, fontSize: isMobile ? 22 : 26, fontWeight: 600, marginBottom: 6 }}>{title}</Title>
        <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: "8px" }}>
          <img src={DLogo} alt="D" style={{ width: isMobile ? 36 : 44, height: isMobile ? 36 : 44 }} />
          <span style={{ fontSize: isMobile ? 36 : 44, fontWeight: "bold" }}>{price}</span>
        </div>
        <Text>{subtitle}</Text>
        <Button style={{ ...styles.tryFreeBtn, width: isMobile ? 130 : 150, height: isMobile ? 34 : 38 }}>Try for Free</Button>
      </div>

      <div style={{ paddingBottom: "24px" }}>
        {values.map((val, i) => (
          <div key={i} style={{ ...styles.row, height: isMobile ? 40 : ROW_HEIGHT, fontSize: isMobile ? 12 : 13 }}>
            {val}
          </div>
        ))}
      </div>
    </Card>
  );
};

export default SubscriptionPlans;
