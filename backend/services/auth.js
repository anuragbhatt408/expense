import jwt from "jsonwebtoken";

export const setUser = (user) => {
  const { _id, name, email } = user;
  const payload = {
    _id,
    name,
    email,
  };
  return jwt.sign(
    {
      payload,
    },
    process.env.JWT_SECRET,
    { expiresIn: "1h" }
  );
};
