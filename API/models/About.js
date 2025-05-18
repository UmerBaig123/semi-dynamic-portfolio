import mongoose from "mongoose";

const aboutSchema = new mongoose.Schema({
  fullName: String,
  linkedIn: String,
  githubUrl: String,
  email: String,
  qualification: String,
  bio: String,
  profilePic: String,
});

export const About = mongoose.model("About", aboutSchema);
