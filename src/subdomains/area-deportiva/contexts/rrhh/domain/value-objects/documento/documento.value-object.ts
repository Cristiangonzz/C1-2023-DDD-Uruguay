import { IsDocument } from 'src/libs/validation/is-documento.validation';
import { ValueObjectBase } from '../../../../../../../libs/sofka/bases/object-value.base';

export class DocumentoValueObject extends ValueObjectBase<string> {
    
    constructor(documento? : string){
        super(documento? documento: "");
    }
    
    validateData(): void {
       this.formatoDocumento();
       this.contenidoDocumento();
    }

    private contenidoDocumento():void{
        
        if(this.value.length >8){
            const error = {
                field:"Documento",
                message: "El documento contiene mas de 9 numeros"
            }

            this.setError(error);
        }
    }

    private formatoDocumento():void{

        if(this.value && IsDocument(this.value) === false){
            const error = {
                field:"Documento",
                message: "El documento no corresponde a un formato CI"
            }
            this.setError(error);
        }
    }

}
