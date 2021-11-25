import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { SistemapresupuestoRoutingModule } from './sistemapresupuesto-routing.module';
import { SistemapresupuestoComponent } from './sistemapresupuesto.component';
import { InicioComponent } from './inicio/inicio.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ReportesComponent } from './reportes/reportes.component';
import { UsuariosComponent } from './usuarios/usuarios.component';
import { NuevoUsuarioComponent } from './usuarios/nuevousuario/nuevousuario.component';
import { PresupuestoComponent } from './inicio/presupuesto/presupuesto.component';
import { CategoriasComponent } from './inicio/categorias/categorias.component';
import { ConceptosComponent } from './inicio/conceptos/conceptos.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { Grafico1Component } from './dashboard/grafico1/grafico1.component';
import { Grafico2Component } from './dashboard/grafico2/grafico2.component';
import { Grafico3Component } from './dashboard/grafico3/grafico3.component';
import { Grafico4Component } from './dashboard/grafico4/grafico4.component';
import { Grafico5Component } from './dashboard/grafico5/grafico5.component';
import { Grafico6Component } from './dashboard/grafico6/grafico6.component';
import { PresupuestoAlcanzadoComponent } from './inicio/presupuestoAlcanzado/presupuestoAlcanzado.component';

@NgModule({
  declarations: [
    SistemapresupuestoComponent,
    InicioComponent,
    NavbarComponent,
    ReportesComponent,
    UsuariosComponent,
    NuevoUsuarioComponent,
    PresupuestoComponent,
    CategoriasComponent,
    ConceptosComponent,
    DashboardComponent,
    Grafico1Component,
    Grafico2Component,
    Grafico3Component,
    Grafico4Component,
    Grafico5Component,
    Grafico6Component,
    PresupuestoAlcanzadoComponent
  ],
  imports: [
    CommonModule,
    SistemapresupuestoRoutingModule,
    SharedModule
  ]
})
export class SistemapresupuestoModule { }
