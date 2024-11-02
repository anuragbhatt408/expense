import { Router } from "express";
import { isAuthenticated } from "../middleware/authMiddleware.js";
import { createExpense } from "../controllers/expenseController.js";

const router = Router();

router.post("/", isAuthenticated, createExpense);

export default router;
