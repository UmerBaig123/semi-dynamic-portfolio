import { Router } from "express";
import { register, login, protectedRoute } from "../controllers/Auth.js";
import { authenticateToken } from "../middlewares/Auth.js";

const router = Router();

router.post("/register", register);
router.post("/login", login);
router.get("/protected", authenticateToken, protectedRoute);

export default router;
