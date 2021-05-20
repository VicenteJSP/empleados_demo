import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Empleados-Demo';

  constructor(private router: Router) {}

  getPesonas () {
    this.router.navigate(['personas']);
  }

  getPuestos () {
    this.router.navigate(['puestos']);
  }

  getEmpleados () {
    this.router.navigate(['empleados']);
  }
}
