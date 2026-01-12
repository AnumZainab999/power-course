import HeroSection from "../components/About_us/HeroSection";
import HeaderBar from "../components/common/HeaderBar";
import { Layout } from "antd";
import FooterBar from "../components/common/FooterBar";
import PowerCourses from "../components/About_us/PowerCourses";
import StoryMission from "../components/About_us/StoryMission";
import MoreSection from "../components/About_us/MoreSection";
const AboutPage = () => {
  return (
     <Layout style={{ background: "#fff" }}>
      <HeaderBar />
          <HeroSection />
      <PowerCourses />
     
      <StoryMission />
    <MoreSection/>
        <FooterBar />
    
    </Layout>
  
  );
};

export default AboutPage;
