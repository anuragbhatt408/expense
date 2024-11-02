import { Expense } from "../modals/expenseModal.js";

export const createExpense = async (req, res) => {
  try {
    const { expenseType, category, amount } = req.body;
    const newExpense = await Expense.create({
      expenseType,
      category,
      amount,
      createdBy: req.user_id,
    });
    res.status(201).json({
      message: "Expense Created Successfully",
    });
  } catch (error) {
    res.status(500).json({
      error,
      message: "Expense Creation Failed",
    });
  }
};
