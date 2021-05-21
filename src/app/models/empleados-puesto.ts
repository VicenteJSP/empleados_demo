import { Persona } from "./persona";
import { Puesto } from "./puesto";

export interface EmpleadosPuesto {
    id: number;
    puesto: Puesto;
    persona: Persona;
}
