import { Component, OnInit, ViewChild } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { Usuario } from 'src/app/interfaces/Usuario';
import { UsuariosService } from 'src/app/services/usuario/usuarios.service';

@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html',
  styleUrls: ['./usuarios.component.css']
})
export class UsuariosComponent implements OnInit {

  displayedColumns: string[] = ['nombre', 'apellido', 'id', 'usuario', 'rol', 'acciones'];

  usuarios: Usuario[] = [];


  constructor(public _usuarioServices: UsuariosService,
    private router: Router,
    private _snackBar: MatSnackBar) { }

  ngOnInit(): void {
    this.getUsuarios()
  }

  getUsuarios() {
    this._usuarioServices.GetallUsuarios().subscribe(res => {
      return this.usuarios = res;
    })
  }

  editar(usuario: Usuario) {
    //this.router.navigateByUrl("/nuevousuario/"+ usuario.id);
    this.router.navigateByUrl('/sistemapresupuesto/nuevousuario/' + usuario.id);
  }
  eliminar(usuario: any) {

    this._usuarioServices.eliminarPersona(usuario.id)
      .subscribe(
        resp => {
          if (resp === true) {
            this.completo();
            this.getUsuarios();
          }
        })
  }
  completo() {
    this._snackBar.open('Usuario eliminado correctamente', '', {

      duration: 5000,
      horizontalPosition: 'center',
      verticalPosition: 'bottom'

    });
  }

}