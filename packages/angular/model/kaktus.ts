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
 * A Kaktus (Kowabunga Affordable KVM and Tight Underneath Storage) is an hyper-converged infrastructure (HCI) bare-metal node offering computing and distributed storage capabilites.
 */
export interface Kaktus { 
    /**
     * The Kaktus computing node ID (auto-generated).
     */
    id?: string;
    /**
     * The Kaktus computing node name.
     */
    name: string;
    /**
     * The Kaktus computing node description.
     */
    description?: string;
    cpu_cost?: Cost;
    memory_cost?: Cost;
    /**
     * The Kaktus node CPU resource over-commit ratio. Overcommitting CPU resources for VMs means allocating more virtual CPUs (vCPUs) to the virtual machines (VMs) than the physical cores available on the node. This can help optimize the utilization of the node CPU and increase the density of VMs per node.
     */
    overcommit_cpu_ratio?: number;
    /**
     * The Kaktus node memory resource over-commit ratio. Memory overcommitment is a concept in computing that covers the assignment of more memory to virtual computing devices (or processes) than the physical machine they are hosted, or running on, actually has.
     */
    overcommit_memory_ratio?: number;
    /**
     * a list of existing remote agents managing the Kaktus node.
     */
    agents: Array<string>;
}

