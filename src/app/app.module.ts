import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { TestPipe } from './pipes/test.pipe';
import { ExpoPipe } from './pipes/expo.pipe';
import { ImpurePipe } from './pipes/impure.pipe';
import { PurePipe } from './pipes/pure.pipe';
import {TestComponent} from './components/test.component';
import { NgColorDirective } from './directives/ng-color.directive';
import { NgFocusDirective } from './directives/ng-focus.directive';
import { SuperticketComponent } from './modules/superticket/components/superticket/superticket.component';
import { SuperticketModule } from './modules/superticket/superticket.module';
import { HabilitarPipe } from './pipes/habilitar.pipe';





@NgModule({
  declarations: [
    AppComponent,
    TestPipe,
    ExpoPipe,
    ImpurePipe,
    PurePipe,
    NgColorDirective, 
    TestComponent, 
    NgFocusDirective,
    SuperticketComponent,
    
  ],
  imports: [
    BrowserModule,
    FormsModule,
    SuperticketModule,
    HabilitarPipe
  ],
  providers: [

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
