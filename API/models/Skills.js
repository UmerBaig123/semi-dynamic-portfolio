import mongoose from "mongoose";

const skillSchema = new mongoose.Schema({
  skillName: { type: String, unique: true },
  progress: { type: Number, unique: true },
});

export const Skills = mongoose.model("Skills", skillSchema);
