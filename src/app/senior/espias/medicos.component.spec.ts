import { MedicosComponent } from './medicos.component';
import { MedicosService } from './medicos.service';
import { from } from 'rxjs';

describe('MedicosComponent', () => {

    let componente: MedicosComponent;
    const servicio = new MedicosService(null);

    beforeEach(() => {
        componente = new MedicosComponent(servicio);
    });


    it('Init carga los medicos', () => {
        const medicos = ['Medico 1', 'Medico 2'];
        spyOn(servicio, 'getMedicos').and.callFake(() => {
            return from([medicos]);
        })
        componente.ngOnInit();
        expect(componente.medicos.length).toBeGreaterThan(0);

    });


});
