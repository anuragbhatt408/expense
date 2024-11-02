import express from "express";
import dotenv from "dotenv";
import DefaultRouter from "./routes/defaultRoute.js";
import UserRouter from "./routes/userRoutes.js";
import ConnectDB from "./db/db.js";
dotenv.config();

const PORT = process.env.PORT;

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

ConnectDB();

app.use("/", DefaultRouter);

app.use("/users", UserRouter);

app.listen(PORT, () => {
  console.log(`server is running on port -> PORT -> http://localhost:${PORT}`);
});
