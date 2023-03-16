import { EventPublisherBase } from "src/libs";
import { SecretariaDomainEntity } from "../../../entities/secretaria/secretaria.domain-entity";

export abstract class secretariaCreadaEventPublisher<Response = SecretariaDomainEntity | null>
extends EventPublisherBase<Response>{
    
publish<Result = any>(): Promise<Result> {
    return this.emit(
        'rrhh.secretaria-creada',
        JSON.stringify({ data: this.response })
    )
}
}