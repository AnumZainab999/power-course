import { Image } from "antd";
import hero from "../../assets/about-hero.png";
const HeroSection = () => {
  return (
    <Image
      preview={false}
      width="100%"
      height="420px"
      style={{ objectFit: "cover" }}
      src={hero}
    />
  );
};

export default HeroSection;
