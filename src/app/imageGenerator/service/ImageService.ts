import { Response } from "express";
import OpenAI from "openai";
import { ImageGenerateParams } from "openai/src/resources";

class ImageService {
  protected static async genearteImage(
    model: string,
    size: ImageGenerateParams["size"],
    quality: ImageGenerateParams["quality"],
    style: ImageGenerateParams["style"],
    paramsAI: string,
    objOpenAI: OpenAI,
    res: Response
  ): Promise<any> {
    try {
      const response = await objOpenAI.images.generate({
        model,
        prompt: paramsAI,
        n: 1,
        size,
        quality,
        style,
      });

      const imgUrl = response.data[0].url;
      res.status(200).json({ image: imgUrl });
    } catch (error) {
      console.log("Error: ", error);
      res.status(400).json({ error });
    }
  }
}

export default ImageService;
