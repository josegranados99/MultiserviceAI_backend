import { Request, Response } from "express";
import RequestUser from "../entity/Request";
import OpenAI from "openai";
import { API_KEY_OPENAI } from "../../../helpers/constans/config";
import ParamsAIController from "./paramsAIController";
import ImageService from "../service/ImageService";

class ImageController extends ImageService {
  public callImgGenerator(req: Request, res: Response): void {
    const { modelAI, size, quality, style } = req.body as RequestUser;
    const objOpenAI = new OpenAI({
      apiKey: API_KEY_OPENAI,
    });
    const paramsAI = ParamsAIController.getParamsAI(req);

    console.log("Body", req.body);

    ImageService.genearteImage(
      modelAI,
      size,
      quality,
      style,
      paramsAI,
      objOpenAI,
      res
    );
  }
}

const imageController = new ImageController();
export default imageController;
