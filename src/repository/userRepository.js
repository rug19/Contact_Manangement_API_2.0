import prisma from "../config/prisma.js";

export default class UserRepository {
  constructor() {
    this.model = prisma.user;
  }

  //Register a user
  async createUser(data) {
    return await this.model.create({ data });
  }

  //Login a user
  async findUserByEmail(email) {
    return await this.model.findUnique({
      where: { email },
      select: { id: true, email: true },
    });
  }
}
