import { ValueObjectBase } from '../../../../../../../libs/sofka/bases/object-value.base';
import { IsFecha } from '../../../../../../../libs/validation/is-fecha.validation';

export class FechaValueObject extends ValueObjectBase<string> {
    
    constructor(fecha? : string){
        super(fecha? fecha: "");
    }

    validateData(): void {
        this.formatoFecha();
    }

    private formatoFecha():void{

        if(this.value && IsFecha(this.value) === false){
            const error = {
                field:"Fecha",
                message: "La fecha no corresponde a un formato correcto"
            }
            this.setError(error);
        }
    }

}
