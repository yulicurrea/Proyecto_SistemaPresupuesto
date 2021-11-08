import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UsuarioService } from './services/usuario/usuario.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  usuarioForm!: FormGroup;

  constructor(
    public fb: FormBuilder,
    public usuarioService: UsuarioService
  ) {

  }
  ngOnInit(): void {
    this.usuarioForm = this.fb.group({
      clave: ['', Validators.required],
      edad: ['', Validators.required],
      fechaNacimiento: ['', Validators.required],
      nombre: ['', Validators.required],
      rol: ['', Validators.required],
    })
  }

  guardar(): void {
    this.usuarioService.saveUser(this.usuarioForm.value).subscribe(resp => {

    },
      error => { console.error(error) }

    )
  }





}
