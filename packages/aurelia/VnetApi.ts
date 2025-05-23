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
  Subnet,
  VNet,
} from './models';

/**
 * createSubnet - parameters interface
 */
export interface ICreateSubnetParams {
  vnetId: string;
  subnet: Subnet;
}

/**
 * deleteVNet - parameters interface
 */
export interface IDeleteVNetParams {
  vnetId: string;
}

/**
 * listVNetSubnets - parameters interface
 */
export interface IListVNetSubnetsParams {
  vnetId: string;
}

/**
 * listVNets - parameters interface
 */
export interface IListVNetsParams {
}

/**
 * readVNet - parameters interface
 */
export interface IReadVNetParams {
  vnetId: string;
}

/**
 * setVNetDefaultSubnet - parameters interface
 */
export interface ISetVNetDefaultSubnetParams {
  vnetId: string;
  subnetId: string;
}

/**
 * updateVNet - parameters interface
 */
export interface IUpdateVNetParams {
  vnetId: string;
  vNet: VNet;
}

/**
 * VnetApi - API class
 */
@autoinject()
export class VnetApi extends Api {

  /**
   * Creates a new VnetApi class.
   *
   * @param httpClient The Aurelia HTTP client to be injected.
   * @param authStorage A storage for authentication data.
   */
  constructor(httpClient: HttpClient, authStorage: AuthStorage) {
    super(httpClient, authStorage);
  }

  /**
   * Creates a new network subnet.
   * @param params.vnetId The ID of the virtual network.
   * @param params.subnet Subnet payload.
   */
  async createSubnet(params: ICreateSubnetParams): Promise<Subnet> {
    // Verify required parameters are set
    this.ensureParamIsSet('createSubnet', params, 'vnetId');
    this.ensureParamIsSet('createSubnet', params, 'subnet');

    // Create URL to call
    const url = `${this.basePath}/vnet/{vnetId}/subnet`
      .replace(`{${'vnetId'}}`, encodeURIComponent(`${params['vnetId']}`));

    const response = await this.httpClient.createRequest(url)
      // Set HTTP method
      .asPost()
      // Encode body parameter
      .withHeader('content-type', 'application/json')
      .withContent(JSON.stringify(params['subnet'] || {}))

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
   * Deletes an existing virtual network.
   * @param params.vnetId The ID of the virtual network.
   */
  async deleteVNet(params: IDeleteVNetParams): Promise<any> {
    // Verify required parameters are set
    this.ensureParamIsSet('deleteVNet', params, 'vnetId');

    // Create URL to call
    const url = `${this.basePath}/vnet/{vnetId}`
      .replace(`{${'vnetId'}}`, encodeURIComponent(`${params['vnetId']}`));

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
   * Returns the IDs of network subnet objects.
   * @param params.vnetId The ID of the virtual network.
   */
  async listVNetSubnets(params: IListVNetSubnetsParams): Promise<Array<string>> {
    // Verify required parameters are set
    this.ensureParamIsSet('listVNetSubnets', params, 'vnetId');

    // Create URL to call
    const url = `${this.basePath}/vnet/{vnetId}/subnets`
      .replace(`{${'vnetId'}}`, encodeURIComponent(`${params['vnetId']}`));

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
   * Returns the IDs of virtual network objects.
   */
  async listVNets(): Promise<Array<string>> {
    // Verify required parameters are set

    // Create URL to call
    const url = `${this.basePath}/vnet`;

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
   * Returns a virtual network.
   * @param params.vnetId The ID of the virtual network.
   */
  async readVNet(params: IReadVNetParams): Promise<VNet> {
    // Verify required parameters are set
    this.ensureParamIsSet('readVNet', params, 'vnetId');

    // Create URL to call
    const url = `${this.basePath}/vnet/{vnetId}`
      .replace(`{${'vnetId'}}`, encodeURIComponent(`${params['vnetId']}`));

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
   * Performs a virtual network setting of default network subnet.
   * @param params.vnetId The ID of the virtual network.
   * @param params.subnetId The ID of the network subnet.
   */
  async setVNetDefaultSubnet(params: ISetVNetDefaultSubnetParams): Promise<any> {
    // Verify required parameters are set
    this.ensureParamIsSet('setVNetDefaultSubnet', params, 'vnetId');
    this.ensureParamIsSet('setVNetDefaultSubnet', params, 'subnetId');

    // Create URL to call
    const url = `${this.basePath}/vnet/{vnetId}/subnet/{subnetId}/default`
      .replace(`{${'vnetId'}}`, encodeURIComponent(`${params['vnetId']}`))
      .replace(`{${'subnetId'}}`, encodeURIComponent(`${params['subnetId']}`));

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
   * Updates a virtual network configuration.
   * @param params.vnetId The ID of the virtual network.
   * @param params.vNet VNet payload.
   */
  async updateVNet(params: IUpdateVNetParams): Promise<VNet> {
    // Verify required parameters are set
    this.ensureParamIsSet('updateVNet', params, 'vnetId');
    this.ensureParamIsSet('updateVNet', params, 'vNet');

    // Create URL to call
    const url = `${this.basePath}/vnet/{vnetId}`
      .replace(`{${'vnetId'}}`, encodeURIComponent(`${params['vnetId']}`));

    const response = await this.httpClient.createRequest(url)
      // Set HTTP method
      .asPut()
      // Encode body parameter
      .withHeader('content-type', 'application/json')
      .withContent(JSON.stringify(params['vNet'] || {}))

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

