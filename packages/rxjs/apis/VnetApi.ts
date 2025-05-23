// tslint:disable
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

import type { Observable } from 'rxjs';
import type { AjaxResponse } from 'rxjs/ajax';
import { BaseAPI, throwIfNullOrUndefined, encodeURI } from '../runtime';
import type { OperationOpts, HttpHeaders } from '../runtime';
import type {
    ApiErrorBadRequest,
    ApiErrorConflict,
    ApiErrorForbidden,
    ApiErrorInsufficientResource,
    ApiErrorNotFound,
    ApiErrorUnauthorized,
    ApiErrorUnprocessableEntity,
    Subnet,
    VNet,
} from '../models';

export interface CreateSubnetRequest {
    vnetId: string;
    subnet: Subnet;
}

export interface DeleteVNetRequest {
    vnetId: string;
}

export interface ListVNetSubnetsRequest {
    vnetId: string;
}

export interface ReadVNetRequest {
    vnetId: string;
}

export interface SetVNetDefaultSubnetRequest {
    vnetId: string;
    subnetId: string;
}

export interface UpdateVNetRequest {
    vnetId: string;
    vNet: VNet;
}

/**
 * no description
 */
export class VnetApi extends BaseAPI {

    /**
     * Creates a new network subnet.
     */
    createSubnet({ vnetId, subnet }: CreateSubnetRequest): Observable<Subnet>
    createSubnet({ vnetId, subnet }: CreateSubnetRequest, opts?: OperationOpts): Observable<AjaxResponse<Subnet>>
    createSubnet({ vnetId, subnet }: CreateSubnetRequest, opts?: OperationOpts): Observable<Subnet | AjaxResponse<Subnet>> {
        throwIfNullOrUndefined(vnetId, 'vnetId', 'createSubnet');
        throwIfNullOrUndefined(subnet, 'subnet', 'createSubnet');

        const headers: HttpHeaders = {
            'Content-Type': 'application/json',
            ...(this.configuration.apiKey && { 'X-API-Key': this.configuration.apiKey('X-API-Key') }), // ApiKeyAuth authentication
        };

        return this.request<Subnet>({
            url: '/vnet/{vnetId}/subnet'.replace('{vnetId}', encodeURI(vnetId)),
            method: 'POST',
            headers,
            body: subnet,
        }, opts?.responseOpts);
    };

    /**
     * Deletes an existing virtual network.
     */
    deleteVNet({ vnetId }: DeleteVNetRequest): Observable<void>
    deleteVNet({ vnetId }: DeleteVNetRequest, opts?: OperationOpts): Observable<void | AjaxResponse<void>>
    deleteVNet({ vnetId }: DeleteVNetRequest, opts?: OperationOpts): Observable<void | AjaxResponse<void>> {
        throwIfNullOrUndefined(vnetId, 'vnetId', 'deleteVNet');

        const headers: HttpHeaders = {
            ...(this.configuration.apiKey && { 'X-API-Key': this.configuration.apiKey('X-API-Key') }), // ApiKeyAuth authentication
        };

        return this.request<void>({
            url: '/vnet/{vnetId}'.replace('{vnetId}', encodeURI(vnetId)),
            method: 'DELETE',
            headers,
        }, opts?.responseOpts);
    };

    /**
     * Returns the IDs of network subnet objects.
     */
    listVNetSubnets({ vnetId }: ListVNetSubnetsRequest): Observable<Array<string>>
    listVNetSubnets({ vnetId }: ListVNetSubnetsRequest, opts?: OperationOpts): Observable<AjaxResponse<Array<string>>>
    listVNetSubnets({ vnetId }: ListVNetSubnetsRequest, opts?: OperationOpts): Observable<Array<string> | AjaxResponse<Array<string>>> {
        throwIfNullOrUndefined(vnetId, 'vnetId', 'listVNetSubnets');

        const headers: HttpHeaders = {
            ...(this.configuration.apiKey && { 'X-API-Key': this.configuration.apiKey('X-API-Key') }), // ApiKeyAuth authentication
        };

        return this.request<Array<string>>({
            url: '/vnet/{vnetId}/subnets'.replace('{vnetId}', encodeURI(vnetId)),
            method: 'GET',
            headers,
        }, opts?.responseOpts);
    };

    /**
     * Returns the IDs of virtual network objects.
     */
    listVNets(): Observable<Array<string>>
    listVNets(opts?: OperationOpts): Observable<AjaxResponse<Array<string>>>
    listVNets(opts?: OperationOpts): Observable<Array<string> | AjaxResponse<Array<string>>> {
        const headers: HttpHeaders = {
            ...(this.configuration.apiKey && { 'X-API-Key': this.configuration.apiKey('X-API-Key') }), // ApiKeyAuth authentication
        };

        return this.request<Array<string>>({
            url: '/vnet',
            method: 'GET',
            headers,
        }, opts?.responseOpts);
    };

    /**
     * Returns a virtual network.
     */
    readVNet({ vnetId }: ReadVNetRequest): Observable<VNet>
    readVNet({ vnetId }: ReadVNetRequest, opts?: OperationOpts): Observable<AjaxResponse<VNet>>
    readVNet({ vnetId }: ReadVNetRequest, opts?: OperationOpts): Observable<VNet | AjaxResponse<VNet>> {
        throwIfNullOrUndefined(vnetId, 'vnetId', 'readVNet');

        const headers: HttpHeaders = {
            ...(this.configuration.apiKey && { 'X-API-Key': this.configuration.apiKey('X-API-Key') }), // ApiKeyAuth authentication
        };

        return this.request<VNet>({
            url: '/vnet/{vnetId}'.replace('{vnetId}', encodeURI(vnetId)),
            method: 'GET',
            headers,
        }, opts?.responseOpts);
    };

    /**
     * Performs a virtual network setting of default network subnet.
     */
    setVNetDefaultSubnet({ vnetId, subnetId }: SetVNetDefaultSubnetRequest): Observable<void>
    setVNetDefaultSubnet({ vnetId, subnetId }: SetVNetDefaultSubnetRequest, opts?: OperationOpts): Observable<void | AjaxResponse<void>>
    setVNetDefaultSubnet({ vnetId, subnetId }: SetVNetDefaultSubnetRequest, opts?: OperationOpts): Observable<void | AjaxResponse<void>> {
        throwIfNullOrUndefined(vnetId, 'vnetId', 'setVNetDefaultSubnet');
        throwIfNullOrUndefined(subnetId, 'subnetId', 'setVNetDefaultSubnet');

        const headers: HttpHeaders = {
            ...(this.configuration.apiKey && { 'X-API-Key': this.configuration.apiKey('X-API-Key') }), // ApiKeyAuth authentication
        };

        return this.request<void>({
            url: '/vnet/{vnetId}/subnet/{subnetId}/default'.replace('{vnetId}', encodeURI(vnetId)).replace('{subnetId}', encodeURI(subnetId)),
            method: 'PATCH',
            headers,
        }, opts?.responseOpts);
    };

    /**
     * Updates a virtual network configuration.
     */
    updateVNet({ vnetId, vNet }: UpdateVNetRequest): Observable<VNet>
    updateVNet({ vnetId, vNet }: UpdateVNetRequest, opts?: OperationOpts): Observable<AjaxResponse<VNet>>
    updateVNet({ vnetId, vNet }: UpdateVNetRequest, opts?: OperationOpts): Observable<VNet | AjaxResponse<VNet>> {
        throwIfNullOrUndefined(vnetId, 'vnetId', 'updateVNet');
        throwIfNullOrUndefined(vNet, 'vNet', 'updateVNet');

        const headers: HttpHeaders = {
            'Content-Type': 'application/json',
            ...(this.configuration.apiKey && { 'X-API-Key': this.configuration.apiKey('X-API-Key') }), // ApiKeyAuth authentication
        };

        return this.request<VNet>({
            url: '/vnet/{vnetId}'.replace('{vnetId}', encodeURI(vnetId)),
            method: 'PUT',
            headers,
            body: vNet,
        }, opts?.responseOpts);
    };

}
