import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Acciones } from 'src/app/models/types';
import { AllModels } from '../../models/allModels'

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

  @Input() data: Array<AllModels> = []
  @Output() seleccion = new EventEmitter<AllModels>();
  @Output() accion = new EventEmitter<{elemento: AllModels, accion: Acciones}>();

  constructor() { }

  ngOnInit(): void {
  }

  selection(elemento: AllModels) {
    this.seleccion.emit(elemento);
  }

  accionElemento(elemento: AllModels, accion: Acciones) {
    this.data = this.data.filter( e => e.id != elemento.id);
    this.accion.emit({elemento,  accion});
  }

}
