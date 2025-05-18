import express from "express";
import bodyParser from "body-parser";
import authRoutes from "./routes/Auth.js";
import aboutRoutes from "./routes/About.js";
import cors from "cors";
const app = express();
app.use(bodyParser.json());
app.use(cors());
app.use("/api", authRoutes); // e.g. /api/register
app.use("/api/about", aboutRoutes);
export default app;
