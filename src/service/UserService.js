import UserRepository from "../repository/userRepository";

const userRepository = UserRepository();

export class UserService {
  async UserRegister(name, email, password) {
    try {
      //Verifica se o email já existe
      const existingEmail = await userRepository.findByEmail(email);
      if (existingEmail) {
        throw new Error("Email já cadastrado");
      }

      const user = await userRepository.createUser({ name, email, password });
      console.log("Usuário cadastrado com sucesso!", user);
    } catch (error) {
      throw new Error("Erro ao cadastrar o usuário");
    }
  }
}
