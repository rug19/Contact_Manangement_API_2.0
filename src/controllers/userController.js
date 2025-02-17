import { UserService } from "../service/UserService.js";
import { validationResult } from "express-validator";

const userService = new UserService();

export default class UserController {
  //Method to create a new user
  register = async (req, res) => {
    const error = validationResult(req);
    if (!error.isEmpty()) {
      console.log("Validation Error: ", error.array());

      return res.status(400).json({ errors: error.array() }); //Return the errors
    }
    try {
      const { name, email, password } = req.body;
      console.log(req.body);
      const user = await userService.userRegister(name, email, password);

      res.status(200).json({ message: "User successfully creates", user });
    } catch (error) {
      if (error.message.includes("Email already register")) {
        return res.status(400).json({ error: error.message });
      }
      res.status(500).json({ error: "Error registering the user" });
    }
  };

  login = async (req, res) => {
    const { email, password } = req.body;
    try {
      const result = await userService.userLogin(email, password); 
      res
        .status(200)
        .json({ message: "User successfully authticated", result });
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  };
}
