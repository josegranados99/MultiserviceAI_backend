import { ImageGenerateParams } from "openai/src/resources";

class RequestUser {
  private _userCode: string;
  private _text: string;
  private _modelAI: string;
  private _size: ImageGenerateParams["size"];
  private _quality: ImageGenerateParams["quality"];
  private _style: ImageGenerateParams["style"];

  constructor(
    userCode: string,
    tetx: string,
    modelAI: string,
    size: ImageGenerateParams["size"],
    quality: ImageGenerateParams["quality"],
    style: ImageGenerateParams["style"]
  ) {
    this._userCode = userCode;
    this._text = tetx;
    this._modelAI = modelAI;
    this._size = size;
    this._quality = quality;
    this._style = style;
  }

  public set text(value: string) {
    this._text = value;
  }

  public set size(value: ImageGenerateParams["size"]) {
    this._size = value;
  }

  public set quality(value: ImageGenerateParams["quality"]) {
    this._quality = value;
  }

  public set style(value: ImageGenerateParams["style"]) {
    this._style = value;
  }

  public get userCode(): string {
    return this._userCode;
  }

  public get text(): string {
    return this._text;
  }

  public get modelAI(): string {
    return this._modelAI;
  }

  public get size(): ImageGenerateParams["size"] {
    return this._size;
  }

  public get quality(): ImageGenerateParams["quality"] {
    return this._quality;
  }

  public get style(): ImageGenerateParams["style"] {
    return this._style;
  }
}

export default RequestUser;
