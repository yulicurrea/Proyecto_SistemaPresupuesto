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
//import { EditarusuarioComponent } from './usuarios/editarusuario/editarusuario.component';
//import { EditusuarioComponent } from './usuarios/nuevousuario/editusuario/editusuario.component';

@NgModule({
  declarations: [
    SistemapresupuestoComponent,
    InicioComponent,
    NavbarComponent,
    ReportesComponent,
    UsuariosComponent,
    NuevoUsuarioComponent,
    //EditarusuarioComponent,
    //EditusuarioComponent
  ],
  imports: [
    CommonModule,
    SistemapresupuestoRoutingModule,
    SharedModule
  ]
})
export class SistemapresupuestoModule { }
