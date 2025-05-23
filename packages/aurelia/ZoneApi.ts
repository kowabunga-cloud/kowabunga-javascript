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
  Zone,
  Kaktus,
} from './models';

/**
 * createKaktus - parameters interface
 */
export interface ICreateKaktusParams {
  zoneId: string;
  kaktus: Kaktus;
}

/**
 * deleteZone - parameters interface
 */
export interface IDeleteZoneParams {
  zoneId: string;
}

/**
 * listZoneKaktuses - parameters interface
 */
export interface IListZoneKaktusesParams {
  zoneId: string;
}

/**
 * listZones - parameters interface
 */
export interface IListZonesParams {
}

/**
 * readZone - parameters interface
 */
export interface IReadZoneParams {
  zoneId: string;
}

/**
 * updateZone - parameters interface
 */
export interface IUpdateZoneParams {
  zoneId: string;
  zone: Zone;
}

/**
 * ZoneApi - API class
 */
@autoinject()
export class ZoneApi extends Api {

  /**
   * Creates a new ZoneApi class.
   *
   * @param httpClient The Aurelia HTTP client to be injected.
   * @param authStorage A storage for authentication data.
   */
  constructor(httpClient: HttpClient, authStorage: AuthStorage) {
    super(httpClient, authStorage);
  }

  /**
   * Creates a new Kaktus computing node.
   * @param params.zoneId The ID of the availability zone.
   * @param params.kaktus Kaktus payload.
   */
  async createKaktus(params: ICreateKaktusParams): Promise<Kaktus> {
    // Verify required parameters are set
    this.ensureParamIsSet('createKaktus', params, 'zoneId');
    this.ensureParamIsSet('createKaktus', params, 'kaktus');

    // Create URL to call
    const url = `${this.basePath}/zone/{zoneId}/kaktus`
      .replace(`{${'zoneId'}}`, encodeURIComponent(`${params['zoneId']}`));

    const response = await this.httpClient.createRequest(url)
      // Set HTTP method
      .asPost()
      // Encode body parameter
      .withHeader('content-type', 'application/json')
      .withContent(JSON.stringify(params['kaktus'] || {}))

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
   * Deletes an existing availability zone.
   * @param params.zoneId The ID of the availability zone.
   */
  async deleteZone(params: IDeleteZoneParams): Promise<any> {
    // Verify required parameters are set
    this.ensureParamIsSet('deleteZone', params, 'zoneId');

    // Create URL to call
    const url = `${this.basePath}/zone/{zoneId}`
      .replace(`{${'zoneId'}}`, encodeURIComponent(`${params['zoneId']}`));

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
   * Returns the IDs of Kaktus computing node objects.
   * @param params.zoneId The ID of the availability zone.
   */
  async listZoneKaktuses(params: IListZoneKaktusesParams): Promise<Array<string>> {
    // Verify required parameters are set
    this.ensureParamIsSet('listZoneKaktuses', params, 'zoneId');

    // Create URL to call
    const url = `${this.basePath}/zone/{zoneId}/kaktuses`
      .replace(`{${'zoneId'}}`, encodeURIComponent(`${params['zoneId']}`));

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
   * Returns the IDs of availability zone objects.
   */
  async listZones(): Promise<Array<string>> {
    // Verify required parameters are set

    // Create URL to call
    const url = `${this.basePath}/zone`;

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
   * Returns a availability zone.
   * @param params.zoneId The ID of the availability zone.
   */
  async readZone(params: IReadZoneParams): Promise<Zone> {
    // Verify required parameters are set
    this.ensureParamIsSet('readZone', params, 'zoneId');

    // Create URL to call
    const url = `${this.basePath}/zone/{zoneId}`
      .replace(`{${'zoneId'}}`, encodeURIComponent(`${params['zoneId']}`));

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
   * Updates a availability zone configuration.
   * @param params.zoneId The ID of the availability zone.
   * @param params.zone Zone payload.
   */
  async updateZone(params: IUpdateZoneParams): Promise<Zone> {
    // Verify required parameters are set
    this.ensureParamIsSet('updateZone', params, 'zoneId');
    this.ensureParamIsSet('updateZone', params, 'zone');

    // Create URL to call
    const url = `${this.basePath}/zone/{zoneId}`
      .replace(`{${'zoneId'}}`, encodeURIComponent(`${params['zoneId']}`));

    const response = await this.httpClient.createRequest(url)
      // Set HTTP method
      .asPut()
      // Encode body parameter
      .withHeader('content-type', 'application/json')
      .withContent(JSON.stringify(params['zone'] || {}))

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

