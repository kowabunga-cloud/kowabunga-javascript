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
    InstanceState,
    Kompute,
} from '../models';

export interface DeleteKomputeRequest {
    komputeId: string;
}

export interface ReadKomputeRequest {
    komputeId: string;
}

export interface ReadKomputeStateRequest {
    komputeId: string;
}

export interface RebootKomputeRequest {
    komputeId: string;
}

export interface ResetKomputeRequest {
    komputeId: string;
}

export interface ResumeKomputeRequest {
    komputeId: string;
}

export interface ShutdownKomputeRequest {
    komputeId: string;
}

export interface StartKomputeRequest {
    komputeId: string;
}

export interface StopKomputeRequest {
    komputeId: string;
}

export interface SuspendKomputeRequest {
    komputeId: string;
}

export interface UpdateKomputeRequest {
    komputeId: string;
    kompute: Kompute;
}

/**
 * no description
 */
export class KomputeApi extends BaseAPI {

    /**
     * Deletes an existing Kompute.
     */
    deleteKompute({ komputeId }: DeleteKomputeRequest): Observable<void>
    deleteKompute({ komputeId }: DeleteKomputeRequest, opts?: OperationOpts): Observable<void | AjaxResponse<void>>
    deleteKompute({ komputeId }: DeleteKomputeRequest, opts?: OperationOpts): Observable<void | AjaxResponse<void>> {
        throwIfNullOrUndefined(komputeId, 'komputeId', 'deleteKompute');

        const headers: HttpHeaders = {
            ...(this.configuration.apiKey && { 'X-API-Key': this.configuration.apiKey('X-API-Key') }), // ApiKeyAuth authentication
        };

        return this.request<void>({
            url: '/kompute/{komputeId}'.replace('{komputeId}', encodeURI(komputeId)),
            method: 'DELETE',
            headers,
        }, opts?.responseOpts);
    };

    /**
     * Returns the IDs of Kompute objects.
     */
    listKomputes(): Observable<Array<string>>
    listKomputes(opts?: OperationOpts): Observable<AjaxResponse<Array<string>>>
    listKomputes(opts?: OperationOpts): Observable<Array<string> | AjaxResponse<Array<string>>> {
        const headers: HttpHeaders = {
            ...(this.configuration.apiKey && { 'X-API-Key': this.configuration.apiKey('X-API-Key') }), // ApiKeyAuth authentication
        };

        return this.request<Array<string>>({
            url: '/kompute',
            method: 'GET',
            headers,
        }, opts?.responseOpts);
    };

    /**
     * Returns a Kompute.
     */
    readKompute({ komputeId }: ReadKomputeRequest): Observable<Kompute>
    readKompute({ komputeId }: ReadKomputeRequest, opts?: OperationOpts): Observable<AjaxResponse<Kompute>>
    readKompute({ komputeId }: ReadKomputeRequest, opts?: OperationOpts): Observable<Kompute | AjaxResponse<Kompute>> {
        throwIfNullOrUndefined(komputeId, 'komputeId', 'readKompute');

        const headers: HttpHeaders = {
            ...(this.configuration.apiKey && { 'X-API-Key': this.configuration.apiKey('X-API-Key') }), // ApiKeyAuth authentication
        };

        return this.request<Kompute>({
            url: '/kompute/{komputeId}'.replace('{komputeId}', encodeURI(komputeId)),
            method: 'GET',
            headers,
        }, opts?.responseOpts);
    };

    /**
     * Returns a virtual machine instance state.
     */
    readKomputeState({ komputeId }: ReadKomputeStateRequest): Observable<InstanceState>
    readKomputeState({ komputeId }: ReadKomputeStateRequest, opts?: OperationOpts): Observable<AjaxResponse<InstanceState>>
    readKomputeState({ komputeId }: ReadKomputeStateRequest, opts?: OperationOpts): Observable<InstanceState | AjaxResponse<InstanceState>> {
        throwIfNullOrUndefined(komputeId, 'komputeId', 'readKomputeState');

        const headers: HttpHeaders = {
            ...(this.configuration.apiKey && { 'X-API-Key': this.configuration.apiKey('X-API-Key') }), // ApiKeyAuth authentication
        };

        return this.request<InstanceState>({
            url: '/kompute/{komputeId}/state'.replace('{komputeId}', encodeURI(komputeId)),
            method: 'GET',
            headers,
        }, opts?.responseOpts);
    };

    /**
     * Performs a Kompute software reboot.
     */
    rebootKompute({ komputeId }: RebootKomputeRequest): Observable<void>
    rebootKompute({ komputeId }: RebootKomputeRequest, opts?: OperationOpts): Observable<void | AjaxResponse<void>>
    rebootKompute({ komputeId }: RebootKomputeRequest, opts?: OperationOpts): Observable<void | AjaxResponse<void>> {
        throwIfNullOrUndefined(komputeId, 'komputeId', 'rebootKompute');

        const headers: HttpHeaders = {
            ...(this.configuration.apiKey && { 'X-API-Key': this.configuration.apiKey('X-API-Key') }), // ApiKeyAuth authentication
        };

        return this.request<void>({
            url: '/kompute/{komputeId}/reboot'.replace('{komputeId}', encodeURI(komputeId)),
            method: 'PATCH',
            headers,
        }, opts?.responseOpts);
    };

    /**
     * Performs a Kompute hardware reset.
     */
    resetKompute({ komputeId }: ResetKomputeRequest): Observable<void>
    resetKompute({ komputeId }: ResetKomputeRequest, opts?: OperationOpts): Observable<void | AjaxResponse<void>>
    resetKompute({ komputeId }: ResetKomputeRequest, opts?: OperationOpts): Observable<void | AjaxResponse<void>> {
        throwIfNullOrUndefined(komputeId, 'komputeId', 'resetKompute');

        const headers: HttpHeaders = {
            ...(this.configuration.apiKey && { 'X-API-Key': this.configuration.apiKey('X-API-Key') }), // ApiKeyAuth authentication
        };

        return this.request<void>({
            url: '/kompute/{komputeId}/reset'.replace('{komputeId}', encodeURI(komputeId)),
            method: 'PATCH',
            headers,
        }, opts?.responseOpts);
    };

    /**
     * Performs a Kompute software PM resume.
     */
    resumeKompute({ komputeId }: ResumeKomputeRequest): Observable<void>
    resumeKompute({ komputeId }: ResumeKomputeRequest, opts?: OperationOpts): Observable<void | AjaxResponse<void>>
    resumeKompute({ komputeId }: ResumeKomputeRequest, opts?: OperationOpts): Observable<void | AjaxResponse<void>> {
        throwIfNullOrUndefined(komputeId, 'komputeId', 'resumeKompute');

        const headers: HttpHeaders = {
            ...(this.configuration.apiKey && { 'X-API-Key': this.configuration.apiKey('X-API-Key') }), // ApiKeyAuth authentication
        };

        return this.request<void>({
            url: '/kompute/{komputeId}/resume'.replace('{komputeId}', encodeURI(komputeId)),
            method: 'PATCH',
            headers,
        }, opts?.responseOpts);
    };

    /**
     * Performs a Kompute software shutdown.
     */
    shutdownKompute({ komputeId }: ShutdownKomputeRequest): Observable<void>
    shutdownKompute({ komputeId }: ShutdownKomputeRequest, opts?: OperationOpts): Observable<void | AjaxResponse<void>>
    shutdownKompute({ komputeId }: ShutdownKomputeRequest, opts?: OperationOpts): Observable<void | AjaxResponse<void>> {
        throwIfNullOrUndefined(komputeId, 'komputeId', 'shutdownKompute');

        const headers: HttpHeaders = {
            ...(this.configuration.apiKey && { 'X-API-Key': this.configuration.apiKey('X-API-Key') }), // ApiKeyAuth authentication
        };

        return this.request<void>({
            url: '/kompute/{komputeId}/shutdown'.replace('{komputeId}', encodeURI(komputeId)),
            method: 'PATCH',
            headers,
        }, opts?.responseOpts);
    };

    /**
     * Performs a Kompute hardware boot-up.
     */
    startKompute({ komputeId }: StartKomputeRequest): Observable<void>
    startKompute({ komputeId }: StartKomputeRequest, opts?: OperationOpts): Observable<void | AjaxResponse<void>>
    startKompute({ komputeId }: StartKomputeRequest, opts?: OperationOpts): Observable<void | AjaxResponse<void>> {
        throwIfNullOrUndefined(komputeId, 'komputeId', 'startKompute');

        const headers: HttpHeaders = {
            ...(this.configuration.apiKey && { 'X-API-Key': this.configuration.apiKey('X-API-Key') }), // ApiKeyAuth authentication
        };

        return this.request<void>({
            url: '/kompute/{komputeId}/start'.replace('{komputeId}', encodeURI(komputeId)),
            method: 'PATCH',
            headers,
        }, opts?.responseOpts);
    };

    /**
     * Performs a Kompute hardware stop.
     */
    stopKompute({ komputeId }: StopKomputeRequest): Observable<void>
    stopKompute({ komputeId }: StopKomputeRequest, opts?: OperationOpts): Observable<void | AjaxResponse<void>>
    stopKompute({ komputeId }: StopKomputeRequest, opts?: OperationOpts): Observable<void | AjaxResponse<void>> {
        throwIfNullOrUndefined(komputeId, 'komputeId', 'stopKompute');

        const headers: HttpHeaders = {
            ...(this.configuration.apiKey && { 'X-API-Key': this.configuration.apiKey('X-API-Key') }), // ApiKeyAuth authentication
        };

        return this.request<void>({
            url: '/kompute/{komputeId}/stop'.replace('{komputeId}', encodeURI(komputeId)),
            method: 'PATCH',
            headers,
        }, opts?.responseOpts);
    };

    /**
     * Performs a Kompute software PM suspend.
     */
    suspendKompute({ komputeId }: SuspendKomputeRequest): Observable<void>
    suspendKompute({ komputeId }: SuspendKomputeRequest, opts?: OperationOpts): Observable<void | AjaxResponse<void>>
    suspendKompute({ komputeId }: SuspendKomputeRequest, opts?: OperationOpts): Observable<void | AjaxResponse<void>> {
        throwIfNullOrUndefined(komputeId, 'komputeId', 'suspendKompute');

        const headers: HttpHeaders = {
            ...(this.configuration.apiKey && { 'X-API-Key': this.configuration.apiKey('X-API-Key') }), // ApiKeyAuth authentication
        };

        return this.request<void>({
            url: '/kompute/{komputeId}/suspend'.replace('{komputeId}', encodeURI(komputeId)),
            method: 'PATCH',
            headers,
        }, opts?.responseOpts);
    };

    /**
     * Updates a Kompute configuration.
     */
    updateKompute({ komputeId, kompute }: UpdateKomputeRequest): Observable<Kompute>
    updateKompute({ komputeId, kompute }: UpdateKomputeRequest, opts?: OperationOpts): Observable<AjaxResponse<Kompute>>
    updateKompute({ komputeId, kompute }: UpdateKomputeRequest, opts?: OperationOpts): Observable<Kompute | AjaxResponse<Kompute>> {
        throwIfNullOrUndefined(komputeId, 'komputeId', 'updateKompute');
        throwIfNullOrUndefined(kompute, 'kompute', 'updateKompute');

        const headers: HttpHeaders = {
            'Content-Type': 'application/json',
            ...(this.configuration.apiKey && { 'X-API-Key': this.configuration.apiKey('X-API-Key') }), // ApiKeyAuth authentication
        };

        return this.request<Kompute>({
            url: '/kompute/{komputeId}'.replace('{komputeId}', encodeURI(komputeId)),
            method: 'PUT',
            headers,
            body: kompute,
        }, opts?.responseOpts);
    };

}
