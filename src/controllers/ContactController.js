import { ContactService } from "../service/ContactService.js";

const contactService = new ContactService();

export class ContactController {
  getAllContacts = async (req, res) => {
    try {
      const allContacts = await contactService.getAllContacts();
      res.status(200).json(allContacts);
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  };

  getContactById = async (req, res) => {
    try {
      //
      const contact = await contactService.getContacById(req.params.id);
      res.status(200).json(contact);
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  };

  createContact = async (req, res) => {
    try {
      // Extracts the data from the rquest (name, phone, email)
      const { name, phone, email } = req.body;

      //Calls the service to process the data and create the contact
      const newContact = await contactService.createContact(name, phone, email);
      //Return the status 200 (ok)
      res
        .status(200)
        .json({ message: "Contact successfully created", newContact });
    } catch (error) {
      // If there's an error, returns status 400 (Bad Request) with the error message
      res.status(400).json({ error: error.message });
    }
  };

  updateContact = async (req, res) => {
    try {
      const { name, phone, email } = req.body;

      const newContact = await contactService.updateContact(
        req.params.id,
        name,
        phone,
        email
      );
      res
        .status(200)
        .json({ message: "Contact successfully update", newContact });
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  };

  deleteContact = async (req, res) => {
    try {
      await contactService.deleteContact(req.params.id);
      res.status(200).json({ message: "Contact successfully delete" });
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  };
}
