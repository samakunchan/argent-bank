export class LoginResponseModel {
  constructor(data) {
    const { status, message, body } = data;
    this._status = status;
    this._message = message;
    this._body = body;
  }

  /**
   * @return {number}
   */
  get status() {
    return this._status;
  }

  /**
   * @return {string}
   */
  get message() {
    return this._message;
  }

  /**
   * @return {{token: string}}
   */
  get body() {
    return new TokenResponse(this._body);
  }
}

class TokenResponse {
  constructor(data) {
    const { token } = data;
    this._token = token;
  }

  /**
   * @return {string}
   */
  get token() {
    return this._token;
  }
}
