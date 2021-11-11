import { Component , OnInit} from '@angular/core';
import { FormBuilder,FormGroup, Validators } from '@angular/forms';
import { Location } from '@angular/common';
import { UsuariosService } from 'src/app/services/usuario/usuarios.service';
import { MatSnackBar } from '@angular/material/snack-bar';
@Component({
  selector: 'app-reportes',
  templateUrl: './nuevousuario.component.html',
  styleUrls: ['./nuevousuario.component.css']
})
export class NuevoUsuarioComponent implements OnInit {

  title(title: any) {
    throw new Error('Method not implemented.');
  }

  displayedColumns: string[] = ['nombre', 'apellido', 'id', 'usuario','rol'];
  usuarioForm!: FormGroup;
  usuar:any;
  minDate = new Date(1990, 0, 1);
  maxDate = new Date(2020,0,1);
  
  constructor(
    public fb: FormBuilder,
    public usuarioService: UsuariosService,
    public location: Location,
    private _snackBar: MatSnackBar
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
    this.completo();
    },
      
    );
  }
  completo() {
    this._snackBar.open('Usuario guardado', '', {

      duration: 5000,
      horizontalPosition: 'center',
      verticalPosition: 'bottom'

    });
  }
}
