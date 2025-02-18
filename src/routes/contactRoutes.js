import { ContactController } from "../controllers/ContactController.js";
import authenticate from "../middlewares/authMiddleware.js";
import { contactValidation } from "../middlewares/contactValidation.js";
import {contactUpdateValidation} from "../middlewares/contactUpdateValidation.js"
import express from "express";

const contactController = new ContactController();
const router = express.Router();

router.post("/contacts", authenticate, contactValidation, contactController.createContact);
router.get("/contacts", authenticate,   contactController.getAllContacts);
router.get("/contacts/:id", authenticate,  contactController.getContactById);
router.put("/contacts/:id", authenticate, contactUpdateValidation, contactController.updateContact);
router.delete("/contacts/:id", authenticate, contactController.deleteContact);

export default router;


