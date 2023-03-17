import { ValueObjectErrorHandler, IUseCase, ValueObjectException } from "src/libs";

import { IModificarEquipoNuevoCommands } from "../../../domain/interfaces/commands/cesion";
import { StaffDeportivoAggregate } from "../../../domain/aggregates";
import { NegociacionDomainEntity, INegociacionDomainEntityInterface } from "../../../domain/entities";
import { IEquipoNuevoModificadoResponse } from "../../../domain/interfaces/responses/cesion";
import { IStaffDeportivoDomainService } from "../../../domain/services";
import { IdValueObject } from "../../../domain/value-objects";
import { EquipoNuevoNegociacionModificadoEventPublisher } from '../../../domain/events/publishers/negociacion/equipo-nuevo-modificado.event-publisher';

export class ModificarEquipoNuevoUseCase   extends ValueObjectErrorHandler
implements IUseCase<IModificarEquipoNuevoCommands, IEquipoNuevoModificadoResponse> {
    
    private readonly aggregateRoot:StaffDeportivoAggregate;

    /**
     * The constructor of the StaffDeportivoCommandHandler class receives an instance of the
     * IStaffDeportivoDomainService interface and an instance of the
     * EquipoNuevoNegociacionModificadoEventPublisher class, and then calls the constructor of the
     * StaffDeportivoAggregate class, passing the two instances as parameters.
     * @param {IStaffDeportivoDomainService} staffDeportivoService - IStaffDeportivoDomainService
     * @param {EquipoNuevoNegociacionModificadoEventPublisher} negociacionEquipoNuevoModificadoEvent -
     * This is an event publisher that publishes an event when a new team is negotiated.
     */
    constructor(
        private readonly staffDeportivoService: IStaffDeportivoDomainService,
        private readonly negociacionEquipoNuevoModificadoEvent : EquipoNuevoNegociacionModificadoEventPublisher,
    ){
        super();
        this.aggregateRoot = new StaffDeportivoAggregate({staffDeportivoService,negociacionEquipoNuevoModificadoEvent});
    }


    /**
     * The function returns an object with a property called success, which is a boolean, and a
     * property called data, which is of type IEquipoNuevoModificadoResponse.
     * @param {IModificarEquipoNuevoCommands} [command] - IModificarEquipoNuevoCommands
     * @returns The return type is IEquipoNuevoModificadoResponse.
     */
    async execute(command?: IModificarEquipoNuevoCommands): Promise<IEquipoNuevoModificadoResponse> {
        const data = await this.executeCommand(command);

        return { success: data ? true : false, data }
    }

    //Crea todo lo que tiene el comando con los value Object 
    /**
     * The function executeCommand is a private function that returns a promise of type
     * NegociacionDomainEntity or null. The function takes a command of type
     * IModificarEquipoNuevoCommands as a parameter. The function calls the createValueObject function,
     * passing the command as a parameter. The function calls the validateValueObject function, passing
     * the value object as a parameter. The function calls the createEntityNegociacionDomain function,
     * passing the value object as a parameter. The function calls the
     * exectueStaffDeportivoAggregateRoot function, passing the entity as a parameter. The function
     * returns the result of the exectueStaffDeportivoAggregateRoot function
     * @param {IModificarEquipoNuevoCommands} command - IModificarEquipoNuevoCommands
     * @returns The return is a promise of the entity that was created.
     */
    private async executeCommand(command: IModificarEquipoNuevoCommands): Promise<NegociacionDomainEntity | null> {

        //Llamada a la funcion que crea lso value object 
        const ValueObject = this.createValueObject(command);

        //Llama para validar los value object 
        this.validateValueObject(ValueObject);

        //Llama a la funcion para crear la entidad que se necesita pasandole los value object 
        const entity =  this.createEntityNegociacionDomain(ValueObject);

        //Llama a la funcion que se conecta con el servicio del agregado 
        return this.exectueStaffDeportivoAggregateRoot(entity)
    }

    //Crea los value Object 
    /**
     * It takes an object with a bunch of properties, and returns an object with the same properties,
     * but with the values wrapped in a class.
     * @param {IModificarEquipoNuevoCommands} command - IModificarEquipoNuevoCommands
     * @returns The return is a value object.
     */
    private createValueObject(command: IModificarEquipoNuevoCommands): INegociacionDomainEntityInterface {

        
        const negociacionId = new IdValueObject(command.negociacionId);
        const equipoNuevoId= new IdValueObject(command.equipoNuevoId);

        return {
            negociacionId,
            equipoNuevoId,
        }
    }

    //Valida los value object
    /**
     * If the valueObject has an IdValueObject property, then check if it has errors, if it does, then
     * set the errors of the valueObject to the errors of the IdValueObject property.
     * @param {INegociacionDomainEntityInterface} valueObject - INegociacionDomainEntityInterface
     */
    private validateValueObject(valueObject: INegociacionDomainEntityInterface): void {

        const {
            negociacionId,
            equipoNuevoId,
        } = valueObject

        if (negociacionId instanceof IdValueObject && negociacionId.hasErrors())
            this.setErrors(negociacionId.getErrors());
        
        if (equipoNuevoId instanceof IdValueObject && equipoNuevoId.hasErrors())
            this.setErrors(equipoNuevoId.getErrors());


        if (this.hasErrors() === true)
            throw new ValueObjectException(
                'Hay algunos errores en el comando ejecutado por AddClientUseCase',
                this.getErrors(),
            );

    }

    //Crea la entidad en si
    /**
     * It takes an object with a bunch of properties, and returns a new object with the same
     * properties.
     * @param {INegociacionDomainEntityInterface} valueObject - INegociacionDomainEntityInterface
     * @returns A new instance of NegociacionDomainEntity
     */
    private createEntityNegociacionDomain(
        valueObject: INegociacionDomainEntityInterface
    ): NegociacionDomainEntity {

        const {
            negociacionId,
            equipoNuevoId,
            
        } = valueObject

        return new NegociacionDomainEntity({
            negociacionId : negociacionId,
            equipoNuevoId: equipoNuevoId,
        })
    }

    //Manda a llamar al al servicio y asi usar sus metodos 
    private exectueStaffDeportivoAggregateRoot(
        entity: NegociacionDomainEntity,
    ): Promise<NegociacionDomainEntity | null> {
        return  this.aggregateRoot.NegociacionModificarEquipoNuevo(entity.negociacionId.valueOf(),entity);
    }
}