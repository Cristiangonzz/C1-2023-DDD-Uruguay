import { ValueObjectBase } from '../../../../../../../libs/sofka/bases/object-value.base';



export class TerminosACumplirValueObject extends ValueObjectBase<string> {
   
   constructor( value? : string ){
    super(value ? value : "" );
   }

    validateData(): void {
       // this.contenidoTerminos();
    }

    contenidoTerminos(): void {

        if(this.value && this.value.length < 0){
            const error = {
                field: "Terminos",
                message:"Los terminos deben de existir"
            }
            this.setError(error);
        }

    }
     
  
}


