import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InicioComponent } from './inicio/inicio.component';
import { ReportesComponent } from './reportes/reportes.component';
import { SistemapresupuestoComponent } from './sistemapresupuesto.component';
import { EditusuarioComponent } from './usuarios/nuevousuario/editusuario/editusuario.component';
import { NuevoUsuarioComponent } from './usuarios/nuevousuario/nuevousuario.component';
import { UsuariosComponent } from './usuarios/usuarios.component';


const routes: Routes = [
  {
    path: '', component: SistemapresupuestoComponent, children: [
      { path: '', component: InicioComponent },
      { path: 'usuarios', component: UsuariosComponent },
      { path: 'reportes', component: ReportesComponent },
      {path:'nuevousuario',component:NuevoUsuarioComponent},
      {path:'editusuario',component:EditusuarioComponent}
    ]
  }]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SistemapresupuestoRoutingModule { }
