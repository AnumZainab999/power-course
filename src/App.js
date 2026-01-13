import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "antd/dist/reset.css";
import "./App.css";

import LandingPage from "./Pages/LandingPage";
import Home from "./Pages/Edu_Conceirge";
import AboutEduPage from "./Pages/About_Edu";
import AboutSparkPage from "./Pages/About_Spark";
import AboutPage from "./Pages/AboutPage";
import ContactUsPage from "./Pages/ContactUs";
import RootLayout from "./RootLayout"; 
import TermsOfUse from "./Pages/TermsOfUse";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />, 
    children: [
      { path: "/", element: <LandingPage /> },
      { path: "/edu-concierge", element: <Home /> },
      { path: "/about-edu-concierge", element: <AboutEduPage /> },
      { path: "/about-spark", element: <AboutSparkPage /> },
      { path: "/about-us", element: <AboutPage /> },
      { path: "/contact-us", element: <ContactUsPage /> },
      { path: "/terms", element: <TermsOfUse /> },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
