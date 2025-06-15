import fs from "fs";
import path from "path";
// Controller function to create or edit resume
export const uploadResume = async (req, res) => {
  try {
    if (!req.file) {
      return res.status(400).json({ message: "No file uploaded" });
    }
    // Ensure the uploaded file is a PDF
    if (req.file.mimetype !== "application/pdf") {
      return res.status(400).json({ message: "Only PDF files are allowed" });
    }

    const resumePath = path.join(process.cwd(), "resume.pdf");

    // Write or replace the file
    fs.writeFileSync(resumePath, req.file.buffer);

    return res.status(200).json({ message: "Resume uploaded successfully" });
  } catch (error) {
    return res
      .status(500)
      .json({ message: "Error uploading resume", error: error.message });
  }
};

export const getResume = (req, res) => {
  const resumePath = path.join(process.cwd(), "resume.pdf");
  if (!fs.existsSync(resumePath)) {
    return res.status(404).json({ message: "Resume not found" });
  }
  res.setHeader("Content-Type", "application/pdf");
  res.sendFile(resumePath);
};
