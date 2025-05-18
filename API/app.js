import express from "express";
import bodyParser from "body-parser";
import authRoutes from "./routes/Auth.js";
import cors from "cors";
const app = express();
app.use(bodyParser.json());
app.use(cors());
app.use("/api", authRoutes); // e.g. /api/register

export default app;
