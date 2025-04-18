import { Router } from "express";

import validateInfoTranslator from "../../../middleware/validationInfoTranslator";
import { translateData } from "../../../config/domain/translate";
import translatorController from "../controller/TranslatorController";

class TranslatorRoute {
  public apiTranslatorRoute: Router;

  constructor() {
    this.apiTranslatorRoute = Router();
    this.apiTranslatorRoute.post(
      "/translate",
      translateData,
      validateInfoTranslator.request,
      translatorController.translateText
    );
  }
}

const tranlatorRoute = new TranslatorRoute();
export default tranlatorRoute.apiTranslatorRoute;
