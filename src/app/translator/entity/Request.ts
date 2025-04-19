class RequestUser {
  private _userCode: string;
  private _languaje: string;
  private _modelAI: string;
  private _text: string;

  constructor(
    userCode: string,
    language: string,
    modelAI: string,
    text: string
  ) {
    this._userCode = userCode;
    this._languaje = language;
    this._modelAI = modelAI;
    this._text = text;
  }

  public get userCode(): string {
    return this._userCode;
  }


  public get language(): string {
    return this._languaje;
  }

  public get modelAI(): string {
    return this._modelAI;
  }

  public get text(): string {
    return this._text;
  }

  public set userCode(value: string) {
    this._userCode = value;
  }

  public set language(value: string) {
    this._languaje = value;
  }

  public set modelAI(value: string) {
    this._modelAI = value;
  }

  public set text(value: string) {
    this._text = value;
  }
}

export default RequestUser;
