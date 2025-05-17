import Navbar from "./components/navbar/Navbar";
import "./ResumePage.css";
import { routeAppend } from "./RouteAppend";
const ResumePage = () => {
  return (
    <div className="resume-container">
      <iframe
        src={routeAppend + "/resume.pdf"}
        className="resume-frame"
        frameborder="0"
      ></iframe>
    </div>
  );
};
export default ResumePage;
