import express from "express";
import {
  createRepo,
  getAllRepos,
  getRepoById,
  updateRepo,
  deleteRepo,
} from "../controllers/ReposController.js";

const router = express.Router();

router.post("/", createRepo);
router.get("/", getAllRepos);
router.get("/:id", getRepoById);
router.put("/:id", updateRepo);
router.delete("/:id", deleteRepo);

export default router;
