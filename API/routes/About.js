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
router.get("/:id", getAboutById);
router.put("/:id", updateAbout);
router.delete("/:id", deleteAbout);

export default router;
