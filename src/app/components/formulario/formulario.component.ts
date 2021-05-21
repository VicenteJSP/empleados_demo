import { Component, EventEmitter, Input, OnChanges, OnInit, Output } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { AllModels } from 'src/app/models/allModels';
import { Persona } from 'src/app/models/persona';
import { Puesto } from 'src/app/models/puesto';
import { Acciones, Seccion } from 'src/app/models/types';
import { PersonaService } from 'src/app/service/persona.service';
import { PuestoService } from 'src/app/service/puesto.service';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.scss']
})
export class FormularioComponent implements OnInit, OnChanges {

  @Input() elemento: AllModels | undefined;
  @Input() tipo: Seccion | undefined;
  @Output() gurdar = new EventEmitter<{ elemento: AllModels, accion: Acciones }>();
  empyForm: boolean = true;
  formulario = new FormGroup({});
  submitTitle = 'Guardar';
  listPersonas: Array<Persona> | undefined;
  listPuestos: Array<Puesto> | undefined;

  constructor(
    private puestoService: PuestoService,
    private personaService: PersonaService
  ) { }

  ngOnInit(): void {
    if (this.tipo === 'Persona') {
      this.formulario = new FormGroup({
        id: new FormControl(),
        nombre: new FormControl(),
        apellido: new FormControl(),
        fechaNacimiento: new FormControl(),
      });
    }
    if (this.tipo === 'Puesto') {
      this.formulario = new FormGroup({
        id: new FormControl(),
        nombre: new FormControl()
      });
    }
    if (this.tipo === 'Empleado') {
      this.listPersonas = this.personaService.getAllPersonas();
      this.listPuestos = this.puestoService.getAllPuestos();
      this.formulario = new FormGroup({
        id: new FormControl(),
        persona: new FormControl(),
        puesto: new FormControl()
      });
    }
    this.empyForm = true;
    this.submitTitle = 'Guardar';
  }

  ngOnChanges() {
    this.submitTitle = 'Actualizar';
    this.empyForm = false;
    if (this.tipo === 'Persona') {
      this.formulario.patchValue({
        id: this.elemento?.id,
        nombre: this.elemento?.nombre,
        apellido: this.elemento?.apellido,
        fechaNacimiento: this.elemento?.fechaNacimiento
      });
    }
    if (this.tipo === 'Puesto') {
      this.formulario.patchValue({
        id: this.elemento?.id,
        nombre: this.elemento?.nombre
      });
    }
    if (this.tipo === 'Empleado') {
      console.log('empleado');

      this.formulario.patchValue({
        id: this.elemento?.id,
        persona: this.elemento?.persona,
        puesto: this.elemento?.puesto
      });
    }
  }

  submit() {
    const elemento = this.formulario.value;
    if (this.empyForm) {
      this.gurdar.emit({ elemento, accion: 'Guardar' });
    } else {
      this.gurdar.emit({ elemento, accion: 'Update' });
    }
    this.limpiarForm();
  }

  limpiarForm() {
    this.submitTitle = 'Guardar';
    this.empyForm = true;
    this.formulario.patchValue({
      id: null,
      nombre: null,
      apellido: null,
      fechaNacimiento: null,
      persona: null,
      puesto: null
    });
  }

}
