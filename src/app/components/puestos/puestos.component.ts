import { Component, OnInit } from '@angular/core';
import { Seccion } from 'src/app/models/types';
import { PuestoService } from 'src/app/service/puesto.service';

@Component({
  selector: 'app-puestos',
  templateUrl: './puestos.component.html',
  styleUrls: ['./puestos.component.scss']
})
export class PuestosComponent implements OnInit {

  seccion: Seccion = 'Puesto';
  
  constructor(private puestoService: PuestoService) { }

  ngOnInit(): void {
  }

}
