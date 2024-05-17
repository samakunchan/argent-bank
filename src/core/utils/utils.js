const isProdGithubPages = process.env.REACT_APP_ENV === 'gh-pages' ? `/argent-bank` : ``;
export const basicErrorMessage = 'Une érreur non définis est survenue.';

export class RouteName {
  /**
   * /argent-bank ou rien
   * @type {string|string}
   */
  static basePath = isProdGithubPages ? `/argent-bank` : ``;

  /**
   * /argent-bank ou rien
   * @type {string|string}
   */
  static prefix = process.env.REACT_APP_ENV === 'gh-pages' ? `/argent-bank` : ``;
  /**
   * /
   * @type {string}
   */
  static home = '/';
  /**
   * /sign-in
   * @type {string}
   */
  static signIn = '/sign-in';
  /**
   * /dashboard/user
   * @type {string}
   */
  static dashboard = '/dashboard/user';
  /**
   * /error
   * @type {string}
   */
  static error = '/error';
}

export class ApiPath {
  /**
   * Ex: http:localhost:3001
   * @type {string}
   */
  static baseUrl = process.env.REACT_APP_API_URL;

  /**
   * Ex: user/login
   * @type {string}
   */
  static endPointAuth = 'user/login';

  /**
   * Ex: user/profile
   * @type {string}
   */
  static endPointProfile = 'user/profile';
}

export class Theme {
  /**
   * color: #085835
   * @type {string}
   */
  static primary = '#085835';

  /**
   * color: #12002b
   * @type {string}
   */
  static secondary = '#12002b';

  /**
   * Change la couleur du thème
   * @param newColor
   */
  static changeThemeColor(newColor) {
    const metaTag = document.querySelector('meta[name="theme-color"]');
    if (metaTag) {
      metaTag.content = newColor;
    }
  }
}
