import { IsTypeNegociacion } from 'src/libs/validation/is-type-negociacion.validation';
import { ValueObjectBase } from '../../../../../../../libs/sofka/bases/object-value.base';


export class TipoNegociacionValueObject  extends ValueObjectBase<string>{
   
    constructor( value? : string ){
        super(value ? value : "" );
       }
    
    validateData(): void {
       // this.validacionTipoNegociacion();   
    }

    private validacionTipoNegociacion():void{

        if(this.value && IsTypeNegociacion(this.value) === false){
            
            const error = {
                field:"Negociacion",
                message: "El tipo de negociacion es  invalida ,debe estar dentro de los posibles"
            }

            this.setError( error );
        }
    }
}
