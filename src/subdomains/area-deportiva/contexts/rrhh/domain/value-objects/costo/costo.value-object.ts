import { ValueObjectBase } from '../../../../../../../libs/sofka/bases/object-value.base';

export class CostoValueObject extends ValueObjectBase<number>{
    
    constructor(costo? : number){
        super(costo? costo: 0 );
    }

    validateData(): void {
        this.ContenidoCosto();
    }

    private ContenidoCosto():void{

         if(this.value && this.value <= 0){
            const error = {
                field:"Costo",
                message: "El costo no puede ser negativo"
            }
            this.setError(error);
        }

        // if(this.value && !IsPositivo(this.value)){
        //     const error = {
        //         field:"Costo",
        //         message: "El costo no puede ser negativo"
        //     }
        //     this.setError(error);
        // }

        // if(this.value && !IsNumber(this.value)){
        //     const error = {
        //         field:"Costo",
        //         message: "El costo debe ser de tipo number"
        //     }
        //     this.setError(error);
        // }
    }

}
