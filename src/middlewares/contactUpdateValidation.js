import { body } from "express-validator";

export const contactUpdateValidation = [
  body("name")
    .optional()
    .isString()
    .withMessage("The name must be a valid string")
    .matches(/^[A-Za-zÀ-ÖØ-öø-ÿ\s]+$/)
    .withMessage("The name must cotain only letters"),
  body("email").optional().isEmail().withMessage("The email must be valid"),
  body("phone")
    .optional()
    .isNumeric()
    .withMessage("The phone number must contain only numbers"),
];
