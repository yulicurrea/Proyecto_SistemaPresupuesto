import { Component , OnInit} from '@angular/core';
import { FormBuilder,FormGroup, Validators } from '@angular/forms';
import { Location } from '@angular/common';
import { UsuariosService } from 'src/app/services/usuario/usuarios.service';
@Component({
  selector: 'app-reportes',
  templateUrl: './reportes.component.html',
  styleUrls: ['./reportes.component.css']
})
export class ReportesComponent implements OnInit {

  title(title: any) {
    throw new Error('Method not implemented.');
  }

  displayedColumns: string[] = ['nombre', 'apellido', 'cedula', 'usuario','rol'];
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
}
