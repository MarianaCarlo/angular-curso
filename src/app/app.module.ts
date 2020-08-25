import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { PersonaModule } from './modules/persona/persona.module';
import { TestPipe } from './pipes/test.pipe';
import { NgColorDirective } from './directives/ng-color.directive';
import { NgFocusDirective } from './directives/ng-focus.directive';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { AdminComponent } from './components/admin/admin.component';
import { AppRoutingModule } from './app-routing.module';
import { Home1Component } from './components/home1/home1.component';
import { Home2Component } from './components/home2/home2.component';
import { NgbModule} from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [
    AppComponent,
    TestPipe,
    NgColorDirective,
    NgFocusDirective,
    HomeComponent,
    AboutComponent,
    AdminComponent,
    Home1Component,
    Home2Component
  ],
  imports: [
    BrowserModule,
    FormsModule,
    PersonaModule,
    AppRoutingModule,
    NgbModule
  ],
  providers: [

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
