
import { EmpleadoDomainEntity } from '../../../entities/empleado/EmpleadoDomainEntity';
import { IEmpleadoDomainService } from '../../../services/staff-Deportivo/empleado.domain-service';
import { NombreModificadoEventPublisher } from '../../../events/publishers/empleado/nombre-modificado.event-publisher';
import { AggregateRootException } from "../../../../../../../../libs/sofka/exceptions/aggregate-root.exception";
export const  ModificarNombreEmpleadoHelper = async (
    empleadoId:string,
    entity: EmpleadoDomainEntity,
    service?: IEmpleadoDomainService,
    event?: NombreModificadoEventPublisher,
):Promise<EmpleadoDomainEntity> => { 
    
    if(!service)
    throw new AggregateRootException('Servicio Empleado indefinido')

    if(!event) throw new AggregateRootException('Evento modificar nombre indefinido');

    const result = await service.modificarNombre(empleadoId,entity);
    event.response = result;
    event.publish();
    return result;

}
