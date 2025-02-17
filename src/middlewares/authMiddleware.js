import jwt from "jsonwebtoken";
import dotenv from "dotenv";

dotenv.config();

const authenticate = (req, res, next) => {
  const token = req.header("Authorization")?.replace("Bearer ", ""); 

  if (!token) {
    return res.status(401).json({ error: "Acess denied. Token não fornecido." });
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.userId = decoded.id;
    next();
  } catch (error) {
    res.status(400).json({ error: "Token invalid." });
  }
};

export default authenticate;