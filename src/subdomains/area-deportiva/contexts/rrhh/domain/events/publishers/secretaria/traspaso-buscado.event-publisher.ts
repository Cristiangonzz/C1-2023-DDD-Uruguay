import { EventPublisherBase } from "src/libs";
import { TraspasoDomainEntity } from "../../../entities";

export abstract class TraspasoBuscadaEventPublisher
<Response = TraspasoDomainEntity | null>
extends EventPublisherBase<Response>{
    
publish<Result = any>(): Promise<Result> {
    return this.emit(
        'rrhh.traspaso-buscado',
        JSON.stringify({ data: this.response })
    )
}
}