
import { Layout } from "antd";
import "aos/dist/aos.css";

import HeaderBar from "../components/common/HeaderBar";

import FooterBar from "../components/common/FooterBar";
import Terms from "../components/TermsOfUse";

const { Content } = Layout;

const TermsOfUse = () => {


  return (
    <Layout style={{ background: "#fff" }}>
      <HeaderBar />

      <Content style={{ marginTop: 0 }}>
          <Terms/>
        <FooterBar />
      </Content>
    </Layout>
  );
};

export default TermsOfUse;
