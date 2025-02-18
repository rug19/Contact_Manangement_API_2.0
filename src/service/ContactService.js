import ContactRepositoy from "../repository/contactRepository.js";

const contactRepository = new ContactRepositoy();

export class ContactService {
  async getAllContacts() {
    try {
      const allContacts = await contactRepository.getAllContacs();
      return allContacts;
    } catch (error) {
      throw new Error(`Error retrieving all the contacts`);
    }
  }

  async getContacById(id) {
    try {
      const contact = await contactRepository.getById(id);
      if (!contact) {
        throw new Error("Contact not found");
      }
      return contact;
    } catch (error) {
      throw new Error(`Erro ao procurar o contato ${error.message}`);
    }
  }
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

  async updateContact(id, name, phone, email) {
    try {
      const contact = await contactRepository.getById(id);
      if (!contact) {
        throw new Error("Contact not found");
      }
      const contactUpdated = await contactRepository.updateContact(id, {
        name,
        phone,
        email,
      });

      console.log(contactUpdated);
      return contactUpdated;
    } catch (error) {
      throw new Error(`Error updating the contact ${error.message}`);
    }
  }

  async deleteContact(id) {
    try {
      const contact = await contactRepository.getById(id);
      if (!contact) {
        throw new Error("Contact not found");
      }

      await contactRepository.deleteContact(id);
      console.log("Contact successfully deleted");
    } catch (error) {
      throw new Error(`Error deleting the contact ${error.message}`);
    }
  }
}
