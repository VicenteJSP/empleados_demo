import { Injectable } from '@angular/core';
import { EmpleadosPuesto } from '../models/empleados-puesto';
import { Persona } from '../models/persona';
import { Puesto } from '../models/puesto';

@Injectable({
  providedIn: 'root'
})
export class MockDBService {

  constructor() { }

  private addLocalStorage (clave: string, data: any) {
    localStorage.setItem(clave, JSON.stringify(data));
  }
  private getLocalStorage (clave: string) {
    const data = localStorage.getItem(clave);
    return data ? JSON.parse(data) : [];
  }

  private getData (clave: string) {
    const personasDB: Array<Persona> = this.getLocalStorage(clave);
    const personas: Array<Persona> = personasDB; 
    return personas;
  }
  
  /**
   * Mocks Personas
   */
  getPersonas() {
    let data = this.getData('personas');
    if(data.length === 0) {
      return { code: 404, message: 'Sin datos' };
    }
    return data;    
  }
  postPersona(persona: Persona) {
    let data = this.getData('personas');
    data = data.filter( e => e.id !== persona.id );
    data.push(persona);
    this.addLocalStorage('personas', data);
    return { code: 201, message:'Persona agregada' }
  }
  updatePersona(persona: Persona) {
    let data = this.getData('personas');
    if(data.length === 0) {
      return { code: 404, message: 'Sin datos' };
    }
    let newPersonas = data.filter( p =>  p.id != persona.id);
    newPersonas.push(persona)
    console.log(newPersonas);
    this.addLocalStorage('personas',newPersonas);
    return { code: 200, message:'Persona Actualizada' }
  }
  deletePersona(id: number) {
    let data = this.getData('personas');
    if(data.length === 0) {
      return { code: 404, message: 'Sin datos' };
    }
    let newPersonas = data.filter( p =>  p.id != id);
    this.addLocalStorage('personas',newPersonas);
    return { code: 202, message:'Persona Eliminada' }
  }

  /**
   * Mocks Puestos
   */
  getPuestos() {
    this.getLocalStorage('puesto');
  }
  postPuesto(){}
  updatePuesto(id: string, puesto:Puesto) {
    this.getLocalStorage
    this.addLocalStorage
  }
  deletepuesto(id: string, puesto:Puesto) {
    this.getLocalStorage
    this.addLocalStorage
  }

  /**
   * Mocks Empleados
   */
  getEmpleados() {}
  postEmpleado() {}
  updateEmpleado(id: string, empleado: EmpleadosPuesto) {
    this.getLocalStorage
    this.addLocalStorage
  }
  deleteEmpleado(id: string, empleado: EmpleadosPuesto) {
    this.getLocalStorage
    this.addLocalStorage
  }

}
