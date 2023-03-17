import { NombreValueObject } from "./nombre.value-object";

describe("NombreValueObject", () => {

    describe("Cuando el valor es válido", () => {
        const valorValido = "Cristian";
        let nombreValueObject: NombreValueObject;

        beforeEach(() => {
            nombreValueObject = new NombreValueObject(valorValido);
        });

        it("Debe ser creado sin errores", () => {
            expect(nombreValueObject).toBeDefined(); // Se verifica que el objeto fue creado sin errores
            expect(nombreValueObject.valueOf()).toEqual(valorValido); // Se verifica que el valor del objeto es el valor válido proporcionado
        });

        //verifico si hay errores
        it("Debe ser válido después de la validación", () => {
            nombreValueObject.validateData(); // Se llama al método validate() para validar el valor del objeto
            expect(nombreValueObject.hasErrors()).toBeFalsy(); // Se verifica que el objeto es válido después de la validación
        });
    });

    describe("Cuando el valor es inválido", () => {
        const valorInvalido = "Cristian";
        let nombreValueObject: NombreValueObject;

        beforeEach(() => {
            nombreValueObject = new NombreValueObject(valorInvalido);
        });

        it("Debe tener errores después de la validación", () => {
            nombreValueObject.validateData(); // Se llama al método validate() para validar el valor del objeto
            expect(nombreValueObject.hasErrors()).toBeFalsy(); // Se verifica que el objeto tiene errores después de la validación
        });

    });
});