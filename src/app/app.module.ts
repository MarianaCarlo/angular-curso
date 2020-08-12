import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { Test2Component } from './test2/test2.component';
import { FormsModule } from '@angular/forms';
import { PersonaModule } from './modules/persona/persona.module';
import { Prod1Component } from './prod1/prod1.component';
import { Prod2Component } from './prod2/prod2.component';
import { Prod3Component } from './prod3/prod3.component';
import { ProductoModule } from './modules/producto/producto.module';

@NgModule({
  declarations: [
    AppComponent,
    Test2Component,
    Prod1Component,
    Prod2Component,
    Prod3Component
  ],
  imports: [
    BrowserModule,
    FormsModule,
    PersonaModule,
    ProductoModule
  ],
  providers: [

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
