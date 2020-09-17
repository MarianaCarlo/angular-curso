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
    SidenavplateComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule
  ]
})
export class AdminModule { }
