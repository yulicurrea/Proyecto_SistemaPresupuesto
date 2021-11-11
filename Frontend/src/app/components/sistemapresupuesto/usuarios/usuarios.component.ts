import { Component, OnInit, ViewChild } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
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


  constructor(public _usuarioServices: UsuariosService, private _snackBar: MatSnackBar) { }

  ngOnInit(): void {
    this.getUsuarios()
  }

  getUsuarios() {
    this._usuarioServices.GetallUsuarios().subscribe(res => {
      return this.usuarios = res;
    })
  }
  eliminar(usuario: any) {
    window.location.reload();
    this._usuarioServices.eliminarPersona(usuario.id).subscribe(resp => {
      if (resp === true) {
        //this.usuarios.pop(usuario);
        this.mensage()
      }
    })
  }
  mensage() {
    this._snackBar.open('El usuario ha sido eliminado.', '', {
      duration: 5000,
      horizontalPosition: 'right',
      verticalPosition: 'top'
    });
  }
}
