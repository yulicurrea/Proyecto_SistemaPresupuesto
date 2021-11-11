import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { AuthenticationService } from 'src/app/_services/authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  form: FormGroup;
  cargando = false;
  constructor(
    private authService:AuthenticationService,
    private fb: FormBuilder, private _snackBar: MatSnackBar, private router: Router) {
    this.form = this.fb.group({
      usuario: ['', Validators.required],
      contraseña: ['', Validators.required]
    })
  }

  ngOnInit(): void {
  }

  ingresar() {    
    const usuario = this.form.value.usuario;
    const contraseña = this.form.value.contraseña;
    if (usuario && contraseña) {
      this.loginBack(usuario,contraseña);
      //this.carga();
      
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

  loginBack(usuario:string, clave:string){
    //Invocar servicio login
    
    this.authService.login(usuario, clave).subscribe(
      resp=>{
        if(resp.token){
          localStorage.setItem("TOKEN", resp.token);

          this.router.navigate(["/sistemapresupuesto"])
        }
      }

    );
    
    
    
  }
}
