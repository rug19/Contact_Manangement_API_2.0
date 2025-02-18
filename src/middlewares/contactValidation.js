import { body } from "express-validator";

export const contactValidation = [
  body("name")
    .notEmpty()
    .withMessage("the name is required.")
    .bail()
    .isString()
    .withMessage("The name must cotain only letters")
    .matches(/^[A-Za-zÀ-ÖØ-öø-ÿ\s]+$/)
    .withMessage("The name must cotain only letters"),
  body("phone")
    .notEmpty()
    .withMessage("The phone number is required")
    .bail()
    .isNumeric()
    .withMessage("the phone number must contain only numbers"),
  body("email")
    .notEmpty()
    .withMessage("The email is required")
    .bail()
    .isEmail()
    .withMessage("the email must be valid"),
];
