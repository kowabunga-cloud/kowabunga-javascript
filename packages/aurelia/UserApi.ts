/**
 * Kowabunga API documentation
 * Kvm Orchestrator With A BUNch of Goods Added
 *
 * The version of the OpenAPI document: 0.52.5
 * Contact: maintainers@kowabunga.cloud
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { autoinject } from 'aurelia-framework';
import { HttpClient } from 'aurelia-http-client';
import { Api } from './Api';
import { AuthStorage } from './AuthStorage';
import {
  User,
  UserCredentials,
  UserEmail,
  Password,
} from './models';

/**
 * createUser - parameters interface
 */
export interface ICreateUserParams {
  user: User;
}

/**
 * deleteUser - parameters interface
 */
export interface IDeleteUserParams {
  userId: string;
}

/**
 * listUsers - parameters interface
 */
export interface IListUsersParams {
}

/**
 * login - parameters interface
 */
export interface ILoginParams {
  userCredentials: UserCredentials;
}

/**
 * logout - parameters interface
 */
export interface ILogoutParams {
}

/**
 * readUser - parameters interface
 */
export interface IReadUserParams {
  userId: string;
}

/**
 * resetPassword - parameters interface
 */
export interface IResetPasswordParams {
  userEmail: UserEmail;
}

/**
 * resetUserPassword - parameters interface
 */
export interface IResetUserPasswordParams {
  userId: string;
}

/**
 * setUserApiToken - parameters interface
 */
export interface ISetUserApiTokenParams {
  userId: string;
  expire?: boolean;
  expirationDate?: string;
}

/**
 * setUserPassword - parameters interface
 */
export interface ISetUserPasswordParams {
  userId: string;
  password: Password;
}

/**
 * updateUser - parameters interface
 */
export interface IUpdateUserParams {
  userId: string;
  user: User;
}

/**
 * UserApi - API class
 */
@autoinject()
export class UserApi extends Api {

  /**
   * Creates a new UserApi class.
   *
   * @param httpClient The Aurelia HTTP client to be injected.
   * @param authStorage A storage for authentication data.
   */
  constructor(httpClient: HttpClient, authStorage: AuthStorage) {
    super(httpClient, authStorage);
  }

  /**
   * Creates a new Kowabunga user.
   * @param params.user User payload.
   */
  async createUser(params: ICreateUserParams): Promise<User> {
    // Verify required parameters are set
    this.ensureParamIsSet('createUser', params, 'user');

    // Create URL to call
    const url = `${this.basePath}/user`;

    const response = await this.httpClient.createRequest(url)
      // Set HTTP method
      .asPost()
      // Encode body parameter
      .withHeader('content-type', 'application/json')
      .withContent(JSON.stringify(params['user'] || {}))

      // Authentication 'ApiKeyAuth' required
      .withHeader('X-API-Key', this.authStorage.getApiKeyAuth())
      // Authentication 'BearerAuth' required
      // Send the request
      .send();

    if (response.statusCode < 200 || response.statusCode >= 300) {
      throw new Error(response.content);
    }

    // Extract the content
    return response.content;
  }

  /**
   * Deletes an existing Kowabunga user.
   * @param params.userId The ID of the Kowabunga user.
   */
  async deleteUser(params: IDeleteUserParams): Promise<any> {
    // Verify required parameters are set
    this.ensureParamIsSet('deleteUser', params, 'userId');

    // Create URL to call
    const url = `${this.basePath}/user/{userId}`
      .replace(`{${'userId'}}`, encodeURIComponent(`${params['userId']}`));

    const response = await this.httpClient.createRequest(url)
      // Set HTTP method
      .asDelete()

      // Authentication 'ApiKeyAuth' required
      .withHeader('X-API-Key', this.authStorage.getApiKeyAuth())
      // Authentication 'BearerAuth' required
      // Send the request
      .send();

    if (response.statusCode < 200 || response.statusCode >= 300) {
      throw new Error(response.content);
    }

    // Extract the content
    return response.content;
  }

  /**
   * Returns the IDs of Kowabunga user objects.
   */
  async listUsers(): Promise<Array<string>> {
    // Verify required parameters are set

    // Create URL to call
    const url = `${this.basePath}/user`;

    const response = await this.httpClient.createRequest(url)
      // Set HTTP method
      .asGet()

      // Authentication 'ApiKeyAuth' required
      .withHeader('X-API-Key', this.authStorage.getApiKeyAuth())
      // Authentication 'BearerAuth' required
      // Send the request
      .send();

    if (response.statusCode < 200 || response.statusCode >= 300) {
      throw new Error(response.content);
    }

    // Extract the content
    return response.content;
  }

  /**
   * Creates a new Kowabunga user login credentials.
   * @param params.userCredentials UserCredentials payload.
   */
  async login(params: ILoginParams): Promise<UserCredentials> {
    // Verify required parameters are set
    this.ensureParamIsSet('login', params, 'userCredentials');

    // Create URL to call
    const url = `${this.basePath}/login`;

    const response = await this.httpClient.createRequest(url)
      // Set HTTP method
      .asPost()
      // Encode body parameter
      .withHeader('content-type', 'application/json')
      .withContent(JSON.stringify(params['userCredentials'] || {}))

      // Authentication 'ApiKeyAuth' required
      .withHeader('X-API-Key', this.authStorage.getApiKeyAuth())
      // Authentication 'BearerAuth' required
      // Send the request
      .send();

    if (response.statusCode < 200 || response.statusCode >= 300) {
      throw new Error(response.content);
    }

    // Extract the content
    return response.content;
  }

  /**
   * Creates a new Kowabunga user logout session.
   */
  async logout(): Promise<any> {
    // Verify required parameters are set

    // Create URL to call
    const url = `${this.basePath}/logout`;

    const response = await this.httpClient.createRequest(url)
      // Set HTTP method
      .asPost()

      // Authentication 'ApiKeyAuth' required
      .withHeader('X-API-Key', this.authStorage.getApiKeyAuth())
      // Authentication 'BearerAuth' required
      // Send the request
      .send();

    if (response.statusCode < 200 || response.statusCode >= 300) {
      throw new Error(response.content);
    }

    // Extract the content
    return response.content;
  }

  /**
   * Returns a Kowabunga user.
   * @param params.userId The ID of the Kowabunga user.
   */
  async readUser(params: IReadUserParams): Promise<User> {
    // Verify required parameters are set
    this.ensureParamIsSet('readUser', params, 'userId');

    // Create URL to call
    const url = `${this.basePath}/user/{userId}`
      .replace(`{${'userId'}}`, encodeURIComponent(`${params['userId']}`));

    const response = await this.httpClient.createRequest(url)
      // Set HTTP method
      .asGet()

      // Authentication 'ApiKeyAuth' required
      .withHeader('X-API-Key', this.authStorage.getApiKeyAuth())
      // Authentication 'BearerAuth' required
      // Send the request
      .send();

    if (response.statusCode < 200 || response.statusCode >= 300) {
      throw new Error(response.content);
    }

    // Extract the content
    return response.content;
  }

  /**
   * Updates a Kowabunga userreset of password for the provided email (server-side generated, will replace any existing one) configuration.
   * @param params.userEmail UserEmail payload.
   */
  async resetPassword(params: IResetPasswordParams): Promise<any> {
    // Verify required parameters are set
    this.ensureParamIsSet('resetPassword', params, 'userEmail');

    // Create URL to call
    const url = `${this.basePath}/resetPassword`;

    const response = await this.httpClient.createRequest(url)
      // Set HTTP method
      .asPut()
      // Encode body parameter
      .withHeader('content-type', 'application/json')
      .withContent(JSON.stringify(params['userEmail'] || {}))

      // Authentication 'ApiKeyAuth' required
      .withHeader('X-API-Key', this.authStorage.getApiKeyAuth())
      // Authentication 'BearerAuth' required
      // Send the request
      .send();

    if (response.statusCode < 200 || response.statusCode >= 300) {
      throw new Error(response.content);
    }

    // Extract the content
    return response.content;
  }

  /**
   * Performs a Kowabunga user reset of password (server-side generated, will replace any existing one).
   * @param params.userId The ID of the Kowabunga user.
   */
  async resetUserPassword(params: IResetUserPasswordParams): Promise<any> {
    // Verify required parameters are set
    this.ensureParamIsSet('resetUserPassword', params, 'userId');

    // Create URL to call
    const url = `${this.basePath}/user/{userId}/resetPassword`
      .replace(`{${'userId'}}`, encodeURIComponent(`${params['userId']}`));

    const response = await this.httpClient.createRequest(url)
      // Set HTTP method
      .asPatch()

      // Authentication 'ApiKeyAuth' required
      .withHeader('X-API-Key', this.authStorage.getApiKeyAuth())
      // Authentication 'BearerAuth' required
      // Send the request
      .send();

    if (response.statusCode < 200 || response.statusCode >= 300) {
      throw new Error(response.content);
    }

    // Extract the content
    return response.content;
  }

  /**
   * Performs a Kowabunga user setting of API token (will replace any existing one).
   * @param params.userId The ID of the Kowabunga user.
   * @param params.expire Whether or not the token should expire.
   * @param params.expirationDate Token\&#39;s expiration date (YYYY-MM-DD format).
   */
  async setUserApiToken(params: ISetUserApiTokenParams): Promise<any> {
    // Verify required parameters are set
    this.ensureParamIsSet('setUserApiToken', params, 'userId');

    // Create URL to call
    const url = `${this.basePath}/user/{userId}/token`
      .replace(`{${'userId'}}`, encodeURIComponent(`${params['userId']}`));

    const response = await this.httpClient.createRequest(url)
      // Set HTTP method
      .asPatch()
      // Set query parameters
      .withParams({ 
        'expire': params['expire'],
        'expiration_date': params['expirationDate'],
      })

      // Authentication 'ApiKeyAuth' required
      .withHeader('X-API-Key', this.authStorage.getApiKeyAuth())
      // Authentication 'BearerAuth' required
      // Send the request
      .send();

    if (response.statusCode < 200 || response.statusCode >= 300) {
      throw new Error(response.content);
    }

    // Extract the content
    return response.content;
  }

  /**
   * Updates a Kowabunga user password (will replace any existing one) configuration.
   * @param params.userId The ID of the Kowabunga user.
   * @param params.password Password payload.
   */
  async setUserPassword(params: ISetUserPasswordParams): Promise<any> {
    // Verify required parameters are set
    this.ensureParamIsSet('setUserPassword', params, 'userId');
    this.ensureParamIsSet('setUserPassword', params, 'password');

    // Create URL to call
    const url = `${this.basePath}/user/{userId}/password`
      .replace(`{${'userId'}}`, encodeURIComponent(`${params['userId']}`));

    const response = await this.httpClient.createRequest(url)
      // Set HTTP method
      .asPut()
      // Encode body parameter
      .withHeader('content-type', 'application/json')
      .withContent(JSON.stringify(params['password'] || {}))

      // Authentication 'ApiKeyAuth' required
      .withHeader('X-API-Key', this.authStorage.getApiKeyAuth())
      // Authentication 'BearerAuth' required
      // Send the request
      .send();

    if (response.statusCode < 200 || response.statusCode >= 300) {
      throw new Error(response.content);
    }

    // Extract the content
    return response.content;
  }

  /**
   * Updates a Kowabunga user configuration.
   * @param params.userId The ID of the Kowabunga user.
   * @param params.user User payload.
   */
  async updateUser(params: IUpdateUserParams): Promise<User> {
    // Verify required parameters are set
    this.ensureParamIsSet('updateUser', params, 'userId');
    this.ensureParamIsSet('updateUser', params, 'user');

    // Create URL to call
    const url = `${this.basePath}/user/{userId}`
      .replace(`{${'userId'}}`, encodeURIComponent(`${params['userId']}`));

    const response = await this.httpClient.createRequest(url)
      // Set HTTP method
      .asPut()
      // Encode body parameter
      .withHeader('content-type', 'application/json')
      .withContent(JSON.stringify(params['user'] || {}))

      // Authentication 'ApiKeyAuth' required
      .withHeader('X-API-Key', this.authStorage.getApiKeyAuth())
      // Authentication 'BearerAuth' required
      // Send the request
      .send();

    if (response.statusCode < 200 || response.statusCode >= 300) {
      throw new Error(response.content);
    }

    // Extract the content
    return response.content;
  }

}

