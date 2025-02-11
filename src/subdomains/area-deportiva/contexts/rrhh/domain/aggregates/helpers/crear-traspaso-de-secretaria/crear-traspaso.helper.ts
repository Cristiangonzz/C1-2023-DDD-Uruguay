import { AggregateRootException } from "../../../../../../../../libs/sofka/exceptions/aggregate-root.exception";
import { TraspasoDomainEntity } from '../../../entities';
import { TraspasoNegociadoEventPublisher } from '../../../events/publishers/secretaria/traspaso-negociado.event-publisher';
import { ITraspasoDomainService } from '../../../services/secretaria/traspaso.domain-service';

export const CrearTraspasoHelper = async (
    entity: TraspasoDomainEntity,
    service?: ITraspasoDomainService,
    event?: TraspasoNegociadoEventPublisher,
):Promise<TraspasoDomainEntity> => { 
    if(!service)
    throw new AggregateRootException('Servicio Traspaso indefinido')

    if(!event) throw new AggregateRootException('Evento Crear traspaso indefinido');

    const result = await service.NegociarTraspaso(entity);
    event.response = result;
    event.publish();
    return result;

}