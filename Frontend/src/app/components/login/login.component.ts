import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  form: FormGroup;
  cargando = false;
  constructor(private fb: FormBuilder, private _snackBar: MatSnackBar, private router: Router) {
    this.form = this.fb.group({
      usuario: ['', Validators.required],
      contraseña: ['', Validators.required]
    })
  }

  ngOnInit(): void {
  }

  ingresar() {
    console.log(this.form);
    const usuario = this.form.value.usuario;
    const contraseña = this.form.value.contraseña;
    if (usuario == 'admin' && contraseña == 'admin') {
      this.carga();
      this.router.navigate(['sistemapresupuesto']);
    } else {
      this.error();
      this.form.reset();
    }
  }
  error() {
    this._snackBar.open('Usuario o contraseña ingresados son invalidos.', '', {

      duration: 5000,
      horizontalPosition: 'center',
      verticalPosition: 'bottom'

    });
  }
  carga() {
    this.cargando = true;
    setTimeout(() => {

      this.cargando = false;

    }, 1500);
  }
}
