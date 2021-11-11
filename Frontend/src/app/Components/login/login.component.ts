import { Component , OnInit} from '@angular/core';
import { FormBuilder,FormGroup, Validators } from '@angular/forms';
import { Location } from '@angular/common';
import { UsuariosService } from 'src/app/services/usuario/usuarios.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm!:FormGroup;
  login:any;
  
  constructor(public fb: FormBuilder,
    public usuarioService: UsuariosService
    ) { 

    }

  ngOnInit(): void {
    this.loginForm = this.fb.group({
      usuario:['',Validators.required],
      clave:['',Validators.required]
    })
  }

  iniciarSesion():void{
    this.usuarioService.login(this.loginForm.value).subscribe(resp =>{
      if(resp===true){
        console.log("Inicio sesion correctamente");
      }
    })
  }

}
