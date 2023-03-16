import { AggregateRootException } from "../../../../../../../../libs/sofka/exceptions/aggregate-root.exception";
import { EmpleadoDomainEntity } from '../../../entities/empleado/EmpleadoDomainEntity';
import { EmpleadoAgregadoEventPublisher } from '../../../events/publishers/staff-deporitvo/empleado-agregado.event-publisher';
import { IEmpleadoDomainService } from '../../../services/staff-Deportivo/empleado.domain-service';

export const CrearEmpleadoHelper = async (
    entity: EmpleadoDomainEntity,
    service?: IEmpleadoDomainService,
    event?: EmpleadoAgregadoEventPublisher,
):Promise<EmpleadoDomainEntity> => { 
    
    if(!service)
    throw new AggregateRootException('EmpleadoService no se encuentra definido')

    if(!event) throw new AggregateRootException('EmpleadoAgregadoEventPublisher no se encuentra definido');

    const result = await service.AgregarEmpleado(entity);
    event.response = result;
    event.publish();
    return event.response;
}