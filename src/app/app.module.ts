import { ProviderModule } from './modules/provider/provider.module';
import { ConcertModule } from './modules/concert/concert.module';


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
import { CambioPipe } from './pipes/cambio.pipe';



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
    CambioPipe,

  ],
  imports: [
    BrowserModule,
    FormsModule,
    SuperticketModule,
    ConcertModule,
    ProviderModule
  ],
  providers: [

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
