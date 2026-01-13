import React from "react";
import { Button, Typography } from "antd";
import { useNavigate } from "react-router-dom";
const { Paragraph } = Typography;

const TopBanner = () => {
    const navigate = useNavigate();

  const handleClick = () => {
    navigate("/contact-us");
  };

  return (
    <div style={styles.banner}>
      <Paragraph style={styles.text}>
        We offer full fee-waivers for families experiencing financial difficulty.
        Write to us in confidence — your<br/> child’s learning support will be fully
        covered, and your privacy will be protected.
      </Paragraph>

      <Button onClick={handleClick}  type="primary" ghost style={{width:"80px" ,color:'black', border:' 1px solid black',borderRadius:"20px" ,marginTop:"20px"   ,width: "110px"}}>
        Apply Now
      </Button>
    </div>
  );
};

const styles = {
  banner: {
    margin:"30px 0",
    background: "#B1DEFB",
    color: "#fff",
    padding: "60px",
    textAlign: "center",
  },
  text: {
    fontWeight:400,
    maxWidth: 800,
    margin: "0 auto 10px",
    color: "black",
  },
};

export default TopBanner;
