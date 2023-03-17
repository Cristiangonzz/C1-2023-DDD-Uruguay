import { IsNacionalidad } from 'src/libs/validation/is-nacionalidad.validation';
import { ValueObjectBase } from '../../../../../../../libs/sofka/bases/object-value.base';
import { IsString } from 'src/libs/validation/is-string.validation';

export class NacionalidadValueObject extends ValueObjectBase<string>{


    constructor(value? : string ){
        super(value? value: "");
    }

    validateData(): void {
       this.formatoNacionalidad();
       this.validacionDato();
    }

    private formatoNacionalidad():void{

        if(this.value && IsNacionalidad(this.value) === false){
            
                const error = {
                    field:"Nacionalidad",
                    message: "La Nacionalidad invalida ,debe estar dentro de las posibles"
                }
    
                this.setError( error );
        }
    }

    private validacionDato():void{

        if(this.value && IsString(this.value) === false){
            const error = {
                field: "Empleado",
                message: "El dato debe ser de tipo string "
            }
            this.setError(error);
        }
    }
   
}
