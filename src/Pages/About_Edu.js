import React, { useEffect } from "react";
import { Layout } from "antd";
import AOS from "aos";
import "aos/dist/aos.css";

import HeaderBar from "../components/common/HeaderBar";

import FooterBar from "../components/common/FooterBar";
import AboutEduConcierge from "../components/about_Edu_Conceirge/AboutEduConceirge";

const { Content } = Layout;

const AboutEduPage = () => {
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

     <AboutEduConcierge/>
        <FooterBar />
    
    </Layout>
  );
};

export default AboutEduPage;
