import mongoose from "mongoose";

const publicationsSchema = new mongoose.Schema({
  title: { type: String, unique: true },
  description: String,
  pdfUrl: String,
  imgUrl: String,
  timeline: String,
});

export const Publications = mongoose.model("Publications", publicationsSchema);
