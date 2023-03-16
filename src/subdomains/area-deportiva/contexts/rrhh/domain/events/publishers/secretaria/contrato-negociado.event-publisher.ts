import { EventPublisherBase } from "src/libs";
import { SecretariaDomainEntity } from "../../../entities/secretaria/secretaria.domain-entity";
import { ContratoDomainEntity } from '../../../entities/contrato/contrato.domain-entity';

export abstract  class ContratoNegociadoEventPublisher
<Response = ContratoDomainEntity>
extends EventPublisherBase<Response>{
    
publish<Result = any>(): Promise<Result> {
    return this.emit(
        'rrhh.contrato-negociado',
        JSON.stringify({ data: this.response })
    )
}
}