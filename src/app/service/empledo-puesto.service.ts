import { Injectable } from '@angular/core';
import { EmpleadosPuesto } from '../models/empleados-puesto';
import { MockDBService } from './mock-db.service';

@Injectable({
  providedIn: 'root'
})
export class EmpledoPuestoService {

  constructor(private http: MockDBService) { }

  getAllEmpleadoPuesto() {
    const data = this.http.getEmpleados();
    return Array.isArray(data) ? data : [];
  }

  getEmpleadoPuestoById(id: number) {
    const data = this.http.getEmpleados();
    if (Array.isArray(data)) {
      return data.filter(p => p.id === id)[0];
    }
    return null;
  }

  insertEmpleadoPuesto(empleado: EmpleadosPuesto) {
    return this.http.postEmpleado(empleado);
  }

  updateEmpleadoPuesto(empleado: EmpleadosPuesto) {
    return this.http.updateEmpleado(empleado);

  }

  deleteEmpleadoPuesto(id: number) {
    return this.http.deleteEmpleado(id);
  }

}
