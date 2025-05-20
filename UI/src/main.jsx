import React from "react";
import ReactDOM from "react-dom/client";
import { Routes, Route, HashRouter } from "react-router-dom";

import AboutPage from "./pages/AboutPage.jsx";
import PublicationsPage from "./pages/PublicationsPage.jsx";
import "./index.css";
import ResumePage from "./pages/ResumePage.jsx";
import TeachingsPage from "./pages/TeachingsPage.jsx";
import ReposPage from "./pages/ReposPage.jsx";
import { ThemeProvider } from "./context/ThemeContextProvider.jsx";
import ViewNews from "./pages/ViewNews.jsx";
import ContactPage from "./pages/ContactPage.jsx";
import Navbar from "./components/navbar/Navbar.jsx";
import LoginPage from "./pages/LoginPage.jsx";
import RegisterPage from "./pages/RegisterPage.jsx";
import { AuthProvider } from "./context/AuthContext.jsx";
import SecuredRoute from "./components/securedRoute/SecuredRoute.jsx";
import AboutEdit from "./pages/AboutEdit.jsx";
function PublicRoutes() {
  return (
    <Routes>
      <Route path="/" element={<AboutPage />} />
      <Route path="/publications" element={<PublicationsPage />} />
      <Route path="/resume" element={<ResumePage />} />
      <Route path="/teachings" element={<TeachingsPage />} />
      <Route path="/repositories" element={<ReposPage />} />
      <Route path="/viewNews/:news_id" element={<ViewNews />} />
      <Route path="/contact" element={<ContactPage />} />
    </Routes>
  );
}
function PrivateRoutes() {
  return (
    <>
      <Routes>
        <Route element={<SecuredRoute />}>
          <Route path="/admin" element={<AboutEdit />} />
          <Route path="/admin/about" element={<AboutPage />} />
          <Route path="/admin/repositories" element={<ReposPage />} />
          <Route path="/admin/teachings" element={<TeachingsPage />} />
          <Route path="/admin/publications" element={<PublicationsPage />} />
          <Route path="/admin/resume" element={<ResumePage />} />
          <Route path="/admin/viewNews/:news_id" element={<ViewNews />} />
        </Route>
      </Routes>
    </>
  );
}
function AuthRoutes() {
  return (
    <Routes>
      <Route path="/login" element={<LoginPage />} />
      <Route path="/register" element={<RegisterPage />} />
    </Routes>
  );
}
ReactDOM.createRoot(document.getElementById("root")).render(
  <ThemeProvider>
    <AuthProvider>
      <HashRouter>
        <PublicRoutes />
        <PrivateRoutes />
        <AuthRoutes />
      </HashRouter>
    </AuthProvider>
  </ThemeProvider>
);
