import mongoose from "mongoose";

const newsSchema = new mongoose.Schema({
  title: { type: String, unique: true },
  description: String,
  pdfUrl: String,
  imgUrl: String,
  timeline: String,
});

export const News = mongoose.model("News", newsSchema);
