import Navbar from "./components/navbar/Navbar";
import "./ResumePage.css";
const ResumePage = () => {
  return (
    <div className="resume-container">
      <Navbar />
      <iframe
        src="/resume.pdf"
        className="resume-frame"
        frameborder="0"
      ></iframe>
    </div>
  );
};
export default ResumePage;
