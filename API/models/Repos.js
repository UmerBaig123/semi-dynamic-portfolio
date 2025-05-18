import mongoose from "mongoose";

const repoSchema = new mongoose.Schema({
  repoName: { type: String, unique: true },
});

export const Repo = mongoose.model("Repos", repoSchema);
