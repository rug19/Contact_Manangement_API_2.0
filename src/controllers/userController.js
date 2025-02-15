import { UserService } from "../service/UserService.js";

const userService = new UserService();

export default class UserController {
  register = async (req, res) => {
    try {
      const { name, email, password } = req.body;
      console.log(req.body);
      const user = await userService.userRegister(name, email, password);

      res.status(200).json({ message: "Usuário cadastrado com sucesso", user });
    } catch (error) {
      if (error.message.includes("Email já cadastrado")) {
        return res.status(400).json({ error: error.message });
      }
      res.status(500).json({ error: "Erro ao registrar o usuário" });
    }
  };
}
