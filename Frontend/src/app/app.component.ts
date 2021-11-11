import { Component , OnInit} from '@angular/core';
import { FormBuilder,FormGroup, Validators } from '@angular/forms';
import { UsuariosService } from './services/usuario/usuarios.service';
import { Location } from '@angular/common';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{

  title(title: any) {
    throw new Error('Method not implemented.');
  }

  
  usuarioForm!: FormGroup;
  usuar:any;
  
  
  constructor(
    public fb: FormBuilder,
    public usuarioService: UsuariosService,
    public location: Location
  ){

  }
  ngOnInit(): void {
    this.usuarioForm = this.fb.group({
      id: ['', Validators.required],
      fechaNacimiento :['', Validators.required],
      nombre :['', Validators.required],
      apellido : ['', Validators.required],
      rol : ['', Validators.required],
      usuario: ['', [Validators.required, Validators.maxLength(8)]],
      clave : ['', [Validators.required,Validators.pattern(/^(?=\D*\d)(?=[^a-z]*[a-z])(?=[^A-Z]*[A-Z]).{1,8}$/)]]
      });;

     this.getAllUser();
      
  }
 
  getAllUser():void{
    this.usuarioService.GetallUsuarios().subscribe(resp => {
      this.usuar=resp;
      },
        error => { console.error(error) }
      );
  }
  guardar(): void {
    this.usuarioService.guardar(this.usuarioForm.value).subscribe(resp => {
    this.usuarioForm.reset();
    this.usuar = this.usuar.filter((usuario: { id: any; })=>resp.id==usuario.id);
    this.usuar.push(resp);
    window.location.reload();
    },
      error => { console.error(error) }
    );
  }
  eliminar(usuario: any){
    window.location.reload();
    this.usuarioService.eliminarPersona(usuario.id).subscribe(resp=>{
      if(resp===true){
        this.usuar.pop(usuario);
        
      }
    })
  }
  editar(usuarios:any){
    this.usuarioForm.setValue({
      id: usuarios.id ,
      clave :usuarios.clave  ,
      fechaNacimiento :usuarios.fechaNacimiento ,
      nombre :usuarios.nombre ,
      apellido : usuarios.apellido ,
      rol :usuarios.rol ,
      usuario :usuarios.usuario 
    })

  }
  

}
