import { TramiteDomainEntity } from '../../../entities/tramite/tramite.entity.interface';

export interface ITamiteBuscadoResponse {
    success: boolean;
    data: TramiteDomainEntity | null;
}
