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

import { RequestFile } from './models';

/**
* A Kowabunga remote agent.
*/
export class Agent {
    /**
    * The Kowabunga remote agent ID (auto-generated).
    */
    'id'?: string;
    /**
    * The Kowabunga remote agent name.
    */
    'name': string;
    /**
    * The Kowabunga remote agent description.
    */
    'description'?: string;
    /**
    * The Kowabunga agent type.
    */
    'type': Agent.TypeEnum;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "id",
            "baseName": "id",
            "type": "string"
        },
        {
            "name": "name",
            "baseName": "name",
            "type": "string"
        },
        {
            "name": "description",
            "baseName": "description",
            "type": "string"
        },
        {
            "name": "type",
            "baseName": "type",
            "type": "Agent.TypeEnum"
        }    ];

    static getAttributeTypeMap() {
        return Agent.attributeTypeMap;
    }
}

export namespace Agent {
    export enum TypeEnum {
        Kiwi = <any> 'Kiwi',
        Kaktus = <any> 'Kaktus'
    }
}
