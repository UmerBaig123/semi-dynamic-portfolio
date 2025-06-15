import Navbar from "../components/navbar/Navbar";
import "./ResumePage.css";

const BASE_URL = import.meta.env.VITE_API_URL; // or process.env.REACT_APP_API_URL
const ResumePage = () => {
  return (
    <>
      <Navbar isAdmin={false} />
      <div className="resume-container">
        <iframe
          src={BASE_URL + "/resume"}
          className="resume-frame"
          frameborder="0"
        ></iframe>
      </div>
    </>
  );
};
export default ResumePage;
