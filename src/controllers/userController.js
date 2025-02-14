import UserRepository from "../repository/userRepository";
import { UserService } from "../service/UserService";

export default class UserController {
  register = async (req, res) => {
    try {
      const { name, email, password } = req.body;
      const user = await UserService.userRegister(name, email, password);
      res.status(200).json({ message: "Usuário cadastrado com sucesso", user });
    } catch (error) {
      res.status(400).json({ error: "Erro ao cadastrar usuário" });
    }
  };
}


