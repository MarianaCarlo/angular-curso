import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { Test2Component } from './test2/test2.component';
import { FormsModule } from '@angular/forms';
import { PersonaModule } from './modules/persona/persona.module';
import { ProductoModule } from './modules/producto/producto.module';

@NgModule({
  declarations: [
    AppComponent,
    Test2Component
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
