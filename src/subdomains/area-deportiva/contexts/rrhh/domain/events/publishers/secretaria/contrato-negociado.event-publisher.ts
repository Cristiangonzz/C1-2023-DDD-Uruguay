import { EventPublisherBase } from "src/libs";
import { ContratoDomainEntity } from '../../../entities/contrato/contrato.domain-entity';

export abstract  class ContratoNegociadoEventPublisher
<Response = ContratoDomainEntity | null>
extends EventPublisherBase<Response>{
    
publish<Result = any>(): Promise<Result> {
    return this.emit(
        'rrhh.contrato-negociado',
        JSON.stringify({ data: this.response })
    )
}
}