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
  KawaiiIpSec,
  Kawaii,
} from './models';

/**
 * createKawaiiIpSec - parameters interface
 */
export interface ICreateKawaiiIpSecParams {
  kawaiiId: string;
  kawaiiIpSec: KawaiiIpSec;
}

/**
 * deleteKawaii - parameters interface
 */
export interface IDeleteKawaiiParams {
  kawaiiId: string;
}

/**
 * deleteKawaiiIpSec - parameters interface
 */
export interface IDeleteKawaiiIpSecParams {
  kawaiiId: string;
  kawaiiIpSecId: string;
}

/**
 * listKawaiiIpSecs - parameters interface
 */
export interface IListKawaiiIpSecsParams {
  kawaiiId: string;
}

/**
 * listKawaiis - parameters interface
 */
export interface IListKawaiisParams {
}

/**
 * readKawaii - parameters interface
 */
export interface IReadKawaiiParams {
  kawaiiId: string;
}

/**
 * readKawaiiIpSec - parameters interface
 */
export interface IReadKawaiiIpSecParams {
  kawaiiId: string;
  kawaiiIpSecId: string;
}

/**
 * updateKawaii - parameters interface
 */
export interface IUpdateKawaiiParams {
  kawaiiId: string;
  kawaii: Kawaii;
}

/**
 * updateKawaiiIpSec - parameters interface
 */
export interface IUpdateKawaiiIpSecParams {
  kawaiiId: string;
  kawaiiIpSecId: string;
  kawaiiIpSec: KawaiiIpSec;
}

/**
 * KawaiiApi - API class
 */
@autoinject()
export class KawaiiApi extends Api {

  /**
   * Creates a new KawaiiApi class.
   *
   * @param httpClient The Aurelia HTTP client to be injected.
   * @param authStorage A storage for authentication data.
   */
  constructor(httpClient: HttpClient, authStorage: AuthStorage) {
    super(httpClient, authStorage);
  }

  /**
   * Creates a new Kawaii IPsec connection.
   * @param params.kawaiiId The ID of the Kawaii.
   * @param params.kawaiiIpSec KawaiiIpSec payload.
   */
  async createKawaiiIpSec(params: ICreateKawaiiIpSecParams): Promise<KawaiiIpSec> {
    // Verify required parameters are set
    this.ensureParamIsSet('createKawaiiIpSec', params, 'kawaiiId');
    this.ensureParamIsSet('createKawaiiIpSec', params, 'kawaiiIpSec');

    // Create URL to call
    const url = `${this.basePath}/kawaii/{kawaiiId}/ipsec`
      .replace(`{${'kawaiiId'}}`, encodeURIComponent(`${params['kawaiiId']}`));

    const response = await this.httpClient.createRequest(url)
      // Set HTTP method
      .asPost()
      // Encode body parameter
      .withHeader('content-type', 'application/json')
      .withContent(JSON.stringify(params['kawaiiIpSec'] || {}))

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
   * Deletes an existing Kawaii.
   * @param params.kawaiiId The ID of the Kawaii.
   */
  async deleteKawaii(params: IDeleteKawaiiParams): Promise<any> {
    // Verify required parameters are set
    this.ensureParamIsSet('deleteKawaii', params, 'kawaiiId');

    // Create URL to call
    const url = `${this.basePath}/kawaii/{kawaiiId}`
      .replace(`{${'kawaiiId'}}`, encodeURIComponent(`${params['kawaiiId']}`));

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
   * Deletes an existing Kawaii IPsec connection.
   * @param params.kawaiiId The ID of the Kawaii.
   * @param params.kawaiiIpSecId The ID of the Kawaii IPsec connection.
   */
  async deleteKawaiiIpSec(params: IDeleteKawaiiIpSecParams): Promise<any> {
    // Verify required parameters are set
    this.ensureParamIsSet('deleteKawaiiIpSec', params, 'kawaiiId');
    this.ensureParamIsSet('deleteKawaiiIpSec', params, 'kawaiiIpSecId');

    // Create URL to call
    const url = `${this.basePath}/kawaii/{kawaiiId}/ipsec/{KawaiiIpSecId}`
      .replace(`{${'kawaiiId'}}`, encodeURIComponent(`${params['kawaiiId']}`))
      .replace(`{${'KawaiiIpSecId'}}`, encodeURIComponent(`${params['kawaiiIpSecId']}`));

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
   * Returns the IDs of Kawaii IPsec connection objects.
   * @param params.kawaiiId The ID of the Kawaii.
   */
  async listKawaiiIpSecs(params: IListKawaiiIpSecsParams): Promise<Array<string>> {
    // Verify required parameters are set
    this.ensureParamIsSet('listKawaiiIpSecs', params, 'kawaiiId');

    // Create URL to call
    const url = `${this.basePath}/kawaii/{kawaiiId}/ipsec`
      .replace(`{${'kawaiiId'}}`, encodeURIComponent(`${params['kawaiiId']}`));

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
   * Returns the IDs of Kawaii objects.
   */
  async listKawaiis(): Promise<Array<string>> {
    // Verify required parameters are set

    // Create URL to call
    const url = `${this.basePath}/kawaii`;

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
   * Returns a Kawaii.
   * @param params.kawaiiId The ID of the Kawaii.
   */
  async readKawaii(params: IReadKawaiiParams): Promise<Kawaii> {
    // Verify required parameters are set
    this.ensureParamIsSet('readKawaii', params, 'kawaiiId');

    // Create URL to call
    const url = `${this.basePath}/kawaii/{kawaiiId}`
      .replace(`{${'kawaiiId'}}`, encodeURIComponent(`${params['kawaiiId']}`));

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
   * Returns a Kawaii IPsec connection.
   * @param params.kawaiiId The ID of the Kawaii.
   * @param params.kawaiiIpSecId The ID of the Kawaii IPsec connection.
   */
  async readKawaiiIpSec(params: IReadKawaiiIpSecParams): Promise<KawaiiIpSec> {
    // Verify required parameters are set
    this.ensureParamIsSet('readKawaiiIpSec', params, 'kawaiiId');
    this.ensureParamIsSet('readKawaiiIpSec', params, 'kawaiiIpSecId');

    // Create URL to call
    const url = `${this.basePath}/kawaii/{kawaiiId}/ipsec/{KawaiiIpSecId}`
      .replace(`{${'kawaiiId'}}`, encodeURIComponent(`${params['kawaiiId']}`))
      .replace(`{${'KawaiiIpSecId'}}`, encodeURIComponent(`${params['kawaiiIpSecId']}`));

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
   * Updates a Kawaii configuration.
   * @param params.kawaiiId The ID of the Kawaii.
   * @param params.kawaii Kawaii payload.
   */
  async updateKawaii(params: IUpdateKawaiiParams): Promise<Kawaii> {
    // Verify required parameters are set
    this.ensureParamIsSet('updateKawaii', params, 'kawaiiId');
    this.ensureParamIsSet('updateKawaii', params, 'kawaii');

    // Create URL to call
    const url = `${this.basePath}/kawaii/{kawaiiId}`
      .replace(`{${'kawaiiId'}}`, encodeURIComponent(`${params['kawaiiId']}`));

    const response = await this.httpClient.createRequest(url)
      // Set HTTP method
      .asPut()
      // Encode body parameter
      .withHeader('content-type', 'application/json')
      .withContent(JSON.stringify(params['kawaii'] || {}))

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
   * Updates a Kawaii IPsec connection configuration.
   * @param params.kawaiiId The ID of the Kawaii.
   * @param params.kawaiiIpSecId The ID of the Kawaii IPsec connection.
   * @param params.kawaiiIpSec KawaiiIpSec payload.
   */
  async updateKawaiiIpSec(params: IUpdateKawaiiIpSecParams): Promise<KawaiiIpSec> {
    // Verify required parameters are set
    this.ensureParamIsSet('updateKawaiiIpSec', params, 'kawaiiId');
    this.ensureParamIsSet('updateKawaiiIpSec', params, 'kawaiiIpSecId');
    this.ensureParamIsSet('updateKawaiiIpSec', params, 'kawaiiIpSec');

    // Create URL to call
    const url = `${this.basePath}/kawaii/{kawaiiId}/ipsec/{KawaiiIpSecId}`
      .replace(`{${'kawaiiId'}}`, encodeURIComponent(`${params['kawaiiId']}`))
      .replace(`{${'KawaiiIpSecId'}}`, encodeURIComponent(`${params['kawaiiIpSecId']}`));

    const response = await this.httpClient.createRequest(url)
      // Set HTTP method
      .asPut()
      // Encode body parameter
      .withHeader('content-type', 'application/json')
      .withContent(JSON.stringify(params['kawaiiIpSec'] || {}))

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

