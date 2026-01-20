import React, { useState } from "react";
import { Button, Typography } from "antd";
import FAQStyleStudyChatbot from "../../Pages/StudyPlannerChatbot";

const { Paragraph } = Typography;

const TopBanner = () => {
  const [openChat, setOpenChat] = useState(false);

  return (
    <>
      <div style={styles.banner}>
        <Paragraph style={styles.text}>
          We offer full fee-waivers for families experiencing financial difficulty.
          <br />
          child’s learning support will be fully covered and your privacy protected.
        </Paragraph>

        <Button
          type="primary"
          ghost
          onClick={() => setOpenChat(true)}
          style={styles.button}
        >
          Apply Now
        </Button>
      </div>

      {/* ✅ RIGHT BOTTOM FIXED CHATBOT */}
      {openChat && (
        <div style={styles.chatWrapper}>
          <FAQStyleStudyChatbot onClose={() => setOpenChat(false)} />
        </div>
      )}
    </>
  );
};

const styles = {
  banner: {
    margin: "30px 0",
    background: "#B1DEFB",
    padding: "60px",
    textAlign: "center",
  },
  text: {
    fontWeight: 400,
    maxWidth: 800,
    margin: "0 auto 10px",
    color: "black",
  },
  button: {
    width: "110px",
    color: "black",
    border: "1px solid black",
    borderRadius: "20px",
    marginTop: "20px",
  },

  /* 🔥 IMPORTANT */
  chatWrapper: {
    position: "fixed",
    bottom: "20px",
    right: "20px",
    zIndex: 9999,
  },
};

export default TopBanner;
