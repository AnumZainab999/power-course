// import React from "react";
// import { Row, Col, Typography, Image } from "antd";

// import logo1 from "../../assets/g1.png";
// import logo2 from "../../assets/g2.jpg";
// import logo3 from "../../assets/g3.png";
// import logo4 from "../../assets/g4.png";
// import logo5 from "../../assets/g5.png";

// const { Title } = Typography;

// const logos = [
//   { src: logo3, alt: "Cambridge", width: 330, height: 286 },
//   { src: logo4, alt: "Local Board", width: 229, height: 144 },
//   { src: logo1, alt: "Edexcel", width: 117, height: 144 },
//   { src: logo5, alt: "Pearson", width: 114, height: 144 },
//   { src: logo2, alt: "IB", width: 116, height: 144 },
// ];

// const SupportedCurricula = () => {
//   return (
//     <div
//       style={{
//         marginTop:"120px",
//         padding: "20px 80px",
//         textAlign: "center",
//         marginBottom: 80,
//         backgroundColor: "#F5F5F5",
//       }}
//     >
//       <Title style={{ fontFamily: "'Days One', sans-serif" ,marginTop:"50px",fontWeight:"500"}} level={2}>
//         Supported Curricula
//       </Title>

//       <Row justify="center" align="middle" gutter={[48, 48]} style={{ marginTop: 40 }}>
//         {logos.map((logo, index) => (
//           <Col key={index}>
//             <Image
//               src={logo.src}
//               alt={logo.alt}
//               preview={false}
//               width={logo.width}
//               height={logo.height}
//               style={{
//                 objectFit: "contain",
//               }}
//             />
//           </Col>
//         ))}
//       </Row>
//     </div>
//   );
// };

// export default SupportedCurricula;


import React from "react";
import { Row, Col, Typography, Image, Grid } from "antd";

import logo1 from "../../assets/g1.png";
import logo2 from "../../assets/g2.jpg";
import logo3 from "../../assets/g3.png";
import logo4 from "../../assets/g4.png";
import logo5 from "../../assets/g5.png";

const { Title } = Typography;
const { useBreakpoint } = Grid;

const logos = [
  { src: logo3, alt: "Cambridge", width: 330, height: 286 },
  { src: logo4, alt: "Local Board", width: 229, height: 144 },
  { src: logo1, alt: "Edexcel", width: 117, height: 144 },
  { src: logo5, alt: "Pearson", width: 114, height: 144 },
  { src: logo2, alt: "IB", width: 116, height: 144 },
];

const SupportedCurricula = () => {
  const screens = useBreakpoint();

  return (
    <div
      style={{
        marginTop: "120px",
        padding: screens.xs ? "20px 16px" : "20px 80px", // responsive padding for mobile
        textAlign: "center",
        marginBottom: 80,
        backgroundColor: "#F5F5F5",
      }}
    >
      <Title
        style={{
          fontFamily: "'Days One', sans-serif",
          marginTop: "50px",
          fontWeight: "500",
          fontSize: screens.xs ? 24 : 32,
        }}
        level={2}
      >
        Supported Curricula
      </Title>

      <Row
        justify="center"
        align="middle"
        gutter={[screens.xs ? 16 : 48, 48]} // horizontal gutter smaller on mobile, vertical same
        style={{ marginTop: screens.xs ? 24 : 40 }}
      >
        {logos.map((logo, index) => (
          <Col
            key={index}
            style={{ display: "flex", justifyContent: "center" }}
          >
            <Image
              src={logo.src}
              alt={logo.alt}
              preview={false}
              width={screens.xs ? logo.width * 0.6 : logo.width} // shrink on mobile
              height={screens.xs ? logo.height * 0.6 : logo.height} // shrink proportionally
              style={{ objectFit: "contain" }}
            />
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default SupportedCurricula;
