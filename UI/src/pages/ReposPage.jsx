import Navbar from "../components/navbar/Navbar";
import Repositories from "../components/repositories/Respositories";
import "./ReposPage.css";
const ReposPage = () => {
  return (
    <>
      <Navbar isAdmin={false} />{" "}
      <div className="container">
        <Repositories isMain={false} />
      </div>
    </>
  );
};

export default ReposPage;
