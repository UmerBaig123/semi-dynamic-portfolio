import React from "react";
import Navbar from "../components/navbar/Navbar";
import EditPublications from "../components/publications/EditPublications";

const EditPublicationsPage = () => {
  return (
    <>
      <Navbar isAdmin={true} />
      <div className="container">
        <EditPublications isMain={false} />
      </div>
    </>
  );
};

export default EditPublicationsPage;
