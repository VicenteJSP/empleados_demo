import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { PersonasComponent } from './components/personas/personas.component';
import { PuestosComponent } from './components/puestos/puestos.component';
import { EmpleadosPuestosComponent } from './components/empleados-puestos/empleados-puestos.component';

@NgModule({
  declarations: [
    AppComponent,
    PersonasComponent,
    PuestosComponent,
    EmpleadosPuestosComponent
  ],
  imports: [
    AppRoutingModule,
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
