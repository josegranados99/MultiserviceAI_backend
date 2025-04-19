import { Router } from "express";
import imageController from "../controller/imageController";
import { imageData } from "../../../config/domain/image";
import validateInfoTranslator from "../../../middleware/validationInfoTranslator";

class ImageRoute {
  public apiImageRoute: Router;

  constructor() {
    this.apiImageRoute = Router();
    this.apiImageRoute.post(
      "/generate",
      imageData,
      validateInfoTranslator.request,
      imageController.callImgGenerator
    );
    console.log("papitas");
    
  }
}

const imageRoute = new ImageRoute();
export default imageRoute.apiImageRoute;
