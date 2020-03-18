import { FormRegister } from "./formRegister"
import { FormBuilder } from '@angular/forms';

describe('Form de login', () => {
    
    let componente: FormRegister;

    beforeEach(() => {
        componente = new FormRegister(new FormBuilder());
    })

    // Test de creacion de inputs
    it('Create form two inputs', () => {
        expect(componente.form.contains('email')).toBeTruthy();
        expect(componente.form.contains('password')).toBeTruthy();
    })

    // Test de validaciones required
    it('input email is required', ()=>{
        let control = componente.form.get('email');
        control.setValue('');

        expect(control.valid).toBeFalsy();
    })

    // Test de validaciones required
    it('input email is valid', ()=>{
        let control = componente.form.get('email');
        control.setValue('correo@gmail.com');

        expect(control.valid).toBeTruthy();
    })
})