import prisma from "../config/prisma.js";

class ContactRepositoy {
  constructor() {
    this.model = prisma.contact;
  }

  async getAllContacs() {
    return await this.model.findMany();
  }

  async getById(id) {
    return await this.model.findUnique({ where: { id } });
  }

  async createContact(data) {
    // Contais the datas to isert into the databae
    return await this.model.create({ data }); //Insert the datas as a object
  }

  async updateContact(id, data) {
    return await this.model.update({ where: { id }, data });
  }

  async deleteContact(id) {
    return this.model.delete({ where: { id } });
  }
}

export default ContactRepositoy;
