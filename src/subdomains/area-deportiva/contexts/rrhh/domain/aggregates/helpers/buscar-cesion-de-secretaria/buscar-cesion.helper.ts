import { CesionDomainEntity } from '../../../entities/cesion/cesion.domain-entity';
import { CesionBuscadaEventPublisher } from '../../../events/publishers/secretaria/cesion-buscada.event-publisher';
import { AggregateRootException } from '../../../../../../../../libs/sofka/exceptions/aggregate-root.exception';import { TramiteDomainEntity } from "../../../entities";
import { ICesionDomainService } from '../../../services/secretaria/cesion.domain-service';

export const BuscarCesionHelper = async (
    cesionId: string,
    service?: ICesionDomainService,
    event?: CesionBuscadaEventPublisher,
):Promise<CesionDomainEntity> => { 
    if(!service)
    throw new AggregateRootException('Servicio Cesion indefinido')

    if(!event) throw new AggregateRootException('Evento buscar cesion indefinido');

    const result = await service.BuscarCesion(cesionId);
    event.response = result;
    event.publish();
    return result;

}
