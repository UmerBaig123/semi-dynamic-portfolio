import express from "express";
import {
  createPublication,
  getPublications,
  getPublicationById,
  updatePublication,
  deletePublication,
} from "../controllers/PublicationsController.js";

const router = express.Router();

router.post("/", createPublication);
router.get("/", getPublications);
router.get("/:id", getPublicationById);
router.put("/:id", updatePublication);
router.delete("/:id", deletePublication);

export default router;
