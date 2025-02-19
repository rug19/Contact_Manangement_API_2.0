import UserRepository from "../repository/userRepository.js";
import bcrypt from "bcryptjs";
import dotenv from "dotenv";
import jwt from "jsonwebtoken";

dotenv.config();

const userRepository = new UserRepository();

export class UserService {
  async userRegister(name, email, password) {
    try {
      //Check if the email already exist
      const existingEmail = await userRepository.findUserByEmail(email);

      if (existingEmail) {
        throw new Error("Email already registered");
      }

      //Hashify the password before saving  to the database
      const salt = await bcrypt.genSalt(10);
      const hashededPassword = await bcrypt.hash(password, salt);

      //Create a new user
      const user = await userRepository.createUser({
        name,
        email,
        password: hashededPassword,
      });

      console.log("User successfully creates");
      return user;
    } catch (error) {
      throw new Error(`Error registering the user, ${error.message}`);
    }
  }

  async userLogin(email, password) {
    try {
      const user = await userRepository.findUserByEmail(email);

      //Verify the email already exist in the database
      if (!user) {
        throw new Error(" Email or password are incorrect");
      }

      //Compare the password
      const isMatch = await bcrypt.compare(password, user.password);
      if (!isMatch) {
        throw new Error("Invalid password");
      }

      //Generate token
      const token = jwt.sign({ id: user.id }, process.env.JWT_SECRET, {
        expiresIn: "1h",
      });
      console.log("User successfully authticated");
      return { token };
    } catch (error) {
      throw new Error(`Error to authticate user, ${error.message}`);
    }
  }
}
