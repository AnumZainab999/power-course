import React, { useState, useEffect } from "react";
import { Layout, Menu, Drawer, Button, Row, Col, message } from "antd";
import { MenuOutlined } from "@ant-design/icons";
import { useNavigate, useLocation } from "react-router-dom";
import logo from "../../assets/logo.png";

const { Header } = Layout;

const HeaderBar = () => {
  const [open, setOpen] = useState(false);
  const [user, setUser] = useState(null);
  const [openKeys, setOpenKeys] = useState([]); // Track submenu keys for mobile drawer
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const storedUser = localStorage.getItem("userData");
    setUser(storedUser ? JSON.parse(storedUser) : null);
  }, []);

  const getActiveKey = () => {
    const path = location.pathname;
    if (path.startsWith("/for-schools")) return "custom-solutions";
    if (path.startsWith("/edu-concierge")) return "edu-concierge";
    if (path.startsWith("/spark")) return "spark";
    if (path.startsWith("/about")) return "about";
    if (path.startsWith("/contact")) return "contact";
    return "home";
  };

  const handleLogout = () => {
    localStorage.clear();
    setUser(null);
    message.success("Logged out successfully");
    navigate("/");
  };

  const menuItems = [
    { key: "home", label: "Home", onClick: () => navigate("/") },
    {
      key: "solutions",
      label: "Solutions",
      children: [
        { key: "edu-concierge", label: "Edu Concierge", onClick: () => navigate("/edu-concierge") },
        { key: "spark", label: "Spark" },
      ],
    },
    {
      key: "plans",
      label: "Plans",
      children: [
        { key: "edu-plans", label: "Edu Concierge Plans", onClick: () => navigate("/edu-concierge", { state: { scrollToPlans: true } }) },
        { key: "spark-plans", label: "Spark Plans" },
      ],
    },
    { key: "about-us", label: "About Us", onClick: () => navigate("/about-us") },
    { key: "contact", label: "Contact Us", onClick: () => navigate("/contact-us") },
  ];

  // Mobile drawer open submenu handler
  const onOpenChange = (keys) => {
    setOpenKeys(keys); // Only one submenu open at a time
  };

  return (
    <Header
      style={{
        background: location.pathname === "/" ? "#F9FAFABF" : "#fff",
        color: "#000",
        padding: "0 40px",
        position: location.pathname === "/" ? "fixed" : "sticky",
        top: 0,
        width: "100%",
        zIndex: 100,
        boxShadow: location.pathname === "/" ? "none" : "0 1px 4px rgba(0,0,0,0.1)",
      }}
    >
      <Row align="middle" justify="space-between">
        <Col>
          <img
            src={logo}
            alt="Logo"
            style={{ height: 38, cursor: "pointer" }}
            onClick={() => navigate("/")}
          />
        </Col>

        {/* Desktop Menu */}
        <Col xs={0} lg={12}>
          <Menu
            mode="horizontal"
            selectedKeys={[getActiveKey()]}
            triggerSubMenuAction="hover"
            items={menuItems}
            style={{
              borderBottom: "none",
              background: "transparent",
              display: "flex",
              justifyContent: "center",
            }}
          />
        </Col>

        {/* Desktop Buttons */}
        <Col xs={0} lg={6} style={{ textAlign: "right" }}>
          {user ? (
            <Button type="primary" onClick={handleLogout}>Logout</Button>
          ) : (
            <>
              <Button style={{ marginRight: 10 }} onClick={() => navigate("/signup")}>Sign Up</Button>
              <Button onClick={() => navigate("/login")}>Login</Button>
            </>
          )}
        </Col>

        {/* Mobile Hamburger */}
        <Col xs={12} lg={0} style={{ textAlign: "right" }}>
          <Button type="text" icon={<MenuOutlined style={{ fontSize: 22 }} />} onClick={() => setOpen(true)} />
        </Col>
      </Row>

      {/* Mobile Drawer */}
      <Drawer placement="right" width={280} open={open} onClose={() => setOpen(false)} bodyStyle={{ padding: 0 }}>
        <Menu
          mode="inline"
          selectedKeys={[getActiveKey()]}
          openKeys={openKeys}
          onOpenChange={onOpenChange}
          items={menuItems}
          style={{ borderRight: 0 }}
        />
        <div style={{ marginTop: 24 }}>
          {user ? (
            <Button block type="primary" onClick={handleLogout}>Logout</Button>
          ) : (
            <>
              <Button block type="primary" onClick={() => navigate("/login")}>Login</Button>
              <Button block style={{ marginTop: 10 }} onClick={() => navigate("/signup")}>Sign Up</Button>
            </>
          )}
        </div>
      </Drawer>
    </Header>
  );
};

export default HeaderBar;
