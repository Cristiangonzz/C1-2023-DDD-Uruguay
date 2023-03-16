import { EventPublisherBase } from 'src/libs';
import { TraspasoDomainEntity } from '../../../entities/traspaso/traspaso.domain-entity';
export  abstract class TraspasoNegociadoEventPublisher
<Response = TraspasoDomainEntity | null>
    extends EventPublisherBase<Response>{
        
    publish<Result = any>(): Promise<Result> {
        return this.emit(
            'rrhh.negociar-traspaso',
            JSON.stringify({ data: this.response })
        )
    }
}