import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { Layout } from "antd";
import AOS from "aos";
import "aos/dist/aos.css";
import IntroSection from "../components/edu_conceirge_page/IntroSection";
import HeaderBar from "../components/common/HeaderBar";
import HeroSection from "../components/edu_conceirge_page/HeroSection";
import TestimonialCards from "../components/edu_conceirge_page/TestimonialCards";
import FooterBar from "../components/common/FooterBar";
import PricingSection from "../components/edu_conceirge_page/PricingSection";
import LotterySection from "../components/edu_conceirge_page/LotterySection";
import UnboxingSection from "../components/edu_conceirge_page/UnboxingSection";
import SupportedCurricula from "../components/edu_conceirge_page/SupportedCurricula";
import EducationManager from "../components/edu_conceirge_page/EducationManager";
import TopBanner from "../components/edu_conceirge_page/TopBanner";
import FAQSection from "../components/edu_conceirge_page/FaqSection";
import EducationJourneySection from "../components/edu_conceirge_page/EducationJourneySection";
import UnboxingEduConcierge from "../components/edu_conceirge_page/UnboxingEduConcierge";
import OurExperience from "../components/edu_conceirge_page/OurExperience";
import SubscriptionPlans from "../components/edu_conceirge_page/SubscriptionPlan";
const { Content } = Layout;

const Edu_Conceirge = () => {
  const location = useLocation();

  // Initialize AOS
  useEffect(() => {
    AOS.init({ duration: 2000, once: true }); // 2s fade-up animation
  }, []);

  // Smooth scroll for plans section
  useEffect(() => {
    if (location.hash === "#plans-edu") {
      const section = document.getElementById("plans-edu");
      if (section) section.scrollIntoView({ behavior: "smooth" });
    }
  }, [location]);

  return (
    <>
      {/* Smooth scroll behavior */}
      <style>{`
        html {
          scroll-behavior: smooth;
        }
        .fixed-header {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          z-index: 1000;
          background: #fff;
          box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
        }
      `}</style>

      <Layout style={{ background: "#fff" }}>
        <div className="fixed-header" data-aos="fade-down">
          <HeaderBar  />
        </div>

        <Content>
          <div data-aos="fade-up">
            <HeroSection />
          </div>

         <EducationJourneySection/>
          <UnboxingEduConcierge/>
    
      <SupportedCurricula />

      <EducationManager />
      <OurExperience/>
         <SubscriptionPlans/>
          <TopBanner/>
          <FAQSection/>
        
        </Content>

        <div data-aos="fade-up">
          <FooterBar />
        </div>
      </Layout>
    </>
  );
};

export default Edu_Conceirge;


