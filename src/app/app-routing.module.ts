import { PedidosyaComponent } from './pedidosya/pedidosya/pedidosya.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {path: '', redirectTo: 'pedidosya', pathMatch: 'full'},
  {path: 'pedidosya', loadChildren: () => import('./pedidosya/pedidosya.module').then(m => m.PedidosyaModule)},
  {path: 'login', loadChildren: () => import('./login/login.module').then(m => m.LoginModule)},
  {path: 'pages', loadChildren: () => import('./pages/pages.module').then(m => m.PagesModule)}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
