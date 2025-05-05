import React from "react";
import ReactDOM from "react-dom/client";
import { Routes, Route, HashRouter } from "react-router-dom";

import AboutPage from "./AboutPage.jsx";
import PublicationsPage from "./PublicationsPage.jsx";
import "./index.css";
import ResumePage from "./ResumePage.jsx";
import TeachingsPage from "./TeachingsPage.jsx";
import ReposPage from "./ReposPage.jsx";
import { ThemeProvider } from "./ThemeContextProvider.jsx";
import ViewNews from "./ViewNews.jsx";
import ContactPage from "./ContactPage.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <ThemeProvider>
    <HashRouter>
      <Routes>
        <Route path="/" element={<AboutPage />} />
        <Route path="/publications" element={<PublicationsPage />} />
        <Route path="/resume" element={<ResumePage />} />
        <Route path="/teachings" element={<TeachingsPage />} />
        <Route path="/repositories" element={<ReposPage />} />
        <Route path="/viewNews/:news_id" element={<ViewNews />} />
        <Route path="/contact" element={<ContactPage />} />
      </Routes>
    </HashRouter>
  </ThemeProvider>
);
