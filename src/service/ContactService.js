import ContactRepositoy from "../repository/contactRepository.js";

const contactRepository = new ContactRepositoy();

export class ContactService {
  // Method to receive the data from the Contact Controller and process it
  async createContact(name, phone, email) {
    try {
      // Calls the contactRepository to insert the data into the database
      const newContact = await contactRepository.createContact({
        name,
        phone,
        email,
      });
      console.log("Contact successfully created", newContact);
      return newContact;
    } catch (error) {
      throw new Error(`Error creating a new contact ${error.message}`);
    }
  }
}
