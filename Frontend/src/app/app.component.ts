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
  usuario:any;
  
  
  constructor(
    public fb: FormBuilder,
    public usuarioService: UsuariosService
  ){

  }
  ngOnInit(): void {
    this.usuarioForm = this.fb.group({
      id: ['', Validators.required],
      clave : ['', Validators.required],
      edad : ['', Validators.required],
      fechaNacimiento :['', Validators.required],
      nombre :['', Validators.required],
      apellido : ['', Validators.required],
      rol : ['', Validators.required],
      });;

      this.usuarioService.GetallUsuarios().subscribe(resp => {
        this.usuario=resp;
        },
          error => { console.error(error) }
        );
      
  }
 

  guardar(): void {
    this.usuarioService.guardar(this.usuarioForm.value).subscribe(resp => {
    this.usuarioForm.reset();
    this.usuario=this.usuario.filter((usuario: { id: any; })=>resp.id==usuario.id);
    this.usuario.push(resp);
    },
      error => { console.error(error) }
    );
  }
  eliminar(usuario: any){
    this.usuarioService.eliminarPersona(usuario.id).subscribe(resp=>{
      if(resp===true){
        this.usuario.pop(usuario);
      }
    })
  }
  editar(usuario:any){
    this.usuarioForm.setValue({
      id: usuario.id ,
      clave :usuario.clave  ,
      edad : usuario.edad,
      fechaNacimiento :usuario.fechaNacimiento ,
      nombre :usuario.nombre ,
      apellido : usuario.apellido ,
      rol :usuario.rol ,
    })

  }
}
