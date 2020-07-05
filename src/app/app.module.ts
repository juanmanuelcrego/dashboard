import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './Admin/pages/home/home.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DashComponent } from './Admin/dash/dash.component';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatCardModule } from '@angular/material/card';
import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { LayoutModule } from '@angular/cdk/layout';
import { VentaTotComponent } from './Admin/dash/charts/venta-tot/venta-tot.component';
import { VentaTot2019Component } from './Admin/dash/charts/venta-tot2019/venta-tot2019.component';
import { Carton2020Component } from './Admin/dash/charts/carton2020/carton2020.component';
import { Carton2019Component } from './Admin/dash/charts/carton2019/carton2019.component';
import { Jackpot20Component } from './Admin/dash/charts/jackpot20/jackpot20.component';
import { Ganadores20Component } from './Admin/dash/charts/ganadores20/ganadores20.component';
import { Ganadores19Component } from './Admin/dash/charts/ganadores19/ganadores19.component';
import { Ganancia2020Component } from './Admin/dash/charts/ganancia2020/ganancia2020.component';
import { Ganancia2019Component } from './Admin/dash/charts/ganancia2019/ganancia2019.component';
import {MatBadgeModule} from '@angular/material/badge';
import { LoginComponent } from './login/login.component';
import { FacturacionComponent } from './Admin/pages/facturacion/facturacion.component';
import { SidebarComponent } from './Admin/components/sidebar/sidebar.component';
import {MatTabsModule} from '@angular/material/tabs';
import { TabComponent } from './Admin/components/tab/tab.component';
import {MatTableModule} from '@angular/material/table'; 
import {MatExpansionModule} from '@angular/material/expansion';
import { AlertasComponent } from './Admin/pages/alertas/alertas.component';
import { NotificacionesComponent } from './Admin/pages/notificaciones/notificaciones.component';
import {MatDatepickerModule} from '@angular/material/datepicker'; 
import {MatFormFieldModule} from '@angular/material/form-field';
import { UsuariosComponent } from './Admin/pages/usuarios/usuarios.component';
import { TabUsrComponent } from './Admin/components/tab/tab-usr/tab-usr.component';
import { ReportesComponent } from './Admin/pages/reportes/reportes.component';
import { TabRepComponent } from './Admin/components/tab/tab-rep/tab-rep.component';
import { ExportComponent } from './Admin/components/export/export.component';
import { FilterComponent } from './Admin/components/filter/filter.component'; 
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HomeOperadorComponent } from './Operador/pages/home-operador/home-operador.component';
import { AlertasOperadorComponent } from './Operador/pages/alertas-operador/alertas-operador.component';
import { NotificacionesOperadorComponent } from './Operador/pages/notificaciones-operador/notificaciones-operador.component';
import { UsuariosOperadorComponent } from './Operador/pages/usuarios-operador/usuarios-operador.component';
import { ReportesOperadorComponent } from './Operador/pages/reportes-operador/reportes-operador.component';
import { SidebarOperadorComponent } from './Operador/components/sidebar-operador/sidebar-operador.component';
import { DashoperadorComponent } from './Operador/components/dashoperador/dashoperador.component';
import { TabRepOperadorComponent } from './Operador/components/tab/tab-rep-operador/tab-rep-operador.component';
import { TabUsrOperadorComponent } from './Operador/components/tab/tab-usr-operador/tab-usr-operador.component';
import { HomeAgencieroComponent } from './Agenciero/pages/home-agenciero/home-agenciero.component';
import { FacturacionAgencieroComponent } from './Agenciero/pages/facturacion-agenciero/facturacion-agenciero.component';
import { AlertasAgencieroComponent } from './Agenciero/pages/alertas-agenciero/alertas-agenciero.component';
import { NotificacionesAgencieroComponent } from './Agenciero/pages/notificaciones-agenciero/notificaciones-agenciero.component';
import { UsuariosAgencieroComponent } from './Agenciero/pages/usuarios-agenciero/usuarios-agenciero.component';
import { ReportesAgencieroComponent } from './Agenciero/pages/reportes-agenciero/reportes-agenciero.component';
import { SidebarAgencieroComponent } from './Agenciero/components/sidebar-agenciero/sidebar-agenciero.component';
import { DashAgencieroComponent } from './Agenciero/components/dash-agenciero/dash-agenciero.component';
import { ChartComponent } from './Agenciero/components/dash-agenciero/chart/chart.component';
import { Chart2Component } from './Agenciero/components/dash-agenciero/chart2/chart2.component';
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    DashComponent,
    VentaTotComponent,
    VentaTot2019Component,
    Carton2020Component,
    Carton2019Component,
    Jackpot20Component,
    Ganadores20Component,
    Ganadores19Component,
    Ganancia2020Component,
    Ganancia2019Component,
    LoginComponent,
    FacturacionComponent,
    SidebarComponent,
    TabComponent,
    AlertasComponent,
    NotificacionesComponent,
    UsuariosComponent,
    TabUsrComponent,
    ReportesComponent,
    TabRepComponent,
    ExportComponent,
    FilterComponent,
    HomeOperadorComponent,
    AlertasOperadorComponent,
    NotificacionesOperadorComponent,
    UsuariosOperadorComponent,
    ReportesOperadorComponent,
    SidebarOperadorComponent,
    DashoperadorComponent,
    TabRepOperadorComponent,
    TabUsrOperadorComponent,
    HomeAgencieroComponent,
    FacturacionAgencieroComponent,
    AlertasAgencieroComponent,
    NotificacionesAgencieroComponent,
    UsuariosAgencieroComponent,
    ReportesAgencieroComponent,
    SidebarAgencieroComponent,
    DashAgencieroComponent,
    ChartComponent,
    Chart2Component,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatGridListModule,
    MatCardModule,
    MatMenuModule,
    MatIconModule,
    MatButtonModule,
    LayoutModule,
    MatBadgeModule,
    MatTabsModule,
    MatTableModule,
    MatExpansionModule,
    MatDatepickerModule,
    MatFormFieldModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
