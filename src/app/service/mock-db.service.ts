import { Injectable } from '@angular/core';
import { EmpleadosPuesto } from '../models/empleados-puesto';
import { Persona } from '../models/persona';
import { Puesto } from '../models/puesto';

@Injectable({
  providedIn: 'root'
})
export class MockDBService {

  constructor() { }

  private addLocalStorage(clave: string, data: any) {
    localStorage.setItem(clave, JSON.stringify(data));
  }
  private getLocalStorage(clave: string) {
    const data = localStorage.getItem(clave);
    return data ? JSON.parse(data) : [];
  }

  /**
   * Mocks Personas
   */
  private getDataPersonas(clave: string) {
    const personasDB: Array<Persona> = this.getLocalStorage(clave);
    const personas: Array<Persona> = personasDB;
    return personas;
  }

  getPersonas() {
    let data = this.getDataPersonas('personas');
    if (data.length === 0) {
      return { code: 404, message: 'Sin datos' };
    }
    return data;
  }

  postPersona(persona: Persona) {
    let data = this.getDataPersonas('personas');
    data = data.filter(e => e.id !== persona.id);
    data.push(persona);
    this.addLocalStorage('personas', data);
    return { code: 201, message: 'Persona agregada' }
  }

  updatePersona(persona: Persona) {
    let data = this.getDataPersonas('personas');
    if (data.length === 0) {
      return { code: 404, message: 'Sin datos' };
    }
    let newPersonas = data.filter(p => p.id != persona.id);
    newPersonas.push(persona)
    this.addLocalStorage('personas', newPersonas);
    return { code: 200, message: 'Persona Actualizada' }
  }

  deletePersona(id: number) {
    let data = this.getDataPersonas('personas');
    if (data.length === 0) {
      return { code: 404, message: 'Sin datos' };
    }
    let newPersonas = data.filter(p => p.id != id);
    this.addLocalStorage('personas', newPersonas);
    return { code: 202, message: 'Persona Eliminada' }
  }

  /**
   * Mocks Puestos
   */
  private getDataPuestos(clave: string) {
    const puestoDB: Array<Puesto> = this.getLocalStorage(clave);
    const puestos: Array<Puesto> = puestoDB;
    return puestos;
  }

  getPuestos() {
    let data = this.getDataPuestos('puesto');
    if (data.length === 0) {
      return { code: 404, message: 'Sin datos' };
    }
    return data;
  }

  postPuesto(puesto: Puesto) {
    let data = this.getDataPuestos('puesto');
    data = data.filter(e => e.id !== puesto.id);
    data.push(puesto);
    this.addLocalStorage('puesto', data);
    return { code: 201, message: 'Puesto agregado' }
  }

  updatePuesto(puesto: Puesto) {
    let data = this.getDataPuestos('puesto');
    if (data.length === 0) {
      return { code: 404, message: 'Sin datos' };
    }
    let newPuestos = data.filter(p => p.id != puesto.id);
    newPuestos.push(puesto)
    this.addLocalStorage('puesto', newPuestos);
    return { code: 200, message: 'Persona Actualizada' }
  }

  deletePuesto(id: number) {
    let data = this.getDataPuestos('puesto');
    if (data.length === 0) {
      return { code: 404, message: 'Sin datos' };
    }
    let newPuestos = data.filter(p => p.id != id);
    this.addLocalStorage('puesto', newPuestos);
    return { code: 202, message: 'Persona Eliminada' }
  }

  /**
   * Mocks Empleados
   */

   private getDataEmpleados(clave: string) {
    const empleadosDB: Array<EmpleadosPuesto> = this.getLocalStorage(clave);
    const empleados: Array<EmpleadosPuesto> = empleadosDB;
    return empleados;
  }
  
  getEmpleados() {
    let data = this.getDataEmpleados('empleados');
    if (data.length === 0) {
      return { code: 404, message: 'Sin datos' };
    }
    return data;
  }

  postEmpleado(empleado: EmpleadosPuesto) {
    let data = this.getDataEmpleados('empleados');
    data = data.filter(e => e.id !== empleado.id);
    data.push(empleado);
    this.addLocalStorage('empleados', data);
    return { code: 201, message: 'Empleado agregado' }
  }

  updateEmpleado(empleado: EmpleadosPuesto) {
    let data = this.getDataEmpleados('empleados');
    if (data.length === 0) {
      return { code: 404, message: 'Sin datos' };
    }
    let newEmpleados = data.filter(p => p.id != empleado.id);
    newEmpleados.push(empleado)
    this.addLocalStorage('empleados', newEmpleados);
    return { code: 200, message: 'Empleado Actualizada' }
  }

  deleteEmpleado(id: number) {
    let data = this.getDataEmpleados('empleados');
    if (data.length === 0) {
      return { code: 404, message: 'Sin datos' };
    }
    let newPuestos = data.filter(p => p.id != id);
    this.addLocalStorage('empleados', newPuestos);
    return { code: 202, message: 'Persona Eliminada' }
  }

}
