import { EmpleadoDomainEntity } from '../../../entities/empleado/EmpleadoDomainEntity';
import { IEmpleadoDomainService } from '../../../services/staff-Deportivo/empleado.domain-service';
import { AggregateRootException } from "../../../../../../../../libs/sofka/exceptions/aggregate-root.exception";
import { TipoEmpleadoModificadoEventPublisher } from '../../../events/publishers/empleado/tipo-empleado-modificado';
export const  ModificarTipoEmpleadoHelper = async (
    empleadoId:string,
    entity: EmpleadoDomainEntity,
    service?: IEmpleadoDomainService,
    event?: TipoEmpleadoModificadoEventPublisher,
):Promise<EmpleadoDomainEntity> => { 
    
    if(!service)
    throw new AggregateRootException('Servicio Empleado indefinido')

    if(!event) throw new AggregateRootException('Evento Modificar tipo Empleado indefinido');

    const result = await service.modificarTipoEmpleado(empleadoId,entity);
    event.response = result;
    event.publish();
    return result;

}