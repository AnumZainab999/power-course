import React, { useState, useEffect } from "react";
import { Layout, Menu, Drawer, Button, Row, Col, message } from "antd";
import { MenuOutlined } from "@ant-design/icons";
import { useNavigate, useLocation } from "react-router-dom";
import logo from "../../assets/logo.png";
// Removed unnecessary Grid import since we are fixing layout logic
const { Header } = Layout;

const HeaderBar = () => {
  const [open, setOpen] = useState(false);
  const [user, setUser] = useState(null);
  const [openKeys, setOpenKeys] = useState([]);
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

  const onOpenChange = (keys) => {
    setOpenKeys(keys);
  };

  return (
    <Header
      style={{
        background: location.pathname === "/" ? "#F9FAFABF" : "#fff",
        color: "#000",
        padding: "0 40px",
        height: "70px",
        position: location.pathname === "/" ? "fixed" : "sticky",
        top: 0,
        width: "100%",
        zIndex: 100,
        boxShadow: location.pathname === "/" ? "none" : "0 1px 4px rgba(0,0,0,0.1)",
      }}
    >
      {/* LAYOUT FIX: 
         We use spans that add up to 24 for Desktop (lg).
         Logo (6) + Menu (12) + Buttons (6) = 24.
         This ensures the Menu is physically in the center of the screen.
      */}
      <Row align="middle" justify="space-between" style={{ height: "100%" }}>
        
        {/* LOGO COL - Span 6 */}
        <Col xs={12} lg={6} style={{ display: 'flex', alignItems: 'center' }}>
          <img
            src={logo}
            alt="Logo"
            style={{ height: 38, cursor: "pointer" }}
            onClick={() => navigate("/")}
          />
        </Col>

        {/* DESKTOP MENU - Span 12 (CENTERED) */}
        <Col xs={0} lg={12}>
          <Menu
            mode="horizontal"
            selectedKeys={[getActiveKey()]}
            triggerSubMenuAction="hover"
            items={menuItems}
            style={{
              borderBottom: "none",
              fontSize: 20,
              background: "transparent",
              display: "flex",
              justifyContent: "center", // This centers the items within the column
              width: "100%",            // Ensure menu takes full width of the column
              minWidth: 0,              // Prevents flex overflow issues
            }}
          />
        </Col>

        {/* DESKTOP BUTTONS - Span 6 (Align Right) */}
        <Col xs={0} lg={6} style={{ textAlign: "right" }}>
          {user ? (
            <Button type="primary" onClick={handleLogout}>Logout</Button>
          ) : (
            <>
              <Button style={{ marginRight: 10 }} onClick={() => navigate("/signup")}>Sign Up</Button>
              <Button type="primary" onClick={() => navigate("/login")}>Login</Button>
            </>
          )}
        </Col>

        {/* MOBILE HAMBURGER - Visible only on small screens */}
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
        <div style={{ marginTop: 24, padding: "0 20px" }}>
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