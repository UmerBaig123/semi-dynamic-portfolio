import React from "react";
import Navbar from "./components/navbar/Navbar";
import Publications from "./components/publications/Publications";

const PublicationsPage = () => {
  return (
    <>
      <Navbar />
      <div className="container">
        <Publications isMain={false} />
      </div>
    </>
  );
};

export default PublicationsPage;
