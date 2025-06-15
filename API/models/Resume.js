import mongoose from "mongoose";

const ResumeSchema = new mongoose.Schema({
  pdf_path: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model("Resume", ResumeSchema);
