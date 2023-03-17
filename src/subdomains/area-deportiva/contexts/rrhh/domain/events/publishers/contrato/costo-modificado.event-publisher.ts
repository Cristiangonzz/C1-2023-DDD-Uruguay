import { EventPublisherBase } from "src/libs";
import { ContratoDomainEntity } from "../../../entities/contrato/contrato.domain-entity";

export abstract class CostoContratoModificadoEventPublisher<Response = ContratoDomainEntity>
extends EventPublisherBase<Response>{
    
publish<Result = any>(): Promise<Result> {
    return this.emit(
        'rrhh.costo-contrato.modificado',
        JSON.stringify({ data: this.response })
    )
}
}