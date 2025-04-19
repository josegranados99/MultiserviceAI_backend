import express from "express";
import cors from "cors";
import morgan from "morgan";

import { PORT_BACKEND } from "../../helpers/constans/config";
import apiTranslatorRoute from "../../app/translator/route/translatorRoute";
import apiImageRoute from "../../app/imageGenerator/route/imageRoute";
class Server {
  public app: express.Application;

  constructor() {
    this.app = express();
    this.loadConfig();
    this.loadRoutes();
  }

  public loadConfig(): void {
    this.app.set("PORT", PORT_BACKEND || 3000);
    this.app.use(express.json({ limit: "50mb" }));
    this.app.use(express.urlencoded({ extended: true }));
    this.app.use(cors());
    this.app.use(morgan("dev"));
  }

  public loadRoutes(): void {
    this.app.use("/api/v1", apiTranslatorRoute);
    this.app.use("/api/v1/image", apiImageRoute);
  }

  public start(): void {
    this.app.listen(this.app.get("PORT"), () => {
      console.log(`Server is running on port ${this.app.get("PORT")}`);
    });
  }
}

export default Server;
