import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FacturacionComponent } from './Admin/pages/facturacion/facturacion.component';
import { HomeComponent } from './Admin/pages/home/home.component';
import { AlertasComponent } from './Admin/pages/alertas/alertas.component';
import { NotificacionesComponent } from './Admin/pages/notificaciones/notificaciones.component';
import { UsuariosComponent } from './Admin/pages/usuarios/usuarios.component';
import { ReportesComponent } from './Admin/pages/reportes/reportes.component';
import { LoginComponent } from './login/login.component';
import { HomeOperadorComponent } from './Operador/pages/home-operador/home-operador.component';
import { AlertasOperadorComponent } from './Operador/pages/alertas-operador/alertas-operador.component';
import { NotificacionesOperadorComponent } from './Operador/pages/notificaciones-operador/notificaciones-operador.component';
import { UsuariosOperadorComponent } from './Operador/pages/usuarios-operador/usuarios-operador.component';
import { ReportesOperadorComponent } from './Operador/pages/reportes-operador/reportes-operador.component';
import { HomeAgencieroComponent } from './Agenciero/pages/home-agenciero/home-agenciero.component';
import { FacturacionAgencieroComponent } from './Agenciero/pages/facturacion-agenciero/facturacion-agenciero.component';
import { AlertasAgencieroComponent } from './Agenciero/pages/alertas-agenciero/alertas-agenciero.component';
import { NotificacionesAgencieroComponent } from './Agenciero/pages/notificaciones-agenciero/notificaciones-agenciero.component';
import { UsuariosAgencieroComponent } from './Agenciero/pages/usuarios-agenciero/usuarios-agenciero.component';
import { ReportesAgencieroComponent } from './Agenciero/pages/reportes-agenciero/reportes-agenciero.component';


const routes: Routes = [
  // LOGIN
  { path: '', component: LoginComponent },
  // ADMIN
  { path: 'home', component: HomeComponent },
  { path: 'facturacion', component: FacturacionComponent },
  { path: 'alertas', component: AlertasComponent },
  { path: 'notificaciones', component: NotificacionesComponent },
  { path: 'usuarios', component: UsuariosComponent },
  { path: 'reportes', component: ReportesComponent },
  // OPERADOR
  { path: 'home-operador', component: HomeOperadorComponent },
  { path: 'alertas-operador', component: AlertasOperadorComponent },
  { path: 'notificaciones-operador', component: NotificacionesOperadorComponent },
  { path: 'usuarios-operador', component: UsuariosOperadorComponent },
  { path: 'reportes-operador', component: ReportesOperadorComponent },
  // AGENCIERO
  { path: 'home-agenciero', component: HomeAgencieroComponent },
  { path: 'facturacion-agenciero', component: FacturacionAgencieroComponent },
  { path: 'alertas-agenciero', component: AlertasAgencieroComponent },
  { path: 'notificaciones-agenciero', component: NotificacionesAgencieroComponent },
  { path: 'usuarios-agenciero', component: UsuariosAgencieroComponent },
  { path: 'reportes-agenciero', component: ReportesAgencieroComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
