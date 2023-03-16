import { EventPublisherBase } from "src/libs";
import { CesionDomainEntity } from '../../../entities/cesion/cesion.domain-entity';

export abstract class CesionNegociadoEventPublisher
<Response = CesionDomainEntity | null>
extends EventPublisherBase<Response>{
    
publish<Result = any>(): Promise<Result> {
    return this.emit(
        'rrhh.cesion-negociada',
        JSON.stringify({ data: this.response })
    )
}
}