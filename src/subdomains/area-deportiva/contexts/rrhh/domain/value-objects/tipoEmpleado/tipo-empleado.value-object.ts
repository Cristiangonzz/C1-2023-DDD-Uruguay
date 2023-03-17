import {  ValueObjectBase } from 'src/libs';
import { IsString } from 'src/libs/validation/is-string.validation';
import { IsTypeEmpleado } from 'src/libs/validation/is-type-empleado.validation';


export class TipoEmpleadoValueObject extends ValueObjectBase<string> {
    
    constructor(value? :string){
        super(value? value: "");
    }

    validateData() : void {
       this.validacionTypeEmpleado();
       this.validacionEmpleado();
    }

    private validacionTypeEmpleado() : void {

        if(this.value && IsTypeEmpleado(this.value) === false){
            const error = {
                field: "Empleado",
                message: "El tipo de empleado es incorrecto"
            }
            this.setError(error);
        }
    }

    private validacionEmpleado():void{

        if(this.value && IsString(this.value) === false){
            const error = {
                field: "Empleado",
                message: "El dato debe ser de tipo string "
            }
            this.setError(error);
        }
    }
    
   
}
