import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./AboutPage.css";
import Navbar from "./components/navbar/Navbar";
import Introduction from "./components/introduction/Introduction";
import Publications from "./components/publications/Publications";
import News from "./components/news/News";
import Repositories from "./components/repositories/Respositories";

function AboutPage() {
  return (
    <>
      <Navbar />
      <Introduction />
      <Publications isMain={true} />
      <News isMain={true} />
      <Repositories isMain={true} />
    </>
  );
}

export default AboutPage;
