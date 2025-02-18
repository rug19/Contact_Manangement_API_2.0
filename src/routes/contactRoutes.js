import { ContactController } from "../controllers/ContactController.js";
import express from "express";

const contactController = new ContactController();
const router = express.Router();

router.post("/contacts", contactController.createContact);
router.get("/contacts", contactController.getAllContacts);
router.get("/contacts/:id", contactController.getContactById);
router.put("/contacts/:id", contactController.updateContact);
router.delete("/contacts/:id", contactController.deleteContact);

export default router;
