import React, { useEffect } from "react";
import { Layout, Grid } from "antd";
import AOS from "aos";
import "aos/dist/aos.css";

import HeaderBar from "../components/common/HeaderBar";
import HeroSection from "../components/landing_page/HeroSection";
import SolutionsSection from "../components/landing_page/SolutionsSection";
import HeroSectionMobile from "../components/landing_page/HeroSectionMobile";
import SolutionsSectionMobile from "../components/landing_page/SolutionsSectionMobile";
import FooterBar from "../components/common/FooterBar";

const { Content } = Layout;
const { useBreakpoint } = Grid;

const LandingPage = () => {
  const screens = useBreakpoint();
  const isMobile = screens.xs;

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

      <Content>
        {/* DESKTOP / LAPTOP */}
        {!isMobile && (
          <>
            <HeroSection />
            <div data-aos="fade-up">
              <SolutionsSection />
            </div>
          </>
        )}

        {/* MOBILE ONLY */}
        {isMobile && (
          <>
            <HeroSectionMobile />
            <SolutionsSectionMobile />
          </>
        )}

        <FooterBar />
      </Content>
    </Layout>
  );
};

export default LandingPage;
