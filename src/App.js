import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "antd/dist/reset.css";
import "./App.css";
import SignupPage from "./Pages/SignUp_Page";
import LoginPage from "./Pages/LoginPage";
import ForgotPasswordPage from "./Pages/ForgotPasswordPage";
import SignupCodePage from "./Pages/SignupCodePage";
import GoogleLogin from "./Pages/GoogleLogin";
import GoogleSignup from "./Pages/GoogleSignup";
import ForgetPasswordPage from "./Pages/ForgetPasswordPage";
import LandingPage from "./Pages/LandingPage";
import Home from "./Pages/Edu_Conceirge";
import AboutEduPage from "./Pages/About_Edu";
import AboutSparkPage from "./Pages/About_Spark";
import AboutPage from "./Pages/AboutPage";
import ContactUsPage from "./Pages/ContactUs";
import RootLayout from "./RootLayout"; 
import TermsOfUse from "./Pages/TermsOfUse";
import CookiePolicy from "./Pages/CookiePolicy";
import PrivacyPolicy from "./Pages/PrivacyPolicy";
import HelpPage from "./Pages/HelpPage";
import GetInvolved from "./Pages/GetInvolved";

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
      { path: "/cookie", element: <CookiePolicy /> },
         { path: "/help", element: <HelpPage /> },
         { path: "/involve", element: <GetInvolved/> },
         {
    path: "/signup",
    element: <SignupPage />,
  },
  {
    path: "/login",
    element: <LoginPage />,
  },
  {
    path: "/google-login",
    element: <GoogleLogin />,
  },
  {
    path: "/google-signup",
    element: <GoogleSignup />,
  },
  {
    path: "/forgot-password",
    element: <ForgotPasswordPage />,
  },
  {
    path: "/forget-password",
    element: <ForgetPasswordPage />,
  },{
    path: "/signup-code",
    element: <SignupCodePage />,
  },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
