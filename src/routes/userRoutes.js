import UserController from "../controllers/UserController.js";
import express from "express";
import { userValidation } from "../middlewares/userValidation.js";

const userController = new UserController();

const router = express.Router();

router.post("/register", userValidation, userController.register);
router.post("/login", userController.login);

export default router;
