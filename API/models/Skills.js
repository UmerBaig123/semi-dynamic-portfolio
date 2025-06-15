import mongoose from "mongoose";

const skillSchema = new mongoose.Schema({
  skill_name: { type: String, unique: true },
  skill_progress: { type: Number, default: 1 },
});

export const Skills = mongoose.model("Skills", skillSchema);
