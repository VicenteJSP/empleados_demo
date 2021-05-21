import { Component, OnInit } from '@angular/core';
import { AllModels } from 'src/app/models/allModels';
import { Puesto } from 'src/app/models/puesto';
import { Acciones, Seccion } from 'src/app/models/types';
import { PuestoService } from 'src/app/service/puesto.service';

@Component({
  selector: 'app-puestos',
  templateUrl: './puestos.component.html',
  styleUrls: ['./puestos.component.scss']
})
export class PuestosComponent implements OnInit {

  seccion: Seccion = 'Puesto';
  listPuestos: Array<Puesto> = [];
  seleccion: Puesto | AllModels | undefined;
  
  constructor(private puestoService: PuestoService) { }

  ngOnInit(): void {
    this.listPuestos = this.allPuestos();
  }

  allPuestos() {
    return this.puestoService.getAllPuestos();
  }

  addPuesto(puesto: Puesto) {
    this.puestoService.insertPuesto(puesto);
    this.listPuestos = this.allPuestos();
  }

  updatePuesto(puesto: Puesto) {
    this.puestoService.updatePuesto(puesto);
    this.listPuestos = this.allPuestos();
  }

  delPuesto(id: number) {
    this.puestoService.deletePuesto(id);
  }

  elementoSeleccionado(puesto: Puesto | AllModels) {
    this.seleccion = puesto;
  }

  accion(data: { elemento: AllModels, accion: Acciones }) {
    if (data.accion === 'Guardar') {
      if (data.elemento.id) {
        this.addPuesto(data.elemento);
      }
    }
    if (data.accion === 'Update') {
      if (data.elemento.id) {
        this.updatePuesto(data.elemento);
      }
    }
    if (data.accion === 'Delete') {
      if (data.elemento.id) {
        this.delPuesto(data.elemento.id);
        this.seleccion = undefined;
      }
    }
  }

}
