import { AggregateRootException } from '../../../../../../../../libs/sofka/exceptions/aggregate-root.exception';import { TramiteDomainEntity } from "../../../entities";
import { ContratoBuscadaEventPublisher } from '../../../events/publishers/secretaria/contrato-buscado.event-publisher';
import { ContratoDomainEntity } from '../../../entities/contrato/contrato.domain-entity';
import { IContratoDomainService } from '../../../services/secretaria/contrato.domain-service';

export const BuscarContratoHelper = async (
    contratoId: string,
    service?: IContratoDomainService,
    event?: ContratoBuscadaEventPublisher,
):Promise<ContratoDomainEntity> => { 
    if(!service)
    throw new AggregateRootException('Servicio Contrato indefinido')

    if(!event) throw new AggregateRootException('Evento buscar contrato indefinido');

    const result = await service.BuscarContrato(contratoId);
    event.response = result;
    event.publish();
    return result;

}