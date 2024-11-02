import mongoose from "mongoose";
import { Schema } from "mongoose";

const userSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    index: { unique: true },
    required: true,
  },
  updated: { type: Date, default: Date.now() },
  password: {
    type: String,
    minlength: [6, "Password is too weak"],
    required: true,
  },
});

export const User = mongoose.model("User", userSchema);
