import { Component , OnInit} from '@angular/core';
import { FormBuilder,FormGroup, Validators } from '@angular/forms';
import { UsuariosService } from './services/usuario/usuarios.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{

  
  usuarioForm!: FormGroup;
  
  
  constructor(
    public fb: FormBuilder,
    public usuarioService: UsuariosService
  ){

  }
  ngOnInit(): void {
    this.usuarioForm = this.fb.group({
      clave : ['', Validators.required],
      edad : ['', Validators.required],
      fechaNacimiento :['', Validators.required],
      nombre :['', Validators.required],
      rol : ['', Validators.required],
      });;
  }
 

  guardar(): void {
    this.usuarioService.saveUsuario(this.usuarioForm.value).subscribe(resp => {
    this.usuarioForm.reset();
    },
      error => { console.error(error) }
    );
  }

}
