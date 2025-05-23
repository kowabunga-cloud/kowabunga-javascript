/**
 * Kowabunga API documentation
 *
 * Contact: maintainers@kowabunga.cloud
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


/**
 * A Kowabunga authentication security token consists of an API key granting access to resources.
 */
export interface ApiToken { 
    /**
     * The server-to-server authentication security token ID (auto-generated).
     */
    id?: string;
    /**
     * The server-to-server authentication security token name.
     */
    name: string;
    /**
     * The server-to-server authentication security token description.
     */
    description?: string;
    /**
     * Does the API token expires at some stage ?.
     */
    expire: boolean;
    /**
     * Expiration date of the token (YYYY-MM-DD format).
     */
    expiration_date?: string;
}

