import mongoose from "mongoose";

const ConnectDB = async () => {
  try {
    await mongoose.connect(process.env.DB_URL);
    console.log("connected");
  } catch {
    console.log("error");
  }
};

export default ConnectDB;
