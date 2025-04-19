import { Request } from "express";
import { IAArray } from "../entity/ParamType";
import RequestUser from "../entity/Request";
import {
  SYSTEM_RESTRICTION_IMAGE_1,
  SYSTEM_RESTRICTION_IMAGE_2,
  SYSTEM_RESTRICTION_IMAGE_3,
} from "../../../helpers/constans/config";

let arrayAI: IAArray = {};

class ParamsAIController {
  public static getParamsAI(req: Request): string {
    const { userCode, text } = req.body as RequestUser;
    const promptEnd = `${SYSTEM_RESTRICTION_IMAGE_1} ${SYSTEM_RESTRICTION_IMAGE_2} ${SYSTEM_RESTRICTION_IMAGE_3} ${text}`;

    if (!arrayAI[userCode]) {
      arrayAI[userCode] = { prompt: promptEnd };
    }

    console.log("IA Array:", arrayAI);

    return arrayAI[userCode].prompt;
  }
}

export default ParamsAIController;
