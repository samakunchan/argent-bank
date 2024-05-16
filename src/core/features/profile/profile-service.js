import { ApiPath } from '../../utils/utils';
import { ApiResponseModel } from '../../models/api-response-model';

export class ProfileService {
  /**
   * Requête asynchrone pour récupérer l'utilisateur via l'access token
   * @example 200:
   * {
   *   "status": 0,
   *   "message": "string",
   *   "body": {
   *     "id": "string",
   *     "email": "string"
   *   }
   * }
   * @example 400:
   * Invalid Fields
   * @example 500:
   * Internal Server Error
   * @param accessToken {string}
   * @return {Promise<Record>}
   */
  async getUserProfile({ accessToken }) {
    try {
      const response = await fetch(`${ApiPath.baseUrl}/api/v1/${ApiPath.endPointProfile}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${accessToken}`,
        },
      });
      const json = await response.json();
      const apiResponse = new ApiResponseModel(json);
      if (response.ok) {
        return apiResponse.body;
      }
      throw new Error(apiResponse.message);
    } catch (error) {
      return Promise.reject(!!error ? error : `Une érreur non définis est survenue.`);
    }
  }

  /**
   * Requête asynchrone pour modifier l'utilisateur via l'access token
   * @example 200:
   * {
   *   "status": 0,
   *   "message": "string",
   *   "body": {
   *     "id": "string",
   *     "email": "string"
   *   }
   * }
   * @example 400:
   * Invalid Fields
   * @example 500:
   * Internal Server Error
   * @param accessToken {string}
   * @param firstName {string}
   * @param lastName {string}
   * @return {Promise<{}>}
   */
  async updateProfile({ accessToken, firstName, lastName }) {
    try {
      const response = await fetch(`${ApiPath.baseUrl}/api/v1/${ApiPath.endPointProfile}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${accessToken}`,
        },
        body: JSON.stringify({ firstName, lastName }),
      });
      const json = await response.json();
      const apiResponse = new ApiResponseModel(json);
      if (response.ok) {
        return apiResponse.body;
      }
      throw new Error(apiResponse.message);
    } catch (error) {
      return Promise.reject(!!error ? error : `Une érreur non définis est survenue.`);
    }
  }
}
