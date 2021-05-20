import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmpleadosPuestosComponent } from './components/empleados-puestos/empleados-puestos.component';
import { PersonasComponent } from './components/personas/personas.component';
import { PuestosComponent } from './components/puestos/puestos.component';

const routes: Routes = [
  {path: 'empleados', component: EmpleadosPuestosComponent},
  {path: 'puestos', component: PuestosComponent},
  {path: 'personas', component: PersonasComponent},
  { path: '**', pathMatch: 'full', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
