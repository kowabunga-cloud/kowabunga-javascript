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
* A Kowabunga user email.
*/
export class UserEmail {
    /**
    * The user email address used for login.
    */
    'email': string;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "email",
            "baseName": "email",
            "type": "string"
        }    ];

    static getAttributeTypeMap() {
        return UserEmail.attributeTypeMap;
    }
}

