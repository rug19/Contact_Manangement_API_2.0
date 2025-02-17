import { ContactController } from "../controllers/ContactController.js";
import express from "express";

const contactController = new ContactController();
const router = express.Router();

router.post("/contacts", contactController.createContact);

export default router;

