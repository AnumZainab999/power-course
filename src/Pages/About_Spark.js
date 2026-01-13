import React, { useEffect } from "react";
import { Layout } from "antd";
import AOS from "aos";
import "aos/dist/aos.css";

import HeaderBar from "../components/common/HeaderBar";

import FooterBar from "../components/common/FooterBar";
import WhyEducationManagers from "../components/About_spark/WhyEducationManagers";

const { Content } = Layout;

const AboutSparkPage = () => {
  useEffect(() => {
    AOS.init({
      duration: 2000,
      once: true,
      easing: "ease-out",
    });
  }, []);

  return (
    <Layout style={{ background: "#fff" }}>
      <HeaderBar />

         <WhyEducationManagers/>
        <FooterBar />
    
    </Layout>
  );
};

export default AboutSparkPage;
