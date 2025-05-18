import express from "express";
import {
  createTeaching,
  getAllTeachings,
  getTeachingById,
  updateTeaching,
  deleteTeaching,
} from "../controllers/TeachingsController.js";

const router = express.Router();

router.post("/", createTeaching);
router.get("/", getAllTeachings);
router.get("/:id", getTeachingById);
router.put("/:id", updateTeaching);
router.delete("/:id", deleteTeaching);

export default router;
