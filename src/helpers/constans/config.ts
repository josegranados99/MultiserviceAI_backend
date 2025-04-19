import dotenv from "dotenv";
dotenv.config();

//AI
export const API_KEY_OPENAI = String(process.env.API_KEY_OPENAI);
export const API_KEY_DEEPSEEK = String(process.env.API_KEY_DEEPSEEK);
export const MODEL_OPENAI = String(process.env.MODEL_OPENAI);
export const MODEL_DEEPSEEK = String(process.env.MODEL_DEEPSEEK);
export const BASE_URL_DEEPSEEK = String(process.env.BASE_URL_DEEPSEEK);

//IMAGE
export const MODEL_DALLE_2 = String(process.env.MODEL_DALLE_2);
export const MODEL_DALLE_3 = String(process.env.MODEL_DALLE_3);

//PROMPTS
export const SYSTEM_RESTRICTION_TRANSLATE = [
  String(process.env.SYSTEM_RESTRICTION_TRANSLATE_1),
  String(process.env.SYSTEM_RESTRICTION_TRANSLATE_2),
  String(process.env.SYSTEM_RESTRICTION_TRANSLATE_3),
];
export const SYSTEM_RESTRICTION_IMAGE_1 = String(
  process.env.SYSTEM_RESTRICTION_IMAGE_1
);
export const SYSTEM_RESTRICTION_IMAGE_2 = String(
  process.env.SYSTEM_RESTRICTION_IMAGE_2
);
export const SYSTEM_RESTRICTION_IMAGE_3 = String(
  process.env.SYSTEM_RESTRICTION_IMAGE_3
);
export const USER_REQUEST_TRANSLATE = String(
  process.env.USER_REQUEST_TRANSLATE
);

//SERVER
export const PORT_BACKEND = String(process.env.PORT_BACKEND);

export const MODEL_SUPPORT_OPENAI = "openAI";
export const MODEL_SUPPORT_DEEPSEEK = "deepSeek";
