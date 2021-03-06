import { Component, OnInit } from '@angular/core';
import { AllModels } from 'src/app/models/allModels';
import { Persona } from 'src/app/models/persona';
import { Seccion } from 'src/app/models/types';
import { PersonaService } from 'src/app/service/persona.service';
import { Acciones } from '../../models/types'

@Component({
  selector: 'app-personas',
  templateUrl: './personas.component.html',
  styleUrls: ['./personas.component.scss']
})
export class PersonasComponent implements OnInit {

  seccion: Seccion = 'Persona';
  lisPerosnas: Array<Persona> = [];
  seleccion: Persona | AllModels | undefined;

  constructor(private personaService: PersonaService) { }

  ngOnInit(): void {
    this.lisPerosnas = this.allPersonas();
  }

  allPersonas() {
    return this.personaService.getAllPersonas();
  }

  addPersona(persona: Persona) {
    this.personaService.insertPersona(persona);
    this.lisPerosnas = this.allPersonas();
  }
  
  updatePersona(persona: Persona) {
    this.personaService.updatePersona(persona);
    this.lisPerosnas = this.allPersonas();
  }

  delPersona(id: number) {
    this.personaService.deletePersona(id);
  }

  elementoSeleccionado(persona: Persona | AllModels) {
    this.seleccion = persona;
  }

  accion(data: { elemento: AllModels, accion: Acciones }) {
    if (data.accion === 'Guardar') {
      if (data.elemento.id) {
        this.addPersona(data.elemento);
      }
    }
    if (data.accion === 'Update') {
      if (data.elemento.id) {
        this.updatePersona(data.elemento);
      }
    }
    if (data.accion === 'Delete') {
      if (data.elemento.id) {
        this.delPersona(data.elemento.id);
        this.seleccion = undefined;
      }
    }
  }

}
