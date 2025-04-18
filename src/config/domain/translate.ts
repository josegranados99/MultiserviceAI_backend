import { body } from "express-validator";

export const translateData = [
  body("userCode", "The user ID cannot be empty.").not().isEmpty(),
  body("sourceLanguage", "The source language cannot be empty.")
    .not()
    .isEmpty(),
  body("targetLanguage", "The target language cannot be empty.")
    .not()
    .isEmpty(),
  body("modelAI", "The AI model cannot be empty.").not().isEmpty(),
  body("modelAI", "AI model not supported.").isIn(["openAI", "deepSeek"]),
  body("text", "Minimum 15 characters.").isLength({ min: 15 }),
  body("text", "Maximum 500 characters.").isLength({ max: 4000 }),
];
