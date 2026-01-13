import HeaderBar from "../components/common/HeaderBar";
import { Layout } from "antd";
import ContactUs from "../components/ContactUs";
import FooterBar from "../components/common/FooterBar";
const ContactUsPage = () => {
  return (
     <Layout style={{ background: "#fff" }}>
      <HeaderBar />
         <ContactUs/>
        <FooterBar />
    
    </Layout>
  
  );
};

export default ContactUsPage;
