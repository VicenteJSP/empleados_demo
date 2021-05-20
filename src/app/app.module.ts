import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { PersonasComponent } from './components/personas/personas.component';
import { PuestosComponent } from './components/puestos/puestos.component';
import { EmpleadosPuestosComponent } from './components/empleados-puestos/empleados-puestos.component';
import { ListComponent } from './components/list/list.component';
import { FormularioComponent } from './components/formulario/formulario.component';

@NgModule({
  declarations: [
    AppComponent,
    PersonasComponent,
    PuestosComponent,
    EmpleadosPuestosComponent,
    ListComponent,
    FormularioComponent
  ],
  imports: [
    AppRoutingModule,
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
