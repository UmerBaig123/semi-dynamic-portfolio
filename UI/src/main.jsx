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
function App() {
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

ReactDOM.createRoot(document.getElementById("root")).render(
  <ThemeProvider>
    <HashRouter>
      <Navbar />
      <App />
    </HashRouter>
  </ThemeProvider>
);
