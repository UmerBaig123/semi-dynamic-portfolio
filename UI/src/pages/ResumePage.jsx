import Navbar from "../components/navbar/Navbar";
import "./ResumePage.css";
import { routeAppend } from "../context/RouteAppend";
const ResumePage = () => {
  return (
    <>
      <Navbar isAdmin={false} />
      <div className="resume-container">
        <iframe
          src={routeAppend + "/resume.pdf"}
          className="resume-frame"
          frameborder="0"
        ></iframe>
      </div>
    </>
  );
};
export default ResumePage;
