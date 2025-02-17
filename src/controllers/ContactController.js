import { ContactService } from "../service/ContactService.js";

const contactService = new ContactService();

export class ContactController {
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
}
