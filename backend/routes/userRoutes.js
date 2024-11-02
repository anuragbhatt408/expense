import Router from "express";
import {
  createUser,
  getAllUsers,
  login,
} from "../controllers/userController.js";
import { isAuthenticated } from "../middleware/authMiddleware.js";

const router = Router();

router.get("/", isAuthenticated, getAllUsers);
router.post("/login", login);

router.post("/", createUser);

export default router;
