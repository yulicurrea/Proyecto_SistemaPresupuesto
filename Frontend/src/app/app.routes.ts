import { RouterModule, Routes } from "@angular/router";


import { LoginComponent } from "./Components/login/login.component";
import { UsuarioComponent } from "./services/usuario/usuario.component";

const app_routes: Routes = [

    {path: 'login', component: LoginComponent},
    {path: 'usuario', component: UsuarioComponent},
    {path: '**', pathMatch: 'full', redirectTo:'login'}

];

export const app_routing = RouterModule.forRoot(app_routes);