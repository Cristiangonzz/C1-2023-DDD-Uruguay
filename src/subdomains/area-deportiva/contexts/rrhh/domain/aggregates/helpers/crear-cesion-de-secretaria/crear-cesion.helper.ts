import { AggregateRootException } from "../../../../../../../../libs/sofka/exceptions/aggregate-root.exception";

import { CesionDomainEntity } from '../../../entities/cesion/cesion.domain-entity';
import { ICesionDomainService } from '../../../services/secretaria/cesion.domain-service';
import { CesionNegociadoEventPublisher } from '../../../events/publishers';

export const CrearCesionHelper = async (
    entity: CesionDomainEntity,
    service?: ICesionDomainService,
    event?: CesionNegociadoEventPublisher,
):Promise<CesionDomainEntity> => { 
    if(!service)
    throw new AggregateRootException('CesionService no se encuentra definido')

    if(!event) throw new AggregateRootException('CesionNegociadoEventPublisher no se encuentra definido');

    const result = await service.NegociarCesion(entity);
    event.response = result;
    event.publish();
    return event.response;

}