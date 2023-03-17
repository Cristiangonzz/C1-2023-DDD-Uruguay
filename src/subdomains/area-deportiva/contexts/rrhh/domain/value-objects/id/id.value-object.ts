import { ValueObjectBase } from '../../../../../../../libs/sofka/bases/object-value.base';
import { IsUUID } from '../../../../../../../libs/validation/is-uuid-validation';
import { uuid } from 'uuidv4';
export class IdValueObject extends ValueObjectBase<string> {
    

    constructor(value? : string ){
        super(value? value: uuid())
    }
    

    validateData(): void {
       this.validarId();
       
    }
    
    private validarId():void{
        if(this.value && IsUUID(this.value) === false){
            
            const error = {
                field: "Identificador",
                message: "Formato de ID incorrecto ( UUIDV4 )"
            }
            this.setError(error);
        }

    }
}
