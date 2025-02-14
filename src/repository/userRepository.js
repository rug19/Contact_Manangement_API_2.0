import prisma from "../config/prisma";

class UserRepository {
  constructor() {
    this.model = prisma.user;
  }

  //Register a user
  async createUser(data) {
    return await this.model.create({data});
  }

  //Login a user
  async findUserByEmail(email) {
    return await this.model.findUnique({ where: { email } });
  }
}

export default UserRepository;
