import localVarRequest from 'request';

export * from './adapter';
export * from './agent';
export * from './apiErrorBadRequest';
export * from './apiErrorConflict';
export * from './apiErrorForbidden';
export * from './apiErrorInsufficientResource';
export * from './apiErrorNotFound';
export * from './apiErrorUnauthorized';
export * from './apiErrorUnprocessableEntity';
export * from './apiToken';
export * from './cost';
export * from './dnsRecord';
export * from './instance';
export * from './instanceRemoteAccess';
export * from './instanceState';
export * from './ipRange';
export * from './kaktus';
export * from './kaktusCPU';
export * from './kaktusCaps';
export * from './kawaii';
export * from './kawaiiDNatRule';
export * from './kawaiiFirewall';
export * from './kawaiiFirewallEgressRule';
export * from './kawaiiFirewallIngressRule';
export * from './kawaiiIpSec';
export * from './kawaiiNetIp';
export * from './kawaiiNetIpZone';
export * from './kawaiiVpcForwardRule';
export * from './kawaiiVpcNetIpZone';
export * from './kawaiiVpcPeering';
export * from './kiwi';
export * from './kompute';
export * from './konvey';
export * from './konveyBackends';
export * from './konveyEndpoint';
export * from './kylo';
export * from './metadata';
export * from './password';
export * from './project';
export * from './projectResources';
export * from './region';
export * from './regionSubnet';
export * from './storageNFS';
export * from './storagePool';
export * from './subnet';
export * from './team';
export * from './template';
export * from './user';
export * from './userCredentials';
export * from './userEmail';
export * from './vNet';
export * from './volume';
export * from './zone';

import * as fs from 'fs';

export interface RequestDetailedFile {
    value: Buffer;
    options?: {
        filename?: string;
        contentType?: string;
    }
}

export type RequestFile = string | Buffer | fs.ReadStream | RequestDetailedFile;


import { Adapter } from './adapter';
import { Agent } from './agent';
import { ApiErrorBadRequest } from './apiErrorBadRequest';
import { ApiErrorConflict } from './apiErrorConflict';
import { ApiErrorForbidden } from './apiErrorForbidden';
import { ApiErrorInsufficientResource } from './apiErrorInsufficientResource';
import { ApiErrorNotFound } from './apiErrorNotFound';
import { ApiErrorUnauthorized } from './apiErrorUnauthorized';
import { ApiErrorUnprocessableEntity } from './apiErrorUnprocessableEntity';
import { ApiToken } from './apiToken';
import { Cost } from './cost';
import { DnsRecord } from './dnsRecord';
import { Instance } from './instance';
import { InstanceRemoteAccess } from './instanceRemoteAccess';
import { InstanceState } from './instanceState';
import { IpRange } from './ipRange';
import { Kaktus } from './kaktus';
import { KaktusCPU } from './kaktusCPU';
import { KaktusCaps } from './kaktusCaps';
import { Kawaii } from './kawaii';
import { KawaiiDNatRule } from './kawaiiDNatRule';
import { KawaiiFirewall } from './kawaiiFirewall';
import { KawaiiFirewallEgressRule } from './kawaiiFirewallEgressRule';
import { KawaiiFirewallIngressRule } from './kawaiiFirewallIngressRule';
import { KawaiiIpSec } from './kawaiiIpSec';
import { KawaiiNetIp } from './kawaiiNetIp';
import { KawaiiNetIpZone } from './kawaiiNetIpZone';
import { KawaiiVpcForwardRule } from './kawaiiVpcForwardRule';
import { KawaiiVpcNetIpZone } from './kawaiiVpcNetIpZone';
import { KawaiiVpcPeering } from './kawaiiVpcPeering';
import { Kiwi } from './kiwi';
import { Kompute } from './kompute';
import { Konvey } from './konvey';
import { KonveyBackends } from './konveyBackends';
import { KonveyEndpoint } from './konveyEndpoint';
import { Kylo } from './kylo';
import { Metadata } from './metadata';
import { Password } from './password';
import { Project } from './project';
import { ProjectResources } from './projectResources';
import { Region } from './region';
import { RegionSubnet } from './regionSubnet';
import { StorageNFS } from './storageNFS';
import { StoragePool } from './storagePool';
import { Subnet } from './subnet';
import { Team } from './team';
import { Template } from './template';
import { User } from './user';
import { UserCredentials } from './userCredentials';
import { UserEmail } from './userEmail';
import { VNet } from './vNet';
import { Volume } from './volume';
import { Zone } from './zone';

/* tslint:disable:no-unused-variable */
let primitives = [
                    "string",
                    "boolean",
                    "double",
                    "integer",
                    "long",
                    "float",
                    "number",
                    "any"
                 ];

let enumsMap: {[index: string]: any} = {
        "Agent.TypeEnum": Agent.TypeEnum,
        "KawaiiDNatRule.ProtocolEnum": KawaiiDNatRule.ProtocolEnum,
        "KawaiiFirewall.EgressPolicyEnum": KawaiiFirewall.EgressPolicyEnum,
        "KawaiiFirewallEgressRule.ProtocolEnum": KawaiiFirewallEgressRule.ProtocolEnum,
        "KawaiiFirewallIngressRule.ProtocolEnum": KawaiiFirewallIngressRule.ProtocolEnum,
        "KawaiiIpSec.DpdTimeoutActionEnum": KawaiiIpSec.DpdTimeoutActionEnum,
        "KawaiiIpSec.StartActionEnum": KawaiiIpSec.StartActionEnum,
        "KawaiiIpSec.Phase1DhGroupNumberEnum": KawaiiIpSec.Phase1DhGroupNumberEnum,
        "KawaiiIpSec.Phase1IntegrityAlgorithmEnum": KawaiiIpSec.Phase1IntegrityAlgorithmEnum,
        "KawaiiIpSec.Phase1EncryptionAlgorithmEnum": KawaiiIpSec.Phase1EncryptionAlgorithmEnum,
        "KawaiiIpSec.Phase2DhGroupNumberEnum": KawaiiIpSec.Phase2DhGroupNumberEnum,
        "KawaiiIpSec.Phase2IntegrityAlgorithmEnum": KawaiiIpSec.Phase2IntegrityAlgorithmEnum,
        "KawaiiIpSec.Phase2EncryptionAlgorithmEnum": KawaiiIpSec.Phase2EncryptionAlgorithmEnum,
        "KawaiiVpcForwardRule.ProtocolEnum": KawaiiVpcForwardRule.ProtocolEnum,
        "KawaiiVpcPeering.PolicyEnum": KawaiiVpcPeering.PolicyEnum,
        "KonveyEndpoint.ProtocolEnum": KonveyEndpoint.ProtocolEnum,
        "Kylo.AccessEnum": Kylo.AccessEnum,
        "Kylo.ProtocolsEnum": Kylo.ProtocolsEnum,
        "Subnet.ApplicationEnum": Subnet.ApplicationEnum,
        "Template.OsEnum": Template.OsEnum,
        "User.RoleEnum": User.RoleEnum,
        "Volume.TypeEnum": Volume.TypeEnum,
}

let typeMap: {[index: string]: any} = {
    "Adapter": Adapter,
    "Agent": Agent,
    "ApiErrorBadRequest": ApiErrorBadRequest,
    "ApiErrorConflict": ApiErrorConflict,
    "ApiErrorForbidden": ApiErrorForbidden,
    "ApiErrorInsufficientResource": ApiErrorInsufficientResource,
    "ApiErrorNotFound": ApiErrorNotFound,
    "ApiErrorUnauthorized": ApiErrorUnauthorized,
    "ApiErrorUnprocessableEntity": ApiErrorUnprocessableEntity,
    "ApiToken": ApiToken,
    "Cost": Cost,
    "DnsRecord": DnsRecord,
    "Instance": Instance,
    "InstanceRemoteAccess": InstanceRemoteAccess,
    "InstanceState": InstanceState,
    "IpRange": IpRange,
    "Kaktus": Kaktus,
    "KaktusCPU": KaktusCPU,
    "KaktusCaps": KaktusCaps,
    "Kawaii": Kawaii,
    "KawaiiDNatRule": KawaiiDNatRule,
    "KawaiiFirewall": KawaiiFirewall,
    "KawaiiFirewallEgressRule": KawaiiFirewallEgressRule,
    "KawaiiFirewallIngressRule": KawaiiFirewallIngressRule,
    "KawaiiIpSec": KawaiiIpSec,
    "KawaiiNetIp": KawaiiNetIp,
    "KawaiiNetIpZone": KawaiiNetIpZone,
    "KawaiiVpcForwardRule": KawaiiVpcForwardRule,
    "KawaiiVpcNetIpZone": KawaiiVpcNetIpZone,
    "KawaiiVpcPeering": KawaiiVpcPeering,
    "Kiwi": Kiwi,
    "Kompute": Kompute,
    "Konvey": Konvey,
    "KonveyBackends": KonveyBackends,
    "KonveyEndpoint": KonveyEndpoint,
    "Kylo": Kylo,
    "Metadata": Metadata,
    "Password": Password,
    "Project": Project,
    "ProjectResources": ProjectResources,
    "Region": Region,
    "RegionSubnet": RegionSubnet,
    "StorageNFS": StorageNFS,
    "StoragePool": StoragePool,
    "Subnet": Subnet,
    "Team": Team,
    "Template": Template,
    "User": User,
    "UserCredentials": UserCredentials,
    "UserEmail": UserEmail,
    "VNet": VNet,
    "Volume": Volume,
    "Zone": Zone,
}

// Check if a string starts with another string without using es6 features
function startsWith(str: string, match: string): boolean {
    return str.substring(0, match.length) === match;
}

// Check if a string ends with another string without using es6 features
function endsWith(str: string, match: string): boolean {
    return str.length >= match.length && str.substring(str.length - match.length) === match;
}

const nullableSuffix = " | null";
const optionalSuffix = " | undefined";
const arrayPrefix = "Array<";
const arraySuffix = ">";
const mapPrefix = "{ [key: string]: ";
const mapSuffix = "; }";

export class ObjectSerializer {
    public static findCorrectType(data: any, expectedType: string) {
        if (data == undefined) {
            return expectedType;
        } else if (primitives.indexOf(expectedType.toLowerCase()) !== -1) {
            return expectedType;
        } else if (expectedType === "Date") {
            return expectedType;
        } else {
            if (enumsMap[expectedType]) {
                return expectedType;
            }

            if (!typeMap[expectedType]) {
                return expectedType; // w/e we don't know the type
            }

            // Check the discriminator
            let discriminatorProperty = typeMap[expectedType].discriminator;
            if (discriminatorProperty == null) {
                return expectedType; // the type does not have a discriminator. use it.
            } else {
                if (data[discriminatorProperty]) {
                    var discriminatorType = data[discriminatorProperty];
                    if(typeMap[discriminatorType]){
                        return discriminatorType; // use the type given in the discriminator
                    } else {
                        return expectedType; // discriminator did not map to a type
                    }
                } else {
                    return expectedType; // discriminator was not present (or an empty string)
                }
            }
        }
    }

    public static serialize(data: any, type: string): any {
        if (data == undefined) {
            return data;
        } else if (primitives.indexOf(type.toLowerCase()) !== -1) {
            return data;
        } else if (endsWith(type, nullableSuffix)) {
            let subType: string = type.slice(0, -nullableSuffix.length); // Type | null => Type
            return ObjectSerializer.serialize(data, subType);
        } else if (endsWith(type, optionalSuffix)) {
            let subType: string = type.slice(0, -optionalSuffix.length); // Type | undefined => Type
            return ObjectSerializer.serialize(data, subType);
        } else if (startsWith(type, arrayPrefix)) {
            let subType: string = type.slice(arrayPrefix.length, -arraySuffix.length); // Array<Type> => Type
            let transformedData: any[] = [];
            for (let index = 0; index < data.length; index++) {
                let datum = data[index];
                transformedData.push(ObjectSerializer.serialize(datum, subType));
            }
            return transformedData;
        } else if (startsWith(type, mapPrefix)) {
            let subType: string = type.slice(mapPrefix.length, -mapSuffix.length); // { [key: string]: Type; } => Type
            let transformedData: { [key: string]: any } = {};
            for (let key in data) {
                transformedData[key] = ObjectSerializer.serialize(
                    data[key],
                    subType,
                );
            }
            return transformedData;
        } else if (type === "Date") {
            return data.toISOString();
        } else {
            if (enumsMap[type]) {
                return data;
            }
            if (!typeMap[type]) { // in case we dont know the type
                return data;
            }

            // Get the actual type of this object
            type = this.findCorrectType(data, type);

            // get the map for the correct type.
            let attributeTypes = typeMap[type].getAttributeTypeMap();
            let instance: {[index: string]: any} = {};
            for (let index = 0; index < attributeTypes.length; index++) {
                let attributeType = attributeTypes[index];
                instance[attributeType.baseName] = ObjectSerializer.serialize(data[attributeType.name], attributeType.type);
            }
            return instance;
        }
    }

    public static deserialize(data: any, type: string): any {
        // polymorphism may change the actual type.
        type = ObjectSerializer.findCorrectType(data, type);
        if (data == undefined) {
            return data;
        } else if (primitives.indexOf(type.toLowerCase()) !== -1) {
            return data;
        } else if (endsWith(type, nullableSuffix)) {
            let subType: string = type.slice(0, -nullableSuffix.length); // Type | null => Type
            return ObjectSerializer.deserialize(data, subType);
        } else if (endsWith(type, optionalSuffix)) {
            let subType: string = type.slice(0, -optionalSuffix.length); // Type | undefined => Type
            return ObjectSerializer.deserialize(data, subType);
        } else if (startsWith(type, arrayPrefix)) {
            let subType: string = type.slice(arrayPrefix.length, -arraySuffix.length); // Array<Type> => Type
            let transformedData: any[] = [];
            for (let index = 0; index < data.length; index++) {
                let datum = data[index];
                transformedData.push(ObjectSerializer.deserialize(datum, subType));
            }
            return transformedData;
        } else if (startsWith(type, mapPrefix)) {
            let subType: string = type.slice(mapPrefix.length, -mapSuffix.length); // { [key: string]: Type; } => Type
            let transformedData: { [key: string]: any } = {};
            for (let key in data) {
                transformedData[key] = ObjectSerializer.deserialize(
                    data[key],
                    subType,
                );
            }
            return transformedData;
        } else if (type === "Date") {
            return new Date(data);
        } else {
            if (enumsMap[type]) {// is Enum
                return data;
            }

            if (!typeMap[type]) { // dont know the type
                return data;
            }
            let instance = new typeMap[type]();
            let attributeTypes = typeMap[type].getAttributeTypeMap();
            for (let index = 0; index < attributeTypes.length; index++) {
                let attributeType = attributeTypes[index];
                instance[attributeType.name] = ObjectSerializer.deserialize(data[attributeType.baseName], attributeType.type);
            }
            return instance;
        }
    }
}

export interface Authentication {
    /**
    * Apply authentication settings to header and query params.
    */
    applyToRequest(requestOptions: localVarRequest.Options): Promise<void> | void;
}

export class HttpBasicAuth implements Authentication {
    public username: string = '';
    public password: string = '';

    applyToRequest(requestOptions: localVarRequest.Options): void {
        requestOptions.auth = {
            username: this.username, password: this.password
        }
    }
}

export class HttpBearerAuth implements Authentication {
    public accessToken: string | (() => string) = '';

    applyToRequest(requestOptions: localVarRequest.Options): void {
        if (requestOptions && requestOptions.headers) {
            const accessToken = typeof this.accessToken === 'function'
                            ? this.accessToken()
                            : this.accessToken;
            requestOptions.headers["Authorization"] = "Bearer " + accessToken;
        }
    }
}

export class ApiKeyAuth implements Authentication {
    public apiKey: string = '';

    constructor(private location: string, private paramName: string) {
    }

    applyToRequest(requestOptions: localVarRequest.Options): void {
        if (this.location == "query") {
            (<any>requestOptions.qs)[this.paramName] = this.apiKey;
        } else if (this.location == "header" && requestOptions && requestOptions.headers) {
            requestOptions.headers[this.paramName] = this.apiKey;
        } else if (this.location == 'cookie' && requestOptions && requestOptions.headers) {
            if (requestOptions.headers['Cookie']) {
                requestOptions.headers['Cookie'] += '; ' + this.paramName + '=' + encodeURIComponent(this.apiKey);
            }
            else {
                requestOptions.headers['Cookie'] = this.paramName + '=' + encodeURIComponent(this.apiKey);
            }
        }
    }
}

export class OAuth implements Authentication {
    public accessToken: string = '';

    applyToRequest(requestOptions: localVarRequest.Options): void {
        if (requestOptions && requestOptions.headers) {
            requestOptions.headers["Authorization"] = "Bearer " + this.accessToken;
        }
    }
}

export class VoidAuth implements Authentication {
    public username: string = '';
    public password: string = '';

    applyToRequest(_: localVarRequest.Options): void {
        // Do nothing
    }
}

export type Interceptor = (requestOptions: localVarRequest.Options) => (Promise<void> | void);
