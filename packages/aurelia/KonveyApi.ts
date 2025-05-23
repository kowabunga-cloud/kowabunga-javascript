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
  Konvey,
} from './models';

/**
 * deleteKonvey - parameters interface
 */
export interface IDeleteKonveyParams {
  konveyId: string;
}

/**
 * listKonveys - parameters interface
 */
export interface IListKonveysParams {
}

/**
 * readKonvey - parameters interface
 */
export interface IReadKonveyParams {
  konveyId: string;
}

/**
 * updateKonvey - parameters interface
 */
export interface IUpdateKonveyParams {
  konveyId: string;
  konvey: Konvey;
}

/**
 * KonveyApi - API class
 */
@autoinject()
export class KonveyApi extends Api {

  /**
   * Creates a new KonveyApi class.
   *
   * @param httpClient The Aurelia HTTP client to be injected.
   * @param authStorage A storage for authentication data.
   */
  constructor(httpClient: HttpClient, authStorage: AuthStorage) {
    super(httpClient, authStorage);
  }

  /**
   * Deletes an existing Konvey (Kowabunga Network Load-Balancer).
   * @param params.konveyId The ID of the Konvey (Kowabunga Network Load-Balancer).
   */
  async deleteKonvey(params: IDeleteKonveyParams): Promise<any> {
    // Verify required parameters are set
    this.ensureParamIsSet('deleteKonvey', params, 'konveyId');

    // Create URL to call
    const url = `${this.basePath}/konvey/{konveyId}`
      .replace(`{${'konveyId'}}`, encodeURIComponent(`${params['konveyId']}`));

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
   * Returns the IDs of Konvey (Kowabunga Network Load-Balancer) objects.
   */
  async listKonveys(): Promise<Array<string>> {
    // Verify required parameters are set

    // Create URL to call
    const url = `${this.basePath}/konvey`;

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
   * Returns a Konvey (Kowabunga Network Load-Balancer).
   * @param params.konveyId The ID of the Konvey (Kowabunga Network Load-Balancer).
   */
  async readKonvey(params: IReadKonveyParams): Promise<Konvey> {
    // Verify required parameters are set
    this.ensureParamIsSet('readKonvey', params, 'konveyId');

    // Create URL to call
    const url = `${this.basePath}/konvey/{konveyId}`
      .replace(`{${'konveyId'}}`, encodeURIComponent(`${params['konveyId']}`));

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
   * Updates a Konvey (Kowabunga Network Load-Balancer) configuration.
   * @param params.konveyId The ID of the Konvey (Kowabunga Network Load-Balancer).
   * @param params.konvey Konvey payload.
   */
  async updateKonvey(params: IUpdateKonveyParams): Promise<Konvey> {
    // Verify required parameters are set
    this.ensureParamIsSet('updateKonvey', params, 'konveyId');
    this.ensureParamIsSet('updateKonvey', params, 'konvey');

    // Create URL to call
    const url = `${this.basePath}/konvey/{konveyId}`
      .replace(`{${'konveyId'}}`, encodeURIComponent(`${params['konveyId']}`));

    const response = await this.httpClient.createRequest(url)
      // Set HTTP method
      .asPut()
      // Encode body parameter
      .withHeader('content-type', 'application/json')
      .withContent(JSON.stringify(params['konvey'] || {}))

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

