import { EventPublisherBase } from "src/libs";
import { TramiteDomainEntity } from "../../../entities/tramite/tramite.entity.interface";

export abstract class NegociacionAgregadaEventPublisher extends EventPublisherBase<TramiteDomainEntity> {}
