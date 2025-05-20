import mongoose from "mongoose";

const aboutSchema = new mongoose.Schema({
  first_name: String,
  last_name: String,
  linkedIn: String,
  github: String,
  email: String,
  qualification: String,
  summary: String,
  profilePic: String,
});

export const About = mongoose.model("About", aboutSchema);
