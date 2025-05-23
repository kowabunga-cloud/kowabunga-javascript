/**
 * Kowabunga API documentation
 *
 * Contact: maintainers@kowabunga.cloud
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
/* tslint:disable:no-unused-variable member-ordering */

import { Inject, Injectable, Optional }                      from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams,
         HttpResponse, HttpEvent, HttpParameterCodec, HttpContext 
        }       from '@angular/common/http';
import { CustomHttpParameterCodec }                          from '../encoder';
import { Observable }                                        from 'rxjs';

// @ts-ignore
import { Agent } from '../model/agent';
// @ts-ignore
import { ApiErrorBadRequest } from '../model/apiErrorBadRequest';
// @ts-ignore
import { ApiErrorConflict } from '../model/apiErrorConflict';
// @ts-ignore
import { ApiErrorForbidden } from '../model/apiErrorForbidden';
// @ts-ignore
import { ApiErrorInsufficientResource } from '../model/apiErrorInsufficientResource';
// @ts-ignore
import { ApiErrorNotFound } from '../model/apiErrorNotFound';
// @ts-ignore
import { ApiErrorUnauthorized } from '../model/apiErrorUnauthorized';
// @ts-ignore
import { ApiErrorUnprocessableEntity } from '../model/apiErrorUnprocessableEntity';
// @ts-ignore
import { ApiToken } from '../model/apiToken';

// @ts-ignore
import { BASE_PATH, COLLECTION_FORMATS }                     from '../variables';
import { Configuration }                                     from '../configuration';
import { BaseService } from '../api.base.service';



@Injectable({
  providedIn: 'root'
})
export class AgentService extends BaseService {

    constructor(protected httpClient: HttpClient, @Optional() @Inject(BASE_PATH) basePath: string|string[], @Optional() configuration?: Configuration) {
        super(basePath, configuration);
    }

    /**
     * Creates a new Kowabunga remote agent.
     * @param agent Agent payload.
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public createAgent(agent: Agent, observe?: 'body', reportProgress?: boolean, options?: {httpHeaderAccept?: 'application/json', context?: HttpContext, transferCache?: boolean}): Observable<Agent>;
    public createAgent(agent: Agent, observe?: 'response', reportProgress?: boolean, options?: {httpHeaderAccept?: 'application/json', context?: HttpContext, transferCache?: boolean}): Observable<HttpResponse<Agent>>;
    public createAgent(agent: Agent, observe?: 'events', reportProgress?: boolean, options?: {httpHeaderAccept?: 'application/json', context?: HttpContext, transferCache?: boolean}): Observable<HttpEvent<Agent>>;
    public createAgent(agent: Agent, observe: any = 'body', reportProgress: boolean = false, options?: {httpHeaderAccept?: 'application/json', context?: HttpContext, transferCache?: boolean}): Observable<any> {
        if (agent === null || agent === undefined) {
            throw new Error('Required parameter agent was null or undefined when calling createAgent.');
        }

        let localVarHeaders = this.defaultHeaders;

        // authentication (ApiKeyAuth) required
        localVarHeaders = this.configuration.addCredentialToHeaders('ApiKeyAuth', 'X-API-Key', localVarHeaders);

        // authentication (BearerAuth) required
        localVarHeaders = this.configuration.addCredentialToHeaders('BearerAuth', 'Authorization', localVarHeaders, 'Bearer ');

        const localVarHttpHeaderAcceptSelected: string | undefined = options?.httpHeaderAccept ?? this.configuration.selectHeaderAccept([
            'application/json'
        ]);
        if (localVarHttpHeaderAcceptSelected !== undefined) {
            localVarHeaders = localVarHeaders.set('Accept', localVarHttpHeaderAcceptSelected);
        }

        const localVarHttpContext: HttpContext = options?.context ?? new HttpContext();

        const localVarTransferCache: boolean = options?.transferCache ?? true;


        // to determine the Content-Type header
        const consumes: string[] = [
            'application/json'
        ];
        const httpContentTypeSelected: string | undefined = this.configuration.selectHeaderContentType(consumes);
        if (httpContentTypeSelected !== undefined) {
            localVarHeaders = localVarHeaders.set('Content-Type', httpContentTypeSelected);
        }

        let responseType_: 'text' | 'json' | 'blob' = 'json';
        if (localVarHttpHeaderAcceptSelected) {
            if (localVarHttpHeaderAcceptSelected.startsWith('text')) {
                responseType_ = 'text';
            } else if (this.configuration.isJsonMime(localVarHttpHeaderAcceptSelected)) {
                responseType_ = 'json';
            } else {
                responseType_ = 'blob';
            }
        }

        let localVarPath = `/agent`;
        return this.httpClient.request<Agent>('post', `${this.configuration.basePath}${localVarPath}`,
            {
                context: localVarHttpContext,
                body: agent,
                responseType: <any>responseType_,
                withCredentials: this.configuration.withCredentials,
                headers: localVarHeaders,
                observe: observe,
                transferCache: localVarTransferCache,
                reportProgress: reportProgress
            }
        );
    }

    /**
     * Deletes an existing Kowabunga remote agent.
     * @param agentId The ID of the Kowabunga remote agent.
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public deleteAgent(agentId: string, observe?: 'body', reportProgress?: boolean, options?: {httpHeaderAccept?: 'application/json', context?: HttpContext, transferCache?: boolean}): Observable<any>;
    public deleteAgent(agentId: string, observe?: 'response', reportProgress?: boolean, options?: {httpHeaderAccept?: 'application/json', context?: HttpContext, transferCache?: boolean}): Observable<HttpResponse<any>>;
    public deleteAgent(agentId: string, observe?: 'events', reportProgress?: boolean, options?: {httpHeaderAccept?: 'application/json', context?: HttpContext, transferCache?: boolean}): Observable<HttpEvent<any>>;
    public deleteAgent(agentId: string, observe: any = 'body', reportProgress: boolean = false, options?: {httpHeaderAccept?: 'application/json', context?: HttpContext, transferCache?: boolean}): Observable<any> {
        if (agentId === null || agentId === undefined) {
            throw new Error('Required parameter agentId was null or undefined when calling deleteAgent.');
        }

        let localVarHeaders = this.defaultHeaders;

        // authentication (ApiKeyAuth) required
        localVarHeaders = this.configuration.addCredentialToHeaders('ApiKeyAuth', 'X-API-Key', localVarHeaders);

        // authentication (BearerAuth) required
        localVarHeaders = this.configuration.addCredentialToHeaders('BearerAuth', 'Authorization', localVarHeaders, 'Bearer ');

        const localVarHttpHeaderAcceptSelected: string | undefined = options?.httpHeaderAccept ?? this.configuration.selectHeaderAccept([
            'application/json'
        ]);
        if (localVarHttpHeaderAcceptSelected !== undefined) {
            localVarHeaders = localVarHeaders.set('Accept', localVarHttpHeaderAcceptSelected);
        }

        const localVarHttpContext: HttpContext = options?.context ?? new HttpContext();

        const localVarTransferCache: boolean = options?.transferCache ?? true;


        let responseType_: 'text' | 'json' | 'blob' = 'json';
        if (localVarHttpHeaderAcceptSelected) {
            if (localVarHttpHeaderAcceptSelected.startsWith('text')) {
                responseType_ = 'text';
            } else if (this.configuration.isJsonMime(localVarHttpHeaderAcceptSelected)) {
                responseType_ = 'json';
            } else {
                responseType_ = 'blob';
            }
        }

        let localVarPath = `/agent/${this.configuration.encodeParam({name: "agentId", value: agentId, in: "path", style: "simple", explode: false, dataType: "string", dataFormat: undefined})}`;
        return this.httpClient.request<any>('delete', `${this.configuration.basePath}${localVarPath}`,
            {
                context: localVarHttpContext,
                responseType: <any>responseType_,
                withCredentials: this.configuration.withCredentials,
                headers: localVarHeaders,
                observe: observe,
                transferCache: localVarTransferCache,
                reportProgress: reportProgress
            }
        );
    }

    /**
     * Returns the IDs of Kowabunga remote agent objects.
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public listAgents(observe?: 'body', reportProgress?: boolean, options?: {httpHeaderAccept?: 'application/json', context?: HttpContext, transferCache?: boolean}): Observable<Array<string>>;
    public listAgents(observe?: 'response', reportProgress?: boolean, options?: {httpHeaderAccept?: 'application/json', context?: HttpContext, transferCache?: boolean}): Observable<HttpResponse<Array<string>>>;
    public listAgents(observe?: 'events', reportProgress?: boolean, options?: {httpHeaderAccept?: 'application/json', context?: HttpContext, transferCache?: boolean}): Observable<HttpEvent<Array<string>>>;
    public listAgents(observe: any = 'body', reportProgress: boolean = false, options?: {httpHeaderAccept?: 'application/json', context?: HttpContext, transferCache?: boolean}): Observable<any> {

        let localVarHeaders = this.defaultHeaders;

        // authentication (ApiKeyAuth) required
        localVarHeaders = this.configuration.addCredentialToHeaders('ApiKeyAuth', 'X-API-Key', localVarHeaders);

        // authentication (BearerAuth) required
        localVarHeaders = this.configuration.addCredentialToHeaders('BearerAuth', 'Authorization', localVarHeaders, 'Bearer ');

        const localVarHttpHeaderAcceptSelected: string | undefined = options?.httpHeaderAccept ?? this.configuration.selectHeaderAccept([
            'application/json'
        ]);
        if (localVarHttpHeaderAcceptSelected !== undefined) {
            localVarHeaders = localVarHeaders.set('Accept', localVarHttpHeaderAcceptSelected);
        }

        const localVarHttpContext: HttpContext = options?.context ?? new HttpContext();

        const localVarTransferCache: boolean = options?.transferCache ?? true;


        let responseType_: 'text' | 'json' | 'blob' = 'json';
        if (localVarHttpHeaderAcceptSelected) {
            if (localVarHttpHeaderAcceptSelected.startsWith('text')) {
                responseType_ = 'text';
            } else if (this.configuration.isJsonMime(localVarHttpHeaderAcceptSelected)) {
                responseType_ = 'json';
            } else {
                responseType_ = 'blob';
            }
        }

        let localVarPath = `/agent`;
        return this.httpClient.request<Array<string>>('get', `${this.configuration.basePath}${localVarPath}`,
            {
                context: localVarHttpContext,
                responseType: <any>responseType_,
                withCredentials: this.configuration.withCredentials,
                headers: localVarHeaders,
                observe: observe,
                transferCache: localVarTransferCache,
                reportProgress: reportProgress
            }
        );
    }

    /**
     * Returns a Kowabunga remote agent.
     * @param agentId The ID of the Kowabunga remote agent.
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public readAgent(agentId: string, observe?: 'body', reportProgress?: boolean, options?: {httpHeaderAccept?: 'application/json', context?: HttpContext, transferCache?: boolean}): Observable<Agent>;
    public readAgent(agentId: string, observe?: 'response', reportProgress?: boolean, options?: {httpHeaderAccept?: 'application/json', context?: HttpContext, transferCache?: boolean}): Observable<HttpResponse<Agent>>;
    public readAgent(agentId: string, observe?: 'events', reportProgress?: boolean, options?: {httpHeaderAccept?: 'application/json', context?: HttpContext, transferCache?: boolean}): Observable<HttpEvent<Agent>>;
    public readAgent(agentId: string, observe: any = 'body', reportProgress: boolean = false, options?: {httpHeaderAccept?: 'application/json', context?: HttpContext, transferCache?: boolean}): Observable<any> {
        if (agentId === null || agentId === undefined) {
            throw new Error('Required parameter agentId was null or undefined when calling readAgent.');
        }

        let localVarHeaders = this.defaultHeaders;

        // authentication (ApiKeyAuth) required
        localVarHeaders = this.configuration.addCredentialToHeaders('ApiKeyAuth', 'X-API-Key', localVarHeaders);

        // authentication (BearerAuth) required
        localVarHeaders = this.configuration.addCredentialToHeaders('BearerAuth', 'Authorization', localVarHeaders, 'Bearer ');

        const localVarHttpHeaderAcceptSelected: string | undefined = options?.httpHeaderAccept ?? this.configuration.selectHeaderAccept([
            'application/json'
        ]);
        if (localVarHttpHeaderAcceptSelected !== undefined) {
            localVarHeaders = localVarHeaders.set('Accept', localVarHttpHeaderAcceptSelected);
        }

        const localVarHttpContext: HttpContext = options?.context ?? new HttpContext();

        const localVarTransferCache: boolean = options?.transferCache ?? true;


        let responseType_: 'text' | 'json' | 'blob' = 'json';
        if (localVarHttpHeaderAcceptSelected) {
            if (localVarHttpHeaderAcceptSelected.startsWith('text')) {
                responseType_ = 'text';
            } else if (this.configuration.isJsonMime(localVarHttpHeaderAcceptSelected)) {
                responseType_ = 'json';
            } else {
                responseType_ = 'blob';
            }
        }

        let localVarPath = `/agent/${this.configuration.encodeParam({name: "agentId", value: agentId, in: "path", style: "simple", explode: false, dataType: "string", dataFormat: undefined})}`;
        return this.httpClient.request<Agent>('get', `${this.configuration.basePath}${localVarPath}`,
            {
                context: localVarHttpContext,
                responseType: <any>responseType_,
                withCredentials: this.configuration.withCredentials,
                headers: localVarHeaders,
                observe: observe,
                transferCache: localVarTransferCache,
                reportProgress: reportProgress
            }
        );
    }

    /**
     * Performs a Kowabunga remote agent setting of API token (will replace any existing one).
     * @param agentId The ID of the Kowabunga remote agent.
     * @param expire Whether or not the token should expire.
     * @param expirationDate Token\&#39;s expiration date (YYYY-MM-DD format).
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public setAgentApiToken(agentId: string, expire?: boolean, expirationDate?: string, observe?: 'body', reportProgress?: boolean, options?: {httpHeaderAccept?: 'application/json', context?: HttpContext, transferCache?: boolean}): Observable<ApiToken>;
    public setAgentApiToken(agentId: string, expire?: boolean, expirationDate?: string, observe?: 'response', reportProgress?: boolean, options?: {httpHeaderAccept?: 'application/json', context?: HttpContext, transferCache?: boolean}): Observable<HttpResponse<ApiToken>>;
    public setAgentApiToken(agentId: string, expire?: boolean, expirationDate?: string, observe?: 'events', reportProgress?: boolean, options?: {httpHeaderAccept?: 'application/json', context?: HttpContext, transferCache?: boolean}): Observable<HttpEvent<ApiToken>>;
    public setAgentApiToken(agentId: string, expire?: boolean, expirationDate?: string, observe: any = 'body', reportProgress: boolean = false, options?: {httpHeaderAccept?: 'application/json', context?: HttpContext, transferCache?: boolean}): Observable<any> {
        if (agentId === null || agentId === undefined) {
            throw new Error('Required parameter agentId was null or undefined when calling setAgentApiToken.');
        }

        let localVarQueryParameters = new HttpParams({encoder: this.encoder});
        localVarQueryParameters = this.addToHttpParams(localVarQueryParameters,
          <any>expire, 'expire');
        localVarQueryParameters = this.addToHttpParams(localVarQueryParameters,
          <any>expirationDate, 'expiration_date');

        let localVarHeaders = this.defaultHeaders;

        // authentication (ApiKeyAuth) required
        localVarHeaders = this.configuration.addCredentialToHeaders('ApiKeyAuth', 'X-API-Key', localVarHeaders);

        // authentication (BearerAuth) required
        localVarHeaders = this.configuration.addCredentialToHeaders('BearerAuth', 'Authorization', localVarHeaders, 'Bearer ');

        const localVarHttpHeaderAcceptSelected: string | undefined = options?.httpHeaderAccept ?? this.configuration.selectHeaderAccept([
            'application/json'
        ]);
        if (localVarHttpHeaderAcceptSelected !== undefined) {
            localVarHeaders = localVarHeaders.set('Accept', localVarHttpHeaderAcceptSelected);
        }

        const localVarHttpContext: HttpContext = options?.context ?? new HttpContext();

        const localVarTransferCache: boolean = options?.transferCache ?? true;


        let responseType_: 'text' | 'json' | 'blob' = 'json';
        if (localVarHttpHeaderAcceptSelected) {
            if (localVarHttpHeaderAcceptSelected.startsWith('text')) {
                responseType_ = 'text';
            } else if (this.configuration.isJsonMime(localVarHttpHeaderAcceptSelected)) {
                responseType_ = 'json';
            } else {
                responseType_ = 'blob';
            }
        }

        let localVarPath = `/agent/${this.configuration.encodeParam({name: "agentId", value: agentId, in: "path", style: "simple", explode: false, dataType: "string", dataFormat: undefined})}/token`;
        return this.httpClient.request<ApiToken>('patch', `${this.configuration.basePath}${localVarPath}`,
            {
                context: localVarHttpContext,
                params: localVarQueryParameters,
                responseType: <any>responseType_,
                withCredentials: this.configuration.withCredentials,
                headers: localVarHeaders,
                observe: observe,
                transferCache: localVarTransferCache,
                reportProgress: reportProgress
            }
        );
    }

    /**
     * Updates a Kowabunga remote agent configuration.
     * @param agentId The ID of the Kowabunga remote agent.
     * @param agent Agent payload.
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public updateAgent(agentId: string, agent: Agent, observe?: 'body', reportProgress?: boolean, options?: {httpHeaderAccept?: 'application/json', context?: HttpContext, transferCache?: boolean}): Observable<Agent>;
    public updateAgent(agentId: string, agent: Agent, observe?: 'response', reportProgress?: boolean, options?: {httpHeaderAccept?: 'application/json', context?: HttpContext, transferCache?: boolean}): Observable<HttpResponse<Agent>>;
    public updateAgent(agentId: string, agent: Agent, observe?: 'events', reportProgress?: boolean, options?: {httpHeaderAccept?: 'application/json', context?: HttpContext, transferCache?: boolean}): Observable<HttpEvent<Agent>>;
    public updateAgent(agentId: string, agent: Agent, observe: any = 'body', reportProgress: boolean = false, options?: {httpHeaderAccept?: 'application/json', context?: HttpContext, transferCache?: boolean}): Observable<any> {
        if (agentId === null || agentId === undefined) {
            throw new Error('Required parameter agentId was null or undefined when calling updateAgent.');
        }
        if (agent === null || agent === undefined) {
            throw new Error('Required parameter agent was null or undefined when calling updateAgent.');
        }

        let localVarHeaders = this.defaultHeaders;

        // authentication (ApiKeyAuth) required
        localVarHeaders = this.configuration.addCredentialToHeaders('ApiKeyAuth', 'X-API-Key', localVarHeaders);

        // authentication (BearerAuth) required
        localVarHeaders = this.configuration.addCredentialToHeaders('BearerAuth', 'Authorization', localVarHeaders, 'Bearer ');

        const localVarHttpHeaderAcceptSelected: string | undefined = options?.httpHeaderAccept ?? this.configuration.selectHeaderAccept([
            'application/json'
        ]);
        if (localVarHttpHeaderAcceptSelected !== undefined) {
            localVarHeaders = localVarHeaders.set('Accept', localVarHttpHeaderAcceptSelected);
        }

        const localVarHttpContext: HttpContext = options?.context ?? new HttpContext();

        const localVarTransferCache: boolean = options?.transferCache ?? true;


        // to determine the Content-Type header
        const consumes: string[] = [
            'application/json'
        ];
        const httpContentTypeSelected: string | undefined = this.configuration.selectHeaderContentType(consumes);
        if (httpContentTypeSelected !== undefined) {
            localVarHeaders = localVarHeaders.set('Content-Type', httpContentTypeSelected);
        }

        let responseType_: 'text' | 'json' | 'blob' = 'json';
        if (localVarHttpHeaderAcceptSelected) {
            if (localVarHttpHeaderAcceptSelected.startsWith('text')) {
                responseType_ = 'text';
            } else if (this.configuration.isJsonMime(localVarHttpHeaderAcceptSelected)) {
                responseType_ = 'json';
            } else {
                responseType_ = 'blob';
            }
        }

        let localVarPath = `/agent/${this.configuration.encodeParam({name: "agentId", value: agentId, in: "path", style: "simple", explode: false, dataType: "string", dataFormat: undefined})}`;
        return this.httpClient.request<Agent>('put', `${this.configuration.basePath}${localVarPath}`,
            {
                context: localVarHttpContext,
                body: agent,
                responseType: <any>responseType_,
                withCredentials: this.configuration.withCredentials,
                headers: localVarHeaders,
                observe: observe,
                transferCache: localVarTransferCache,
                reportProgress: reportProgress
            }
        );
    }

}
