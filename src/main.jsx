import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import AboutPage from "./AboutPage.jsx";
import PublicationsPage from "./PublicationsPage.jsx";
import "./index.css";
import { ThemeProvider } from "./ThemeContextProvider.jsx";
ReactDOM.createRoot(document.getElementById("root")).render(
  <ThemeProvider>
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<AboutPage />} />
      <Route path="/publications" element={<PublicationsPage />} />
    </Routes>
  </BrowserRouter>
  </ThemeProvider>
);
