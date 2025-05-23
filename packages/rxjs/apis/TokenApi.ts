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
    ApiToken,
} from '../models';

export interface DeleteApiTokenRequest {
    tokenId: string;
}

export interface ReadApiTokenRequest {
    tokenId: string;
}

export interface UpdateApiTokenRequest {
    tokenId: string;
    apiToken: ApiToken;
}

/**
 * no description
 */
export class TokenApi extends BaseAPI {

    /**
     * Deletes an existing server-to-server authentication security token.
     */
    deleteApiToken({ tokenId }: DeleteApiTokenRequest): Observable<void>
    deleteApiToken({ tokenId }: DeleteApiTokenRequest, opts?: OperationOpts): Observable<void | AjaxResponse<void>>
    deleteApiToken({ tokenId }: DeleteApiTokenRequest, opts?: OperationOpts): Observable<void | AjaxResponse<void>> {
        throwIfNullOrUndefined(tokenId, 'tokenId', 'deleteApiToken');

        const headers: HttpHeaders = {
            ...(this.configuration.apiKey && { 'X-API-Key': this.configuration.apiKey('X-API-Key') }), // ApiKeyAuth authentication
        };

        return this.request<void>({
            url: '/token/{tokenId}'.replace('{tokenId}', encodeURI(tokenId)),
            method: 'DELETE',
            headers,
        }, opts?.responseOpts);
    };

    /**
     * Returns the IDs of server-to-server authentication security token objects.
     */
    listApiTokens(): Observable<Array<string>>
    listApiTokens(opts?: OperationOpts): Observable<AjaxResponse<Array<string>>>
    listApiTokens(opts?: OperationOpts): Observable<Array<string> | AjaxResponse<Array<string>>> {
        const headers: HttpHeaders = {
            ...(this.configuration.apiKey && { 'X-API-Key': this.configuration.apiKey('X-API-Key') }), // ApiKeyAuth authentication
        };

        return this.request<Array<string>>({
            url: '/token',
            method: 'GET',
            headers,
        }, opts?.responseOpts);
    };

    /**
     * Returns a server-to-server authentication security token.
     */
    readApiToken({ tokenId }: ReadApiTokenRequest): Observable<ApiToken>
    readApiToken({ tokenId }: ReadApiTokenRequest, opts?: OperationOpts): Observable<AjaxResponse<ApiToken>>
    readApiToken({ tokenId }: ReadApiTokenRequest, opts?: OperationOpts): Observable<ApiToken | AjaxResponse<ApiToken>> {
        throwIfNullOrUndefined(tokenId, 'tokenId', 'readApiToken');

        const headers: HttpHeaders = {
            ...(this.configuration.apiKey && { 'X-API-Key': this.configuration.apiKey('X-API-Key') }), // ApiKeyAuth authentication
        };

        return this.request<ApiToken>({
            url: '/token/{tokenId}'.replace('{tokenId}', encodeURI(tokenId)),
            method: 'GET',
            headers,
        }, opts?.responseOpts);
    };

    /**
     * Updates a server-to-server authentication security token configuration.
     */
    updateApiToken({ tokenId, apiToken }: UpdateApiTokenRequest): Observable<ApiToken>
    updateApiToken({ tokenId, apiToken }: UpdateApiTokenRequest, opts?: OperationOpts): Observable<AjaxResponse<ApiToken>>
    updateApiToken({ tokenId, apiToken }: UpdateApiTokenRequest, opts?: OperationOpts): Observable<ApiToken | AjaxResponse<ApiToken>> {
        throwIfNullOrUndefined(tokenId, 'tokenId', 'updateApiToken');
        throwIfNullOrUndefined(apiToken, 'apiToken', 'updateApiToken');

        const headers: HttpHeaders = {
            'Content-Type': 'application/json',
            ...(this.configuration.apiKey && { 'X-API-Key': this.configuration.apiKey('X-API-Key') }), // ApiKeyAuth authentication
        };

        return this.request<ApiToken>({
            url: '/token/{tokenId}'.replace('{tokenId}', encodeURI(tokenId)),
            method: 'PUT',
            headers,
            body: apiToken,
        }, opts?.responseOpts);
    };

}
