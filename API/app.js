import express from "express";
import bodyParser from "body-parser";
import authRoutes from "./routes/Auth.js";

const app = express();
app.use(bodyParser.json());

app.use("/api", authRoutes); // e.g. /api/register

export default app;
