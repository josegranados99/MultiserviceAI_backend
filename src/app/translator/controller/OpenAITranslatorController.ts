import { TranslatorStartefy } from "../interface/TranslatorStartegy";
import OpenAI from "openai";
import { API_KEY_OPENAI, MODEL_OPENAI } from "../../../helpers/constans/config";

class OpenAITranslatorController implements TranslatorStartefy {
  public translateStrategy(): OpenAI {
    const objOpenAI = new OpenAI({
      apiKey: API_KEY_OPENAI,
    });

    return objOpenAI;
  }
}

const objOpenAIController = new OpenAITranslatorController();
export default objOpenAIController;
