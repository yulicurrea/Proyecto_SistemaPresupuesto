import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Location } from '@angular/common';
import { UsuariosService } from 'src/app/services/usuario/usuarios.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { Usuario } from 'src/app/interfaces/Usuario';
@Component({
  selector: 'app-reportes',
  templateUrl: './nuevousuario.component.html',
  styleUrls: ['./nuevousuario.component.css']
})
export class NuevoUsuarioComponent implements OnInit {

  title(title: any) {
    throw new Error('Method not implemented.');
  }

  displayedColumns: string[] = ['nombre', 'apellido', 'id', 'usuario', 'rol'];
  usuarioForm!: FormGroup;
  usuar: any;

  usuario: Usuario = new Usuario();
  minDate = new Date(1990, 0, 1);
  maxDate = new Date(2020, 0, 1);

  roles: string[] = ["ADMIN", "USER"];

  editarId: any = "";

  constructor(
    public fb: FormBuilder,
    public usuarioService: UsuariosService,
    public location: Location,
    private _snackBar: MatSnackBar,
    private route: ActivatedRoute
  ) {

    this.editarId = this.route.snapshot.paramMap.get('id');
  }
  ngOnInit(): void {
    this.cargarFormulario();

    if (this.editarId) {
      this.cargarUsuario();
    }

  }

  cargarFormulario() {
    let fecha = "";

    if (this.usuario && this.usuario.fechaNacimiento) {
      fecha = this.usuario.fechaNacimiento.split('T')[0];
    }

    this.usuarioForm = this.fb.group({
      id: [this.usuario.id, Validators.required],
      fechaNacimiento: [fecha, Validators.required],
      nombre: [this.usuario.nombre, Validators.required],
      apellido: [this.usuario.apellido, Validators.required],
      rol: [this.usuario.rol, Validators.required],
      usuario: [this.usuario.usuario, [Validators.required, Validators.maxLength(8)]],
      clave: ['', [Validators.required, Validators.pattern(/^(?=\D*\d)(?=[^a-z]*[a-z])(?=[^A-Z]*[A-Z]).{1,8}$/)]]
    });;
  }

  cargarUsuario() {
    this.usuarioService.getUsuario(this.editarId).subscribe(
      resp => {
        this.usuario = resp;
        this.cargarFormulario();
      },
      error => {
      }
    );

  }


  getAllUser(): void {
    this.usuarioService.GetallUsuarios().subscribe(resp => {
      this.usuar = resp;
    },
      error => { console.error(error) }
    );
  }
  guardar(): void {
    this.completo();
    this.usuarioService.guardar(this.usuarioForm.value).subscribe(resp => {
      this.usuarioForm.reset();
      this.usuar = this.usuar.filter((usuario: { id: any; }) => resp.id == usuario.id);
      this.usuar.push(resp);

    },

      error => { error() }

    );
  }
  completo() {
    this._snackBar.open('Usuario guardado', '', {

      duration: 5000,
      horizontalPosition: 'center',
      verticalPosition: 'bottom',
      panelClass: ['snackbarOk']
    });
  }

  error() {
    this._snackBar.open('Usuario ya existe', '', {

      duration: 5000,
      horizontalPosition: 'center',
      verticalPosition: 'bottom',
      panelClass: ['snackbarErr']
    });
  }

}
