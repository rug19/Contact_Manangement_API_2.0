import prisma from "../config/prisma.js";

export default class UserRepository {
  constructor() {
    this.model = prisma.user;
  }

  async createUser(data) {
    return await this.model.create({ data });
  }

  async findUserByEmail(email) {
    return await this.model.findUnique({
      where: { email },
    });
  }
}
