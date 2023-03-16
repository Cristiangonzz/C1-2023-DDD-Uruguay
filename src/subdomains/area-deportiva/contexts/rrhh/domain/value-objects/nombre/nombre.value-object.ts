import { ValueObjectBase } from '../../../../../../../libs/sofka/bases/object-value.base';

import { IsFullName } from "../../../../../../../libs/validation/is-nombre.validation";

export class NombreValueObject extends ValueObjectBase<string>{

    constructor(value?: string) {
        super(value ? value : "");
    }

    validateData(): void {
        this.contenidoOfFullName();
        this.formatoFullName();
    }

    private formatoFullName(){

        if(this.value && IsFullName(this.value,100) === true){
            const error = {
                field: "fullName",
                message: "El formato del nombre es invalido"
            }
            this.setError(error);
        }
    }

    private contenidoOfFullName() {

        if (this.value === "") {
            const error = {
                field: "fullName",
                message: "El nombre no puede estar vacio",
            }
            this.setError(error);
        }
    }



}
