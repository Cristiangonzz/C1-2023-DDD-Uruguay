import { EventPublisherBase } from "src/libs";
import { TramiteDomainEntity } from "../../../entities";

export class TramiteBuscadoEventPublisher<Response = TramiteDomainEntity | null>
extends EventPublisherBase<Response>{


publish<Result = any>(): Promise<Result> {
    return this.emit(
        'rrhh.tramite-buscado',
        JSON.stringify({ data: this.response })
    )
    }
}

