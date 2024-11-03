import { Router } from "express";
import { isAuthenticated } from "../middleware/authMiddleware.js";
import {
  createExpense,
  getExpenseById,
} from "../controllers/expenseController.js";

const router = Router();

router.post("/", isAuthenticated, createExpense);

router.get("/", isAuthenticated, getExpenseById);

export default router;
