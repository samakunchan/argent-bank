export class ApiResponseModel {
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
   * @return {Record}
   */
  get body() {
    return this._body;
  }
}
