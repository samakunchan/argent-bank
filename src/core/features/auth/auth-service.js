import { ApiPath, basicErrorMessage } from '../../utils/utils';
import { LoginResponseModel } from '../../models/login-response-model';

export class AuthService {
  /**
   * Requête asynchrone pour le login
   * @example 200:
   * { token: `string` }
   * @example 400:
   * Invalid Fields
   * @example 500:
   * Internal Server Error
   * @param email {string}
   * @param password {string}
   * @return {Promise<string>}
   */
  async login({ email, password }) {
    try {
      const response = await this._loginRequest({ email, password });
      const json = await response.json();
      const loginResponse = new LoginResponseModel(json);
      if (response.ok) {
        return loginResponse.body.token;
      }
      throw new Error(loginResponse.message);
    } catch (error) {
      return Promise.reject(!!error ? error : basicErrorMessage);
    }
  }

  /**
   * Fake requête asynchrone pour le logout
   * @example 200:
   * { message: `User disconnected` }
   * @example 400:
   * Invalid Fields
   * @example 500:
   * Internal Server Error
   * @return {Promise<string>}
   */
  async fakeLogout() {
    try {
      const response = await this._fakeLogoutRequest();
      if (response.ok) {
        return response[`body`][`message`];
      }
      throw new Error(response[`message`]);
    } catch (error) {
      return Promise.reject(!!error ? error : basicErrorMessage);
    }
  }

  _fakeLogoutRequest() {
    return Promise.resolve({ ok: true, body: { message: `User disconnected` } });
  }

  _loginRequest({ email, password }) {
    return fetch(`${ApiPath.baseUrl}/api/v1/${ApiPath.endPointAuth}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email, password }),
    });
  }
}
