import { EmpleadoDomainEntity } from '../../../entities/empleado/EmpleadoDomainEntity';
import { SalarioModificadoEventPublisher } from '../../../events/publishers';
import { IEmpleadoDomainService } from '../../../services/staff-Deportivo/empleado.domain-service';
import { AggregateRootException } from "../../../../../../../../libs/sofka/exceptions/aggregate-root.exception";

export const  ModificarSalarioEmpleadoHelper = async (
    empleadoId:string,
    entity: EmpleadoDomainEntity,
    service?: IEmpleadoDomainService,
    event?: SalarioModificadoEventPublisher,
):Promise<EmpleadoDomainEntity> => { 
    
    if(!service)
    throw new AggregateRootException('Servicio Empleado indefinido')

    if(!event) throw new AggregateRootException('Evento modificar Salario indefinido');

    const result = await service.modificarSalario(empleadoId,entity);
    event.response = result;
    event.publish();
    return result;

}