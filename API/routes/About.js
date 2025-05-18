import express from "express";
import {
  createAbout,
  getAbouts,
  getAboutById,
  updateAbout,
  deleteAbout,
} from "../controllers/AboutController.js";

const router = express.Router();

router.post("/", createAbout);
router.get("/", getAbouts);
router.delete("/", deleteAbout);

export default router;
