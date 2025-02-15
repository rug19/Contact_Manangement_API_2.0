import UserRepository from "../repository/userRepository.js";

const userRepository = new UserRepository();

export class UserService {
  async userRegister(name, email, password) {
    try {
      //Verifica se o email já existe
      const existingEmail = await userRepository.findUserByEmail(email);

      if (existingEmail) {
        throw new Error("Email já cadastrado");
      }

      //Cria um novo usuario
      const user = await userRepository.createUser({ name, email, password });

      console.log("Usuário cadastrado com sucesso!");
      return user;
    } catch (error) {
      throw new Error(`Erro ao registrar usuário, ${error.message}`);
    }
  }
}
