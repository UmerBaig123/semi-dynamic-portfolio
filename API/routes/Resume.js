import { uploadResume, getResume } from "../controllers/ResumeController.js";

import express from "express";
import multer from "multer";
const router = express.Router();
const storage = multer.memoryStorage();
const upload = multer({ storage: storage });
// Route to upload resume
router.post("/", upload.single("resume"), uploadResume);
// Route to get resume
router.get("/", getResume);

export default router;
