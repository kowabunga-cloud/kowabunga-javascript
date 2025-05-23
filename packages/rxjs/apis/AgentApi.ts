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
import type { OperationOpts, HttpHeaders, HttpQuery } from '../runtime';
import type {
    Agent,
    ApiErrorBadRequest,
    ApiErrorConflict,
    ApiErrorForbidden,
    ApiErrorInsufficientResource,
    ApiErrorNotFound,
    ApiErrorUnauthorized,
    ApiErrorUnprocessableEntity,
    ApiToken,
} from '../models';

export interface CreateAgentRequest {
    agent: Agent;
}

export interface DeleteAgentRequest {
    agentId: string;
}

export interface ReadAgentRequest {
    agentId: string;
}

export interface SetAgentApiTokenRequest {
    agentId: string;
    expire?: boolean;
    expirationDate?: string;
}

export interface UpdateAgentRequest {
    agentId: string;
    agent: Agent;
}

/**
 * no description
 */
export class AgentApi extends BaseAPI {

    /**
     * Creates a new Kowabunga remote agent.
     */
    createAgent({ agent }: CreateAgentRequest): Observable<Agent>
    createAgent({ agent }: CreateAgentRequest, opts?: OperationOpts): Observable<AjaxResponse<Agent>>
    createAgent({ agent }: CreateAgentRequest, opts?: OperationOpts): Observable<Agent | AjaxResponse<Agent>> {
        throwIfNullOrUndefined(agent, 'agent', 'createAgent');

        const headers: HttpHeaders = {
            'Content-Type': 'application/json',
            ...(this.configuration.apiKey && { 'X-API-Key': this.configuration.apiKey('X-API-Key') }), // ApiKeyAuth authentication
        };

        return this.request<Agent>({
            url: '/agent',
            method: 'POST',
            headers,
            body: agent,
        }, opts?.responseOpts);
    };

    /**
     * Deletes an existing Kowabunga remote agent.
     */
    deleteAgent({ agentId }: DeleteAgentRequest): Observable<void>
    deleteAgent({ agentId }: DeleteAgentRequest, opts?: OperationOpts): Observable<void | AjaxResponse<void>>
    deleteAgent({ agentId }: DeleteAgentRequest, opts?: OperationOpts): Observable<void | AjaxResponse<void>> {
        throwIfNullOrUndefined(agentId, 'agentId', 'deleteAgent');

        const headers: HttpHeaders = {
            ...(this.configuration.apiKey && { 'X-API-Key': this.configuration.apiKey('X-API-Key') }), // ApiKeyAuth authentication
        };

        return this.request<void>({
            url: '/agent/{agentId}'.replace('{agentId}', encodeURI(agentId)),
            method: 'DELETE',
            headers,
        }, opts?.responseOpts);
    };

    /**
     * Returns the IDs of Kowabunga remote agent objects.
     */
    listAgents(): Observable<Array<string>>
    listAgents(opts?: OperationOpts): Observable<AjaxResponse<Array<string>>>
    listAgents(opts?: OperationOpts): Observable<Array<string> | AjaxResponse<Array<string>>> {
        const headers: HttpHeaders = {
            ...(this.configuration.apiKey && { 'X-API-Key': this.configuration.apiKey('X-API-Key') }), // ApiKeyAuth authentication
        };

        return this.request<Array<string>>({
            url: '/agent',
            method: 'GET',
            headers,
        }, opts?.responseOpts);
    };

    /**
     * Returns a Kowabunga remote agent.
     */
    readAgent({ agentId }: ReadAgentRequest): Observable<Agent>
    readAgent({ agentId }: ReadAgentRequest, opts?: OperationOpts): Observable<AjaxResponse<Agent>>
    readAgent({ agentId }: ReadAgentRequest, opts?: OperationOpts): Observable<Agent | AjaxResponse<Agent>> {
        throwIfNullOrUndefined(agentId, 'agentId', 'readAgent');

        const headers: HttpHeaders = {
            ...(this.configuration.apiKey && { 'X-API-Key': this.configuration.apiKey('X-API-Key') }), // ApiKeyAuth authentication
        };

        return this.request<Agent>({
            url: '/agent/{agentId}'.replace('{agentId}', encodeURI(agentId)),
            method: 'GET',
            headers,
        }, opts?.responseOpts);
    };

    /**
     * Performs a Kowabunga remote agent setting of API token (will replace any existing one).
     */
    setAgentApiToken({ agentId, expire, expirationDate }: SetAgentApiTokenRequest): Observable<ApiToken>
    setAgentApiToken({ agentId, expire, expirationDate }: SetAgentApiTokenRequest, opts?: OperationOpts): Observable<AjaxResponse<ApiToken>>
    setAgentApiToken({ agentId, expire, expirationDate }: SetAgentApiTokenRequest, opts?: OperationOpts): Observable<ApiToken | AjaxResponse<ApiToken>> {
        throwIfNullOrUndefined(agentId, 'agentId', 'setAgentApiToken');

        const headers: HttpHeaders = {
            ...(this.configuration.apiKey && { 'X-API-Key': this.configuration.apiKey('X-API-Key') }), // ApiKeyAuth authentication
        };

        const query: HttpQuery = {};

        if (expire != null) { query['expire'] = expire; }
        if (expirationDate != null) { query['expiration_date'] = (expirationDate as any).toISOString().split('T')[0]; }

        return this.request<ApiToken>({
            url: '/agent/{agentId}/token'.replace('{agentId}', encodeURI(agentId)),
            method: 'PATCH',
            headers,
            query,
        }, opts?.responseOpts);
    };

    /**
     * Updates a Kowabunga remote agent configuration.
     */
    updateAgent({ agentId, agent }: UpdateAgentRequest): Observable<Agent>
    updateAgent({ agentId, agent }: UpdateAgentRequest, opts?: OperationOpts): Observable<AjaxResponse<Agent>>
    updateAgent({ agentId, agent }: UpdateAgentRequest, opts?: OperationOpts): Observable<Agent | AjaxResponse<Agent>> {
        throwIfNullOrUndefined(agentId, 'agentId', 'updateAgent');
        throwIfNullOrUndefined(agent, 'agent', 'updateAgent');

        const headers: HttpHeaders = {
            'Content-Type': 'application/json',
            ...(this.configuration.apiKey && { 'X-API-Key': this.configuration.apiKey('X-API-Key') }), // ApiKeyAuth authentication
        };

        return this.request<Agent>({
            url: '/agent/{agentId}'.replace('{agentId}', encodeURI(agentId)),
            method: 'PUT',
            headers,
            body: agent,
        }, opts?.responseOpts);
    };

}
