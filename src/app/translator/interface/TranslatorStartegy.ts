import OpenAI from "openai";

export interface TranslatorStartefy {
  translateStrategy(): OpenAI;
}
