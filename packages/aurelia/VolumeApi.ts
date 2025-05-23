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
  Volume,
} from './models';

/**
 * deleteVolume - parameters interface
 */
export interface IDeleteVolumeParams {
  volumeId: string;
}

/**
 * listVolumes - parameters interface
 */
export interface IListVolumesParams {
}

/**
 * readVolume - parameters interface
 */
export interface IReadVolumeParams {
  volumeId: string;
}

/**
 * updateVolume - parameters interface
 */
export interface IUpdateVolumeParams {
  volumeId: string;
  volume: Volume;
}

/**
 * VolumeApi - API class
 */
@autoinject()
export class VolumeApi extends Api {

  /**
   * Creates a new VolumeApi class.
   *
   * @param httpClient The Aurelia HTTP client to be injected.
   * @param authStorage A storage for authentication data.
   */
  constructor(httpClient: HttpClient, authStorage: AuthStorage) {
    super(httpClient, authStorage);
  }

  /**
   * Deletes an existing storage volume.
   * @param params.volumeId The ID of the storage volume.
   */
  async deleteVolume(params: IDeleteVolumeParams): Promise<any> {
    // Verify required parameters are set
    this.ensureParamIsSet('deleteVolume', params, 'volumeId');

    // Create URL to call
    const url = `${this.basePath}/volume/{volumeId}`
      .replace(`{${'volumeId'}}`, encodeURIComponent(`${params['volumeId']}`));

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
   * Returns the IDs of storage volume objects.
   */
  async listVolumes(): Promise<Array<string>> {
    // Verify required parameters are set

    // Create URL to call
    const url = `${this.basePath}/volume`;

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
   * Returns a storage volume.
   * @param params.volumeId The ID of the storage volume.
   */
  async readVolume(params: IReadVolumeParams): Promise<Volume> {
    // Verify required parameters are set
    this.ensureParamIsSet('readVolume', params, 'volumeId');

    // Create URL to call
    const url = `${this.basePath}/volume/{volumeId}`
      .replace(`{${'volumeId'}}`, encodeURIComponent(`${params['volumeId']}`));

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
   * Updates a storage volume configuration.
   * @param params.volumeId The ID of the storage volume.
   * @param params.volume Volume payload.
   */
  async updateVolume(params: IUpdateVolumeParams): Promise<Volume> {
    // Verify required parameters are set
    this.ensureParamIsSet('updateVolume', params, 'volumeId');
    this.ensureParamIsSet('updateVolume', params, 'volume');

    // Create URL to call
    const url = `${this.basePath}/volume/{volumeId}`
      .replace(`{${'volumeId'}}`, encodeURIComponent(`${params['volumeId']}`));

    const response = await this.httpClient.createRequest(url)
      // Set HTTP method
      .asPut()
      // Encode body parameter
      .withHeader('content-type', 'application/json')
      .withContent(JSON.stringify(params['volume'] || {}))

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

