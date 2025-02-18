import { ContactController } from "../controllers/ContactController.js";
import authenticate from "../middlewares/authMiddleware.js";
import { contactValidation } from "../middlewares/contactValidation.js";
import {contactUpdateValidation} from "../middlewares/contactUpdateValidation.js"
import express from "express";

const contactController = new ContactController();
const router = express.Router();

router.post("/contacts", contactValidation, contactController.createContact);
router.get("/contacts",   contactController.getAllContacts);
router.get("/contacts/:id",  contactController.getContactById);
router.put("/contacts/:id", contactUpdateValidation, contactController.updateContact);
router.delete("/contacts/:id", contactController.deleteContact);

export default router;


