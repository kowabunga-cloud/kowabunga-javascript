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
    Adapter,
    ApiErrorBadRequest,
    ApiErrorConflict,
    ApiErrorForbidden,
    ApiErrorInsufficientResource,
    ApiErrorNotFound,
    ApiErrorUnauthorized,
    ApiErrorUnprocessableEntity,
} from '../models';

export interface DeleteAdapterRequest {
    adapterId: string;
}

export interface ReadAdapterRequest {
    adapterId: string;
}

export interface UpdateAdapterRequest {
    adapterId: string;
    adapter: Adapter;
}

/**
 * no description
 */
export class AdapterApi extends BaseAPI {

    /**
     * Deletes an existing network adapter.
     */
    deleteAdapter({ adapterId }: DeleteAdapterRequest): Observable<void>
    deleteAdapter({ adapterId }: DeleteAdapterRequest, opts?: OperationOpts): Observable<void | AjaxResponse<void>>
    deleteAdapter({ adapterId }: DeleteAdapterRequest, opts?: OperationOpts): Observable<void | AjaxResponse<void>> {
        throwIfNullOrUndefined(adapterId, 'adapterId', 'deleteAdapter');

        const headers: HttpHeaders = {
            ...(this.configuration.apiKey && { 'X-API-Key': this.configuration.apiKey('X-API-Key') }), // ApiKeyAuth authentication
        };

        return this.request<void>({
            url: '/adapter/{adapterId}'.replace('{adapterId}', encodeURI(adapterId)),
            method: 'DELETE',
            headers,
        }, opts?.responseOpts);
    };

    /**
     * Returns the IDs of network adapter objects.
     */
    listAdapters(): Observable<Array<string>>
    listAdapters(opts?: OperationOpts): Observable<AjaxResponse<Array<string>>>
    listAdapters(opts?: OperationOpts): Observable<Array<string> | AjaxResponse<Array<string>>> {
        const headers: HttpHeaders = {
            ...(this.configuration.apiKey && { 'X-API-Key': this.configuration.apiKey('X-API-Key') }), // ApiKeyAuth authentication
        };

        return this.request<Array<string>>({
            url: '/adapter',
            method: 'GET',
            headers,
        }, opts?.responseOpts);
    };

    /**
     * Returns a network adapter.
     */
    readAdapter({ adapterId }: ReadAdapterRequest): Observable<Adapter>
    readAdapter({ adapterId }: ReadAdapterRequest, opts?: OperationOpts): Observable<AjaxResponse<Adapter>>
    readAdapter({ adapterId }: ReadAdapterRequest, opts?: OperationOpts): Observable<Adapter | AjaxResponse<Adapter>> {
        throwIfNullOrUndefined(adapterId, 'adapterId', 'readAdapter');

        const headers: HttpHeaders = {
            ...(this.configuration.apiKey && { 'X-API-Key': this.configuration.apiKey('X-API-Key') }), // ApiKeyAuth authentication
        };

        return this.request<Adapter>({
            url: '/adapter/{adapterId}'.replace('{adapterId}', encodeURI(adapterId)),
            method: 'GET',
            headers,
        }, opts?.responseOpts);
    };

    /**
     * Updates a network adapter configuration.
     */
    updateAdapter({ adapterId, adapter }: UpdateAdapterRequest): Observable<Adapter>
    updateAdapter({ adapterId, adapter }: UpdateAdapterRequest, opts?: OperationOpts): Observable<AjaxResponse<Adapter>>
    updateAdapter({ adapterId, adapter }: UpdateAdapterRequest, opts?: OperationOpts): Observable<Adapter | AjaxResponse<Adapter>> {
        throwIfNullOrUndefined(adapterId, 'adapterId', 'updateAdapter');
        throwIfNullOrUndefined(adapter, 'adapter', 'updateAdapter');

        const headers: HttpHeaders = {
            'Content-Type': 'application/json',
            ...(this.configuration.apiKey && { 'X-API-Key': this.configuration.apiKey('X-API-Key') }), // ApiKeyAuth authentication
        };

        return this.request<Adapter>({
            url: '/adapter/{adapterId}'.replace('{adapterId}', encodeURI(adapterId)),
            method: 'PUT',
            headers,
            body: adapter,
        }, opts?.responseOpts);
    };

}
