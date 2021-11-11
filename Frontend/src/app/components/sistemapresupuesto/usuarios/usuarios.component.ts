import { Component, OnInit } from '@angular/core';
import { Usuario } from 'src/app/interfaces/usuario';
import { UsuariosService } from 'src/app/services/usuario/usuarios.service';


@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html',
  styleUrls: ['./usuarios.component.css']
})
export class UsuariosComponent implements OnInit {
  usuarios: Usuario[] = [];


  constructor(public _usuarioServices: UsuariosService  ) {  }

  ngOnInit(): void {
    this.getUsuarios()
  }
  getUsuarios() {
    this._usuarioServices.GetallUsuarios().subscribe(res => 
      { 
        return this.usuarios = res;
      })
  }
  
}
