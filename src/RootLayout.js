// RootLayout.js
import React, { useEffect } from "react";
import { Outlet, useLocation } from "react-router-dom";

export default function RootLayout() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" }); // smooth scroll
  }, [pathname]);

  return <Outlet />; // renders current route
}
