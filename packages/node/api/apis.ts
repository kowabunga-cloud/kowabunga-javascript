export * from './adapterApi';
import { AdapterApi } from './adapterApi';
export * from './agentApi';
import { AgentApi } from './agentApi';
export * from './instanceApi';
import { InstanceApi } from './instanceApi';
export * from './kaktusApi';
import { KaktusApi } from './kaktusApi';
export * from './kawaiiApi';
import { KawaiiApi } from './kawaiiApi';
export * from './kiwiApi';
import { KiwiApi } from './kiwiApi';
export * from './komputeApi';
import { KomputeApi } from './komputeApi';
export * from './konveyApi';
import { KonveyApi } from './konveyApi';
export * from './kyloApi';
import { KyloApi } from './kyloApi';
export * from './nfsApi';
import { NfsApi } from './nfsApi';
export * from './poolApi';
import { PoolApi } from './poolApi';
export * from './projectApi';
import { ProjectApi } from './projectApi';
export * from './recordApi';
import { RecordApi } from './recordApi';
export * from './regionApi';
import { RegionApi } from './regionApi';
export * from './subnetApi';
import { SubnetApi } from './subnetApi';
export * from './teamApi';
import { TeamApi } from './teamApi';
export * from './templateApi';
import { TemplateApi } from './templateApi';
export * from './tokenApi';
import { TokenApi } from './tokenApi';
export * from './userApi';
import { UserApi } from './userApi';
export * from './vnetApi';
import { VnetApi } from './vnetApi';
export * from './volumeApi';
import { VolumeApi } from './volumeApi';
export * from './zoneApi';
import { ZoneApi } from './zoneApi';
import * as http from 'http';

export class HttpError extends Error {
    constructor (public response: http.IncomingMessage, public body: any, public statusCode?: number) {
        super('HTTP request failed');
        this.name = 'HttpError';
    }
}

export { RequestFile } from '../model/models';

export const APIS = [AdapterApi, AgentApi, InstanceApi, KaktusApi, KawaiiApi, KiwiApi, KomputeApi, KonveyApi, KyloApi, NfsApi, PoolApi, ProjectApi, RecordApi, RegionApi, SubnetApi, TeamApi, TemplateApi, TokenApi, UserApi, VnetApi, VolumeApi, ZoneApi];
