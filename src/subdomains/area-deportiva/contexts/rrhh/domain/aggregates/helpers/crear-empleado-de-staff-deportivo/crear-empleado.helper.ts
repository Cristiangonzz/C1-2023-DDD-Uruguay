import { AggregateRootException } from 'src/libs';
import { EmpleadoDomainEntity } from '../../../entities/empleado/EmpleadoDomainEntity';
import { EmpleadoAgregadoEventPublisher } from '../../../events/publishers/staff-deporitvo/empleado-agregado.event-publisher';
import { IEmpleadoDomainService } from '../../../services/staff-Deportivo/empleado.domain-service';

export const CrearEmpleadoHelper = async (
    entity: EmpleadoDomainEntity,
    service?: IEmpleadoDomainService,
    event?: EmpleadoAgregadoEventPublisher,
):Promise<EmpleadoDomainEntity> => { 
    
    if(!service)
    throw new AggregateRootException('Servicio Empleado indefinido')

    if(!event) throw new AggregateRootException('Evento creador de Empleado indefinido');

    const result = await service.AgregarEmpleado(entity);
    event.response = result;
    event.publish();
    return result;
}