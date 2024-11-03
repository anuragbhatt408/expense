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

export const getExpenseById = async (req, res) => {
  try {
    const userId = await req.user_id;
    const AllExpensesOfUserId = await Expense.find({ createdBy: userId });
    res.status(201).json({
      message: "Expense Fetched Successfully",
      expenses: AllExpensesOfUserId,
    });
  } catch {
    res.status(500).json({
      error,
      message: "Expense Fetching Failed",
    });
  }
};
