import Navbar from "../components/navbar/Navbar";
import "./ResumePage.css";
import { uploadResume } from "../api/Resume";
import { useRef, useState } from "react";
import Alert from "../components/alert/Alert";
const EditResume = () => {
  const inputRef = useRef();
  const [success, setSuccess] = useState(false);
  const handleSubmit = async (e) => {
    e.preventDefault();
    const file = inputRef.current.files[0];
    if (file) {
      const response = await uploadResume(file);
      setSuccess(true);
    }
  };
  return (
    <>
      <Navbar isAdmin={false} />
      <div
        className="resume-container edit-resume"
        style={{ marginTop: "100px" }}
      >
        <form className="edit-resume-form" onSubmit={handleSubmit}>
          <input
            type="file"
            accept="application/pdf"
            className="file-input"
            ref={inputRef}
          />
          <button type="submit" className="upload-button">
            Upload
          </button>
        </form>
        <Alert
          type={"constructive"}
          message={"successfully submitted"}
          isOpen={success}
          setIsOpen={setSuccess}
        />
      </div>
    </>
  );
};
export default EditResume;
