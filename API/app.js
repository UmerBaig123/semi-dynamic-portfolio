import express from "express";
import bodyParser from "body-parser";
import authRoutes from "./routes/Auth.js";
import aboutRoutes from "./routes/About.js";
import skillRoutes from "./routes/Skills.js";
import teachingRoutes from "./routes/Teachings.js";
import resumeRoutes from "./routes/Resume.js";
import cors from "cors";
const app = express();
app.use(bodyParser.json());
app.use(cors());
app.use("/api", authRoutes); // e.g. /api/register
app.use("/api/about", aboutRoutes);
app.use("/api/resume", resumeRoutes);
app.use("/api/skills", skillRoutes);
app.use("/api/teachings", teachingRoutes);
export default app;
