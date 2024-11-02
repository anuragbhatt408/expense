import mongoose, { Schema } from "mongoose";

const expenseSchema = new Schema({
  // [entairnment, study, lifestyle, food]
  expenseType: {
    type: String,
    required: true,
  },
  // [exact buy]
  category: {
    type: String,
  },
  amount: {
    type: Number,
    required: true,
  },
  createdBy: {
    type: String,
  },
});

export const Expense = mongoose.model("Expense", expenseSchema);
