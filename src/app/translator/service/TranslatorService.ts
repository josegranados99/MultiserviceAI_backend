import { Response } from "express";
import OpenAI from "openai";
import { ChatCompletionMessageParam } from "openai/src/resources.js";

class TranslatorService {
  protected static async translate(
    modelAI: string,
    paramsIA: ChatCompletionMessageParam[],
    objOpenAI: OpenAI,
    res: Response
  ): Promise<any> {
    try {
      const response = await objOpenAI.chat.completions.create({
        model: modelAI,
        messages: paramsIA,
        max_tokens: 1000,
        response_format: {
          type: "text",
        },
      });

      const msgReponse = response.choices[0].message.content;
      console.log("Reponse for AI", msgReponse);
      res.status(200).json({
        translation: msgReponse,
      });
    } catch (error) {
      console.log("Error", error);
      res.status(400).send("Error translating text");
    }
  }
}

export default TranslatorService;
