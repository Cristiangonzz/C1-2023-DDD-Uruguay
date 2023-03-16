import { TramiteAgregadoEventPublisher } from '../../../events/publishers/staff-deporitvo/tramite-agregado.event-publisher';
import { TramiteDomainEntity } from '../../../entities/tramite/tramite.entity.interface';
import { AggregateRootException } from "../../../../../../../../libs/sofka/exceptions/aggregate-root.exception";
import { ITramiteDomainService } from '../../../services/staff-Deportivo/tramite.domain-service';

export const  CrearTramiteHelper = async (
    entity: TramiteDomainEntity,
    service?: ITramiteDomainService,
    event?: TramiteAgregadoEventPublisher,
):Promise<TramiteDomainEntity> => { 
    
    if(!service)
    throw new AggregateRootException('Servicio Tramite indefinido')

    if(!event) throw new AggregateRootException('Evento creador Tramite indefinido');

    const result = await service.CrearTramite(entity);
    event.response = result;
    event.publish();
    return result;
}