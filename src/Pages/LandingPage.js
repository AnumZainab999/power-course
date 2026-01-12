import React, { useEffect } from "react";
import { Layout } from "antd";
import AOS from "aos";
import "aos/dist/aos.css";

import HeaderBar from "../components/common/HeaderBar";
import HeroSection from "../components/landing_page/HeroSection";
import SolutionsSection from "../components/landing_page/SolutionsSection";
import FooterBar from "../components/common/FooterBar";

const { Content } = Layout;

const LandingPage = () => {
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

      <Content style={{ marginTop: 0 }}>
        <HeroSection />

        <div data-aos="fade-up">
          <SolutionsSection />
        </div>

        <FooterBar />
      </Content>
    </Layout>
  );
};

export default LandingPage;
