import mongoose from "mongoose";

const teachingsSchema = new mongoose.Schema({
  year: { type: Number },
  course: { type: String },
  title: { type: String },
  description: { type: String },
  instructor: { type: String },
  location: { type: String },
  time: { type: String },
});

export const Teachings = mongoose.model("Teachings", teachingsSchema);
