import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { UsuariosService } from 'src/app/services/usuario/usuarios.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  form: FormGroup;
  cargando = false;
  constructor(private fb: FormBuilder, private _snackBar: MatSnackBar, private router: Router,public _usuarioServices: UsuariosService) {
    this.form = this.fb.group({
      usuario: ['', Validators.required],
      clave: ['', Validators.required]
    })
  }

  ngOnInit(): void {
  }

  ingresar() {
    this._usuarioServices.login(this.form.value).subscribe(resp =>{
      if(resp===true){
        this.carga();
        this.router.navigate(['sistemapresupuesto']);
      }else {
        this.error()
      }
    })
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
