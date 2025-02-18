import { ContactService } from "../service/ContactService.js";
import { validationResult } from "express-validator";

const contactService = new ContactService();

export class ContactController {
  getAllContacts = async (req, res) => {
    try {
      const allContacts = await contactService.getAllContacts();
      return res.status(200).json(allContacts);
    } catch (error) {
      return res.status(400).json({ error: error.message });
    }
  };

  getContactById = async (req, res) => {
    try {
      //
      const contact = await contactService.getContacById(req.params.id);
      return res.status(200).json(contact);
    } catch (error) {
      return res.status(400).json({ error: error.message });
    }
  };

  createContact = async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() }); //Return the errors
    }
    try {
      // Extracts the data from the rquest (name, phone, email)
      const { name, phone, email } = req.body;

      //Calls the service to process the data and create the contact
      const newContact = await contactService.createContact(name, phone, email);
      //Return the status 200 (ok)
      return res
        .status(200)
        .json({ message: "Contact successfully created", newContact });
    } catch (error) {
      // If there's an error, returns status 400 (Bad Request) with the error message
      return res.status(400).json({ error: error.message });
    }
  };

  updateContact = async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    try {
      const { name, phone, email } = req.body;

      const newContact = await contactService.updateContact(
        req.params.id,
        name,
        phone,
        email
      );
      return res
        .status(200)
        .json({ message: "Contact successfully update", newContact });
    } catch (error) {
      return res.status(400).json({ error: error.message });
    }
  };

  deleteContact = async (req, res) => {
    try {
      await contactService.deleteContact(req.params.id);
      return res.status(200).json({ message: "Contact successfully delete" });
    } catch (error) {
      return res.status(400).json({ error: error.message });
    }
  };
}
