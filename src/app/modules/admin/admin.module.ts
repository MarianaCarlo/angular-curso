import { MoneyPipe } from './../../shared/pipes/money.pipe';
import { ReactiveFormsModule } from '@angular/forms';
import { PedidosyaService } from './../../shared/services/pedidosya.service';
import { MatSidenavModule } from '@angular/material/sidenav';
import { HttpClientModule } from '@angular/common/http';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { AdminRoutingModule } from './admin-routing.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminComponent } from './admin/admin.component';
import { HeaderComponent } from './header/header.component';
import { CardplateComponent } from './cardplate/cardplate.component';
import { SidenavplateComponent } from './sidenavplate/sidenavplate.component';


@NgModule({
  declarations: [
    AdminComponent,
    HeaderComponent,
    CardplateComponent,
    SidenavplateComponent,
    MoneyPipe
  ],
  imports: [
    ReactiveFormsModule,
    CommonModule,
    AdminRoutingModule,
    MatCardModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatSidenavModule
  ],
  providers: [
    PedidosyaService
  ]
})
export class AdminModule { }
