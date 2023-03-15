import { TraspasoDomainEntity } from '../../../entities/traspaso/traspaso.domain-entity';

export interface ITraspasoNegociadoResponse {
    success: boolean;
    data: TraspasoDomainEntity | null;
}
