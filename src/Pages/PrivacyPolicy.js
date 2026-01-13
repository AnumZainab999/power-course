
import { Layout } from "antd";
import "aos/dist/aos.css";

import HeaderBar from "../components/common/HeaderBar";

import FooterBar from "../components/common/FooterBar";
import Cookie from "../components/Cookie";
import Privacy from "../components/Privacy";


const { Content } = Layout;

const PrivacyPolicy = () => {


  return (
    <Layout style={{ background: "#fff" }}>
      <HeaderBar />

      <Content style={{ marginTop: 0 }}>
        <Privacy/>
        <FooterBar />
      </Content>
    </Layout>
  );
};

export default PrivacyPolicy;
