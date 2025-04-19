import { Request, Response } from "express";
import OpenAI from "openai";
import { MODEL_SUPPORT_OPENAI, MODEL_DEEPSEEK, MODEL_OPENAI, MODEL_SUPPORT_DEEPSEEK } from "../../../helpers/constans/config";
import ParamsAIController from "./paramsAIController";
import RequestUser from "../entity/Request";
import objOpenAIController from "./OpenAITranslatorController";
import objDeepSeekController from "./DeppSeekTranslatorController";
import TranslatorService from "../service/TranslatorService";

class TranslatorController extends TranslatorService {
  public translateText(req: Request, res: Response): void {
    const { modelAI } = req.body as RequestUser;
    console.log("modelAI:", modelAI);
    let model = "";
    let objOpenAI: any;

    if (modelAI === MODEL_SUPPORT_OPENAI) {
      model = MODEL_OPENAI;
      objOpenAI = objOpenAIController.translateStrategy();
    } else if (modelAI === MODEL_SUPPORT_DEEPSEEK) {
      model = MODEL_DEEPSEEK;
      objOpenAI = objDeepSeekController.translateStrategy();
    }
    console.log("model:", model);

    const paramsAI = ParamsAIController.getPasrams(req);
    TranslatorService.translate(model, paramsAI, objOpenAI, res);
  }
}

const translatorController = new TranslatorController();
export default translatorController;
