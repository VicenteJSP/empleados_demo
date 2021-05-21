import { Injectable } from '@angular/core';
import { EmpledoPuestoService } from './empledo-puesto.service';
import { PersonaService } from './persona.service';
import { PuestoService } from './puesto.service';

@Injectable({
  providedIn: 'root'
})
export class InitService {

  constructor(
    private puesto: PuestoService,
    private persona: PersonaService,
    private empleado: EmpledoPuestoService
  ) { }

  loadDataTest(){
    this.createPersonas();
    this.createPuestos();
    this.createEmpleados();
  }

  createPersonas() {
    this.persona.insertPersona({
      id: 1,
      nombre:'Andrea',
      apellido: 'Abreu',
      fechaNacimiento: new Date('01/08/1999')
    });

    this.persona.insertPersona({
      id: 2,
      nombre:'Liliana',
      apellido: 'Zurita',
      fechaNacimiento: new Date('13/05/1999')
    });
  }

  createPuestos() {
    this.puesto.insertPuesto({
      id: 1,
      nombre: 'Abogado'
    });

    this.puesto.insertPuesto({
      id: 2,
      nombre: 'Economista'
    });
  }

  createEmpleados() {
    this.empleado.insertEmpleadoPuesto({
      id: 1,
      persona: 1,
      puesto: 1
    });

    this.empleado.insertEmpleadoPuesto({
      id: 2,
      persona: 2,
      puesto: 2
    });
  }

}
