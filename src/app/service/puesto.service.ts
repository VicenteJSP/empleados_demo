import { Injectable } from '@angular/core';
import { Puesto } from '../models/puesto';
import { MockDBService } from './mock-db.service';

@Injectable({
  providedIn: 'root'
})
export class PuestoService {

  constructor(private http: MockDBService) {}

  getAllPuestos () {
    const data = this.http.getPuestos();
    return Array.isArray(data) ? data : [];
  }

  getPuestoById(id:number | undefined) {
    const data = this.http.getPuestos();
    if(Array.isArray(data)){
      return data.filter( p => p.id === id)[0];
    }
    return null;
  }

  insertPuesto(puesto: Puesto) {
    return this.http.postPuesto(puesto);
  }

  updatePuesto(puesto: Puesto) {
    return this.http.updatePuesto(puesto);
  }

  deletePuesto(id: number) {
    return this.http.deletePuesto(id);
  }
}
