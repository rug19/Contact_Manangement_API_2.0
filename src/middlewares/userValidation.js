import { body } from "express-validator";

export const userValidation = [
  body("name").notEmpty().withMessage("The name is required"),
  body("email")
    .notEmpty()
    .withMessage("The email is required")
    .bail()
    .isEmail()
    .withMessage("the email must be valid"),
  body("password").notEmpty().withMessage("The password is required"),
];
