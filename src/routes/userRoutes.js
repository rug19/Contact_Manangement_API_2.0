import UserController from "../controllers/UserController.js";
import express from "express";



const userController = new UserController();

const router = express.Router();

router.post("/register", userController.register);


export default router;