import { Request } from "express";
import RequestUser from "../entity/Request";
import { ChatCompletionMessageParam } from "openai/resources/chat";
import {
  SYSTEM_RESTRICTION,
  USER_REQUEST_TRANSLATE,
} from "../../../helpers/constans/config";

import dotenv from "dotenv";
dotenv.config();

let arrayAI: Record<string, ChatCompletionMessageParam[]> = {};

class ParamsAIController {
  public static getPasrams(req: Request): ChatCompletionMessageParam[] {
    const { userCode, sourceLanguage, targetLanguage, text } =
      req.body as RequestUser;
    const userRequest = `${USER_REQUEST_TRANSLATE} ${sourceLanguage} al ${targetLanguage}: ${text}`;

    if (!arrayAI[userCode]) {
      arrayAI[userCode] = SYSTEM_RESTRICTION.map((restriction) => {
        return { role: "system", content: restriction };
      });
    }

    arrayAI[userCode].push({
      role: "user",
      content: userRequest,
    });

    console.log("IA Array", arrayAI);
    return arrayAI[userCode];
  }
}

export default ParamsAIController;
