import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { EmpleadosPuesto } from 'src/app/models/empleados-puesto';
import { Acciones } from 'src/app/models/types';
import { PersonaService } from 'src/app/service/persona.service';
import { PuestoService } from 'src/app/service/puesto.service';
import { AllModels } from '../../models/allModels'
import { Seccion } from '../../models/types'

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

  @Input() data: Array<AllModels> = []
  @Input() tipo: Seccion = 'Persona';
  @Output() seleccion = new EventEmitter<AllModels>();
  @Output() accion = new EventEmitter<{elemento: AllModels | EmpleadosPuesto, accion: Acciones}>();

  constructor(
    private puestoService: PuestoService,
    private personaService: PersonaService
  ) { }

  ngOnInit(): void {}

  selection(elemento: AllModels) {
    this.seleccion.emit(elemento);
  }

  accionElemento(elemento: AllModels, accion: Acciones) {
    this.data = this.data.filter( e => e.id != elemento.id);
    this.accion.emit({elemento,  accion});
  }

  nombreElemento(elemento: AllModels) {
    if(elemento.hasOwnProperty('nombre')){
      if(elemento.hasOwnProperty('apellido')){
        return `${elemento.nombre} ${elemento.apellido}`;
      }
      return `${elemento.nombre}`;
    }
    const perosna = this.personaService.getPersonaById(elemento.persona);
    const puesto = this.puestoService.getPuestoById(elemento.puesto);
    const nombrePersona = `${perosna?.nombre} ${perosna?.apellido}`; 
    return `${nombrePersona} - ${puesto?.nombre}`;

  }

}
