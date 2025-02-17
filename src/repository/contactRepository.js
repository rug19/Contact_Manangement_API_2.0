import prisma from "../config/prisma.js";

class ContactRepositoy {
  constructor() {
    this.model = prisma.contact; 
  }

  async createContact(data) {// Contais the datas to isert into the databae 
    return await this.model.create({ data }); //Insert the datas as a object 
  }
}

export default ContactRepositoy;