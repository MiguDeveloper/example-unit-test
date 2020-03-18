import { MedicosComponent } from './medicos.component';
import { MedicosService } from './medicos.service';
import { from, empty, throwError } from 'rxjs';

describe('MedicosComponent', () => {

    let componente: MedicosComponent;
    const servicio = new MedicosService(null);

    beforeEach(() => {
        componente = new MedicosComponent(servicio);
    });


    // Consulta a un servicio y seteamos data fake
    it('Init carga los medicos', () => {
        const medicos = ['Medico 1', 'Medico 2'];
        spyOn(servicio, 'getMedicos').and.callFake(() => {
            return from([medicos]);
        })
        componente.ngOnInit();
        expect(componente.medicos.length).toBeGreaterThan(0);

    });

    // Verificar si se llamo a un metodo del servicio: caso POST
    it('Verfica ejecucion metodo agregar', () => {
        const vigilante = spyOn(servicio, 'agregarMedico').and.callFake(medico => {
            return empty();
        })

        componente.agregarMedico();

        expect(vigilante).toHaveBeenCalled();
    })

    // Agrega un medico al arreglo de medicos
    it('Debe agregar un nuevo medico', () => {
        const medico = { id: 1, nombre: 'Miguel' };
        spyOn(servicio, 'agregarMedico').and.returnValue(from([medico]));
        componente.agregarMedico();
        expect(componente.medicos.indexOf(medico)).toBeGreaterThanOrEqual(0);
    })

    // Probar que cuando ocurra un error en el servicio
    it('Si falla la adicion, la propiedad mensajeError, contendra la descrip del error', () => {
        const miError = 'No se pudo agregar el medico';
        spyOn(servicio, 'agregarMedico').and.returnValue(throwError(miError));
        componente.agregarMedico();

        expect(componente.mensajeError).toBe(miError);
    })

    // Metodo para verificar si solo se ejecuta el metodo
    it('Debe de llamar al servidor para eliminar a un medico', () => {
        // para simular el confirm, ya que sino ponemos saldra la ventana
        spyOn(window, 'confirm').and.returnValue(true);

        const espia = spyOn(servicio, 'borrarMedico').and.callFake(medico => {
            return empty();
        })

        componente.borrarMedico('3');
        expect(espia).toHaveBeenCalledWith('3');
    })

    // Metodo para verificar si solo se ejecuta el metodo
    it('No debe de llamar al servidor para eliminar a un medico', () => {
        // para simular el confirm, ya que sino ponemos saldra la ventana
        spyOn(window, 'confirm').and.returnValue(false);

        // Podemos hacerlo de manera directa tbm con el 'returnValue'
        const espia = spyOn(servicio, 'borrarMedico').and.callFake(medico => {
            return empty();
        })

        componente.borrarMedico('3');
        expect(espia).not.toHaveBeenCalledWith('3');
    })
});
