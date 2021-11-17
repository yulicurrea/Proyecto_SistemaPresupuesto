import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CategoriasComponent } from './inicio/categorias/categorias.component';
import { ConceptosComponent } from './inicio/conceptos/conceptos.component';
import { InicioComponent } from './inicio/inicio.component';
import { PresupuestoComponent } from './inicio/presupuesto/presupuesto.component';
import { ReportesComponent } from './reportes/reportes.component';
import { SistemapresupuestoComponent } from './sistemapresupuesto.component';
import { NuevoUsuarioComponent } from './usuarios/nuevousuario/nuevousuario.component';
import { UsuariosComponent } from './usuarios/usuarios.component';


const routes: Routes = [
  {
    path: '', component: SistemapresupuestoComponent, children: [
      { path: '', component: InicioComponent },
      { path: 'usuarios', component: UsuariosComponent },
      { path: 'reportes', component: ReportesComponent },
      {path:'nuevousuario',component:NuevoUsuarioComponent},
      {path:'categorias',component:CategoriasComponent},
      {path:'conceptos',component:ConceptosComponent},
      {path:'presupuesto',component:PresupuestoComponent}
    ]
  }]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SistemapresupuestoRoutingModule { }
