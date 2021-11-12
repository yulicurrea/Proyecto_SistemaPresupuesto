import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { UsuariosService } from 'src/app/services/usuario/usuarios.service';

@Component({
  selector: 'app-editarusuario',
  templateUrl: './editarusuario.component.html',
  styleUrls: ['./editarusuario.component.css']
})
export class EditarusuarioComponent implements OnInit {

  usuarioForm!: FormGroup;
  usuar: any;
  minDate = new Date(1990, 0, 1);
  maxDate = new Date(2020, 0, 1);

  constructor(
    public fb: FormBuilder,
    public usuarioService: UsuariosService,
    public location: Location,
    private _snackBar: MatSnackBar
  ) {

  }
  ngOnInit(): void {
    this.usuarioForm = this.fb.group({
      id: ['', Validators.required],
      fechaNacimiento: ['', Validators.required],
      nombre: ['', Validators.required],
      apellido: ['', Validators.required],
      rol: ['', Validators.required],
      usuario: ['', [Validators.required, Validators.maxLength(8)]],
      clave: ['', [Validators.required, Validators.pattern(/^(?=\D*\d)(?=[^a-z]*[a-z])(?=[^A-Z]*[A-Z]).{1,8}$/)]]
     });;
  }

  guardar(): void {
    this.usuarioService.guardar(this.usuarioForm.value).subscribe(resp => {
      this.usuarioForm.reset();
      this.usuar = this.usuar.filter((usuario: { id: any; }) => resp.id == usuario.id);
      this.usuar.push(resp);
      this.completo();
    },
      error => { error() }
    );
  }

  validar(usuario: any): boolean {
    let aux = false;
    this.usuarioService.validar(this.usuarioForm.value).subscribe(resp => {
      if (resp === true) {
        aux = true;
      }
    },
      error => { error() }
    );
    return aux;
  }
  completo() {
    this._snackBar.open('Usuario guardado', '', {

      duration: 5000,
      horizontalPosition: 'center',
      verticalPosition: 'bottom'

    });
  }
}