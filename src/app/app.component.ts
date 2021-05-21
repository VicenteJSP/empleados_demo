import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { InitService } from './service/init.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Empleados-Demo';

  constructor(
    private router: Router,
    private initService: InitService
  ) {
    this.initService.loadDataTest();
  }

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
