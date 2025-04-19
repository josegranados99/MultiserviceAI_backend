import { body } from "express-validator";

export const translateData = [
  body("userCode", "The user ID cannot be empty.").not().isEmpty(),
  body("language", "The language cannot be empty.").not().isEmpty(),
  body("modelAI", "The AI model cannot be empty.").not().isEmpty(),
  body("modelAI", "AI model not supported.").isIn(["openAI", "deepSeek"]),
  body("text", "The text to translate cannot be empty.").not().isEmpty(),
  body("text", "Minimum 1 characters.").isLength({ min: 1 }),
  body("text", "Maximum 4000 characters.").isLength({ max: 4000 }),
];
