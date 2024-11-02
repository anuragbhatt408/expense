import jwt from "jsonwebtoken";

export const isAuthenticated = (req, res, next) => {
  try {
    const token = req.header("Authorization")?.split(" ")[1];
    const user = jwt.verify(token, process.env.JWT_SECRET);
    next();
  } catch (error) {
    console.log("error");
    res.status(401).json({ ErrorMessage: error });
  }
};
