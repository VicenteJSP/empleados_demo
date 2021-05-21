import { Component, OnInit } from '@angular/core';
import { AllModels } from 'src/app/models/allModels';
import { EmpleadosPuesto } from 'src/app/models/empleados-puesto';
import { Acciones, Seccion } from 'src/app/models/types';
import { EmpledoPuestoService } from '../../service/empledo-puesto.service';

@Component({
  selector: 'app-empleados-puestos',
  templateUrl: './empleados-puestos.component.html',
  styleUrls: ['./empleados-puestos.component.scss']
})
export class EmpleadosPuestosComponent implements OnInit {

  seccion: Seccion = 'Empleado';
  listEmpleados: Array<EmpleadosPuesto> = [];
  seleccion: EmpleadosPuesto | AllModels | undefined;
  
  constructor(private empleadoService: EmpledoPuestoService) { }

  ngOnInit(): void {
    this.listEmpleados = this.allEmpleados();
  }
  allEmpleados() {
    return this.empleadoService.getAllEmpleadoPuesto();
  }

  addEmpleado(persona: EmpleadosPuesto) {
    this.empleadoService.insertEmpleadoPuesto(persona);
    this.listEmpleados = this.allEmpleados();
  }

  updateEmpleado(persona: EmpleadosPuesto) {
    this.empleadoService.updateEmpleadoPuesto(persona);
    this.listEmpleados = this.allEmpleados();
  }

  delEmpledo(id: number) {
    this.empleadoService.deleteEmpleadoPuesto(id);
  }

  elementoSeleccionado(empleado: EmpleadosPuesto | AllModels) {
    this.seleccion = empleado;
  }

  accion(data: { elemento: AllModels, accion: Acciones }) {
    if (data.accion === 'Guardar') {
      if (data.elemento.id) {
        this.addEmpleado(data.elemento);
      }
    }
    if (data.accion === 'Update') {
      if (data.elemento.id) {
        this.updateEmpleado(data.elemento);
      }
    }
    if (data.accion === 'Delete') {
      if (data.elemento.id) {
        this.delEmpledo(data.elemento.id);
        this.seleccion = undefined;
      }
    }
  }

}
