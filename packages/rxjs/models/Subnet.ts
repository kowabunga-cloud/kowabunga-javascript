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

import type {
    IpRange,
} from './';

/**
 * A network subnet.
 * @export
 * @interface Subnet
 */
export interface Subnet {
    /**
     * The network subnet ID (auto-generated).
     * @type {string}
     * @memberof Subnet
     */
    id?: string;
    /**
     * The network subnet name.
     * @type {string}
     * @memberof Subnet
     */
    name: string;
    /**
     * The network subnet description.
     * @type {string}
     * @memberof Subnet
     */
    description?: string;
    /**
     * The network subnet CIDR (e.g. 192.168.0.0/24).
     * @type {string}
     * @memberof Subnet
     */
    cidr: string;
    /**
     * The network subnet router/gateway IP address (e.g. 192.168.0.254).
     * @type {string}
     * @memberof Subnet
     */
    gateway: string;
    /**
     * The network subnet DNS server IP address (gateway value if unspecified).
     * @type {string}
     * @memberof Subnet
     */
    dns?: string;
    /**
     * The list of extra routes to be access through designated gateway (format is 10.0.0.0/8).
     * @type {Array<string>}
     * @memberof Subnet
     */
    extra_routes?: Array<string>;
    /**
     * The network subnet reserved IPv4 ranges (i.e. no IP address can be assigned from there).
     * @type {Array<IpRange>}
     * @memberof Subnet
     */
    reserved?: Array<IpRange>;
    /**
     * The network subnet IPv4 ranges reserved for per-zone local network gateways (range size must be at least equal to region number of zones).
     * @type {Array<IpRange>}
     * @memberof Subnet
     */
    gw_pool?: Array<IpRange>;
    /**
     * Optional application service type.
     * @type {string}
     * @memberof Subnet
     */
    application?: SubnetApplicationEnum;
}

/**
 * @export
 * @enum {string}
 */
export enum SubnetApplicationEnum {
    Ceph = 'ceph',
    User = 'user'
}

