import { Component, OnInit } from '@angular/core';
import { Seccion } from 'src/app/models/types';

@Component({
  selector: 'app-personas',
  templateUrl: './personas.component.html',
  styleUrls: ['./personas.component.scss']
})
export class PersonasComponent implements OnInit {

  seccion: Seccion = 'Persona';

  constructor() { }

  ngOnInit(): void {
  }

}
