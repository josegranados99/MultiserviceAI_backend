import { body } from "express-validator";
import { MODEL_DALLE_2, MODEL_DALLE_3 } from "../../helpers/constans/config";

export const imageData = [
  body("userCode", "The user ID cannot be empty.").not().isEmpty(),
  body("modelAI", "The AI model cannot be empty.").not().isEmpty(),
  body("modelAI", "AI model not supported.").isIn([
    MODEL_DALLE_2,
    MODEL_DALLE_3,
  ]),
  body("size", "The image size cannot be empty.").not().isEmpty(),
  body("quality", "The image quality cannot be empty.").not().isEmpty(),
  body("style", "The image style cannot be empty.").not().isEmpty(),
  body("text", "The text to translate cannot be empty.").not().isEmpty(),
  body("text", "Minimum 15 characters.").isLength({ min: 15 }),
  body("text", "Maximum 500 characters.").isLength({ max: 4000 }),
];
