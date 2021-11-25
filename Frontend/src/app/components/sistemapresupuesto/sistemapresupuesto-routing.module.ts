import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginGuard } from 'src/app/_guards/login.guard';
import { CategoriasComponent } from './inicio/categorias/categorias.component';
import { ConceptosComponent } from './inicio/conceptos/conceptos.component';
import { InicioComponent } from './inicio/inicio.component';
import { PresupuestoComponent } from './inicio/presupuesto/presupuesto.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ReportesComponent } from './reportes/reportes.component';
import { SistemapresupuestoComponent } from './sistemapresupuesto.component';
import { NuevoUsuarioComponent } from './usuarios/nuevousuario/nuevousuario.component';
import { UsuariosComponent } from './usuarios/usuarios.component';
import { PresupuestoAlcanzadoComponent } from './inicio/presupuestoAlcanzado/presupuestoAlcanzado.component';


const routes: Routes = [
  {
    path: '',
    component: SistemapresupuestoComponent,
    //canActivate: [LoginGuard],
    children: [
      { path: '', component: InicioComponent },
      { path: 'usuarios', component: UsuariosComponent },
      { path: 'reportes', component: ReportesComponent },
      { path: 'nuevousuario', component: NuevoUsuarioComponent },
      { path: 'nuevousuario/:id', component: NuevoUsuarioComponent },
      { path: 'presupuestos', component: PresupuestoComponent },
      { path: 'conceptos', component: ConceptosComponent },
      { path: 'categorias', component: CategoriasComponent },
      { path: 'dashboard', component: DashboardComponent},
      { path: 'presupuestoAlcanzado', component: PresupuestoAlcanzadoComponent},
      { path: 'presupuestoAlcanzado/:id', component: PresupuestoAlcanzadoComponent}
    ]
  }]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SistemapresupuestoRoutingModule { }
