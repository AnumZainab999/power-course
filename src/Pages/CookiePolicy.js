
import { Layout } from "antd";
import "aos/dist/aos.css";

import HeaderBar from "../components/common/HeaderBar";

import FooterBar from "../components/common/FooterBar";
import Cookie from "../components/Cookie";


const { Content } = Layout;

const CookiePolicy = () => {


  return (
    <Layout style={{ background: "#fff" }}>
      <HeaderBar />

      <Content style={{ marginTop: 0 }}>
          <Cookie/>
        <FooterBar />
      </Content>
    </Layout>
  );
};

export default CookiePolicy;
