import { Injectable } from '@angular/core';
import { Persona } from '../models/persona';
import { MockDBService } from './mock-db.service';

@Injectable({
  providedIn: 'root'
})
export class PersonaService {

  constructor(private http: MockDBService) {
    // http.postPersona({id:3, nombre:'Jesus', apellido: 'Palacios', fechaNacimiento: new Date()})
  }

  getAllPersonas () {
    const data = this.http.getPersonas();
    return Array.isArray(data) ? data : [];
  }

  getPersonaById(id:number) {
    const data = this.http.getPersonas();
    if(Array.isArray(data)){
      return data.filter( p => p.id === id)[0];
    }
    return null;
  }

  insertPersona(persona: Persona) {
    return this.http.postPersona(persona);
  }

  updatePersona(persona: Persona) {
      return this.http.updatePersona(persona);
  }
  
  deletePersona(id: number) {
    return this.http.deletePersona(id);
  }

}
