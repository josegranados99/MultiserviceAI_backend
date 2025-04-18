import { NextFunction, Request, Response } from "express";
import { validationResult } from "express-validator";

class ValidateInfoTranlator {
  public request(req: Request, res: Response, next: NextFunction): void {
    const errorArray = validationResult(req);

    if (errorArray.isEmpty()) {
      next();
    } else {
      res.status(400).json({
        response: errorArray.array(),
      });
    }
  }
}

const validateInfoTranslator = new ValidateInfoTranlator();
export default validateInfoTranslator;
