import { Component, OnInit } from '@angular/core';
import { Seccion } from 'src/app/models/types';

@Component({
  selector: 'app-empleados-puestos',
  templateUrl: './empleados-puestos.component.html',
  styleUrls: ['./empleados-puestos.component.scss']
})
export class EmpleadosPuestosComponent implements OnInit {

  seccion: Seccion = 'Empleado';
  constructor() { }

  ngOnInit(): void {
  }

}
