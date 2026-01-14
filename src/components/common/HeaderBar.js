import React, { useState, useEffect } from "react";
import { Layout, Menu, Drawer, Button, Row, Col, message } from "antd";
import { MenuOutlined } from "@ant-design/icons";
import { useNavigate, useLocation } from "react-router-dom";
import logo from "../../assets/logo.png";

const { Header } = Layout;

const HeaderBar = () => {
  const [open, setOpen] = useState(false);
  const [user, setUser] = useState(null);
  const navigate = useNavigate();
  const location = useLocation();

  // Load user
  useEffect(() => {
    const storedUser = localStorage.getItem("userData");
    setUser(storedUser ? JSON.parse(storedUser) : null);
  }, []);

  // Active menu
  const getActiveKey = () => {
    const path = location.pathname;
    if (path.startsWith("/for-schools")) return "custom-solutions";
    if (path.startsWith("/edu-concierge")) return "edu-concierge";
    if (path.startsWith("/spark")) return "spark";
    if (path.startsWith("/about")) return "about";
    if (path.startsWith("/contact")) return "contact";
    return "home";
  };

  const isHomePage = location.pathname === "/";

  // Logout
  const handleLogout = () => {
    localStorage.clear();
    setUser(null);
    message.success("Logged out successfully");
    navigate("/");
  };

  // Menu items
  const menuItems = [
    { key: "home", label: "Home", onClick: () => navigate("/") },
    {
      key: "solutions",
      label: "Solutions",
      children: [
        {
          key: "edu-concierge",
          label: "Edu Concierge",
          onClick: () => navigate("/edu-concierge"),
        },
        { key: "spark", label: "Spark" }, // Add navigation if needed
      ],
    },
    {
      key: "plans",
      label: "Plans",
      children: [
       {
  key: "edu-plans",
  label: "Edu Concierge Plans",
  onClick: () => {
    const element = document.getElementById("plans");
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  },
},

        { key: "spark-plans", label: "Spark Plans" }, // Add navigation if needed
      ],
    },
     { key: "about-us", label: "About Us", onClick: () => navigate("/about-us") },
    { key: "contact", label: "Contact Us", onClick: () => navigate("/contact-us") },
   
  ];

  return (
    <Header
      style={{
        background: isHomePage ? "#F9FAFABF" : "#fff",
        color: "#000",
        padding: "0 40px",
        position: isHomePage ? "fixed" : "sticky",
        top: 0,
        width: "100%",
        zIndex: 100,
        boxShadow: isHomePage ? "none" : "0 1px 4px rgba(0,0,0,0.1)",
        transition: "all 0.3s ease",
      }}
    >
      <Row align="middle" justify="space-between">
        {/* Logo */}
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
              color: isHomePage ? "#fff" : "#000",
              display: "flex",
              justifyContent: "center",
            }}
          />
        </Col>

        {/* Desktop Buttons */}
        <Col xs={0} lg={6} style={{ textAlign: "right" }}>
          {user ? (
            <Button type="primary" onClick={() => navigate("/login")} >
              Logout
            </Button>
          ) : (
            <>
              <Button
                style={{ backgroundColor: "#D3D3D3", marginRight: 10 }}
               onClick={() => navigate("/signup")}
              >
                Sign Up
              </Button>
              <Button type="primary" onClick={() => navigate("/login")}>
                Login
              </Button>
            </>
          )}
        </Col>

        {/* Mobile Hamburger */}
        <Col xs={12} lg={0} style={{ textAlign: "right" }}>
          <Button
            type="text"
            icon={
              <MenuOutlined
                style={{ fontSize: 22, color: isHomePage ? "#fff" : "#000" }}
              />
            }
            onClick={() => setOpen(true)}
          />
        </Col>
      </Row>

      {/* Mobile Drawer */}
      <Drawer
        placement="right"
        width={280}
        open={open}
        onClose={() => setOpen(false)}
        bodyStyle={{ padding: 0 }}
      >
        <Menu
          mode="vertical"
          selectedKeys={[getActiveKey()]}
          items={menuItems}
          onClick={() => setOpen(false)}
          style={{ borderRight: 0 }}
        />
        <div style={{ marginTop: 24, }}>
          {user ? (
            <Button block type="primary">
              Logout
            </Button>
          ) : (
            <>
              <Button
                block
                type="primary"
               
              >
                Login
              </Button>
              <Button
                block
                style={{ marginTop: 10 }}
              
              >
                Sign Up
              </Button>
            </>
          )}
        </div>
      </Drawer>
    </Header>
  );
};

export default HeaderBar;
