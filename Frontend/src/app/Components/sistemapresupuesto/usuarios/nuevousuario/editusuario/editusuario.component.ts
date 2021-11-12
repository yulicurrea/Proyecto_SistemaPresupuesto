import { Component, OnInit,Input } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { UsuariosService } from 'src/app/services/usuario/usuarios.service';
import {Location} from '@angular/common';

@Component({
  selector: 'app-editusuario',
  templateUrl: './editusuario.component.html',
  styleUrls: ['./editusuario.component.css']
})
export class EditusuarioComponent implements OnInit {

  editForm!: FormGroup;
  @Input() usuar: any;
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
    this.editForm = this.fb.group({
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
    this.usuarioService.guardar(this.editForm.value).subscribe(resp => {
      this.editForm.reset();
      this.usuar = this.usuar.filter((usuario: { id: any; }) => resp.id == usuario.id);
      this.usuar.push(resp);

    },
      error => { error() }
    );
  }
  editar(){
    this. editForm.setValue({
      id:this.usuar.id,
      fechaNacimiento: this.usuar.fechaNacimiento,
      nombre: this.usuar.nombre,
      apellido :this.usuar.apellido,
      rol: this.usuar.rol,
      usuario: this.usuar.usuario,
      clave: this.usuar.clave,
  });
  }

}
