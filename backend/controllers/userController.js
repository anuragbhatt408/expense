import { User } from "../modals/userModal.js";
import * as bcrypt from "bcrypt";
import { setUser } from "../services/auth.js";

const saltRounds = 5;

export const getAllUsers = async (req, res) => {
  try {
    const user = await User.find();
    res.json({
      status: 200,
      message: "All users",
      users: user,
    });
  } catch {
    console.error("Error creating user:", error);
    res.status(500).json({
      message: "Error fetching user",
    });
  }
};

export const createUser = async (req, res) => {
  try {
    const { name, email, password } = req.body;
    const hashedPassword = await bcrypt.hash(password, saltRounds);
    const user = await User.create({
      name,
      email,
      password: hashedPassword,
    });

    res.status(201).json({
      message: "user created successfully",
    });
  } catch (error) {
    console.error("Error creating user:", error);
    res.status(500).json({
      message: "Error creating user",
    });
  }
};

export const login = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email });
    if (!user) {
      console.log("error user is not there");
      res.status(500).json({
        message: "Error While Getting User",
      });
      return;
    }

    if (!(await bcrypt.compare(password, user.password))) {
      console.log("error password is not there");
      res.status(500).json({
        message: "Error While Getting User",
      });
      return;
    }
    const token = await setUser(user);
    res.cookie("token", token, {
      maxAge: 3600000, // Cookie expiry time in milliseconds (1 hour)
    });
    const returningUser = await User.findOne({ email }).select("-password");
    res.status(200).json({
      user: returningUser,
    });
  } catch (error) {
    console.log("error", error);
    res.status(500).json({
      message: "Error While Getting User",
    });
  }
};
