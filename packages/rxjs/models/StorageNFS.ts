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

/**
 * A NFS storage.
 * @export
 * @interface StorageNFS
 */
export interface StorageNFS {
    /**
     * The NFS storage ID (auto-generated).
     * @type {string}
     * @memberof StorageNFS
     */
    id?: string;
    /**
     * The NFS storage name.
     * @type {string}
     * @memberof StorageNFS
     */
    name: string;
    /**
     * The NFS storage description.
     * @type {string}
     * @memberof StorageNFS
     */
    description?: string;
    /**
     * The associated NFS endpoint FQDN.
     * @type {string}
     * @memberof StorageNFS
     */
    endpoint: string;
    /**
     * The underlying associated Ceph volume name.
     * @type {string}
     * @memberof StorageNFS
     */
    fs?: string;
    /**
     * List of NFS Ganesha API server IP addresses.
     * @type {Array<string>}
     * @memberof StorageNFS
     */
    backends?: Array<string>;
    /**
     * NFS Ganesha API server port (default 54934).
     * @type {number}
     * @memberof StorageNFS
     */
    port?: number;
}
