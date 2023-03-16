import { EmpleadoBuscadoEventPublisher } from '../../../events/publishers/staff-deporitvo/empleado-buscado.event-publisher';
import { AggregateRootException } from '../../../../../../../../libs/sofka/exceptions/aggregate-root.exception';import { TramiteDomainEntity } from "../../../entities";
import { EmpleadoDomainEntity } from '../../../entities';
import { IEmpleadoDomainService } from '../../../services/staff-Deportivo/empleado.domain-service';

export const BuscarEmpleadoHelper = async (
    empleadoId: string,
    service?: IEmpleadoDomainService,
    event?: EmpleadoBuscadoEventPublisher,
):Promise<EmpleadoDomainEntity> => { 
    
    if(!service)
    throw new AggregateRootException('Servicio Empleado indefinido')

    if(!event) throw new AggregateRootException('Evento Buscar Empleado indefinido');

    const result = await service.BuscarEmpleado(empleadoId);
    event.response = result;
    event.publish();
    return result;

}