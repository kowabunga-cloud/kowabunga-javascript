/**
 * Kowabunga API documentation
 *
 * Contact: maintainers@kowabunga.cloud
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
import { Cost } from './cost';


/**
 * A storage pool.
 */
export interface StoragePool { 
    /**
     * The storage pool ID (auto-generated).
     */
    id?: string;
    /**
     * The storage pool name.
     */
    name: string;
    /**
     * The storage pool description.
     */
    description?: string;
    /**
     * Ceph pool name.
     */
    pool: string;
    /**
     * Ceph Monitor(s) address or FQDN.
     */
    ceph_address?: string;
    /**
     * Ceph Monitor(s) port (default 3300).
     */
    ceph_port?: number;
    /**
     * The libvirt secret UUID for CephX authentication.
     */
    ceph_secret_uuid?: string;
    cost?: Cost;
    /**
     * a list of existing remote agents managing the storage pool.
     */
    agents: Array<string>;
}

