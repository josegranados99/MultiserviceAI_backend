import { TranslatorStartefy } from "../interface/TranslatorStartegy";
import OpenAI from "openai";
import {
  API_KEY_DEEPSEEK,
  BASE_URL_DEEPSEEK,
} from "../../../helpers/constans/config";

class DeepSekTranslatorController implements TranslatorStartefy {
  public translateStrategy(): OpenAI {
    const objOpenAI = new OpenAI({
      apiKey: API_KEY_DEEPSEEK,
      baseURL: BASE_URL_DEEPSEEK,
    });
    return objOpenAI;
  }
}

const objDeepSeekController = new DeepSekTranslatorController();
export default objDeepSeekController;
