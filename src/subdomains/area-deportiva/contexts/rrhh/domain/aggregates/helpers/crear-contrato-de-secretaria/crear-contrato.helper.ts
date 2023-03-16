import { AggregateRootException } from "../../../../../../../../libs/sofka/exceptions/aggregate-root.exception";
import { ContratoDomainEntity } from '../../../entities/contrato/contrato.domain-entity';
import { IContratoDomainService } from '../../../services/secretaria/contrato.domain-service';
import { ContratoNegociadoEventPublisher } from '../../../events/publishers';

export const CrearContratoHelper = async (
    entity: ContratoDomainEntity,
    service?: IContratoDomainService,
    event?: ContratoNegociadoEventPublisher,
):Promise<ContratoDomainEntity> => { 
    if(!service)
    throw new AggregateRootException('ContratoService no se encuentra definido')

    if(!event) throw new AggregateRootException('ContratoNegociadoEventPublisher no se encuentra definido');

    const result = await service.NegociarContrato(entity);
    event.response = result;
    event.publish();
    return event.response

}