class RequestUser {
  private _userCode: string;
  private _sourceLanguage: string;
  private _targetLanguage: string;
  private _modelAI: string;
  private _text: string;

  constructor(
    userCode: string,
    sourceLanguage: string,
    targetLanguage: string,
    modelAI: string,
    text: string
  ) {
    this._userCode = userCode;
    this._sourceLanguage = sourceLanguage;
    this._targetLanguage = targetLanguage;
    this._modelAI = modelAI;
    this._text = text;
  }

  public get userCode(): string {
    return this._userCode;
  }

  public get sourceLanguage(): string {
    return this._sourceLanguage;
  }

  public get targetLanguage(): string {
    return this._targetLanguage;
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

  public set sourceLanguage(value: string) {
    this._sourceLanguage = value;
  }

  public set targetLanguage(value: string) {
    this._targetLanguage = value;
  }

  public set modelAI(value: string) {
    this._modelAI = value;
  }

  public set text(value: string) {
    this._text = value;
  }
}

export default RequestUser;