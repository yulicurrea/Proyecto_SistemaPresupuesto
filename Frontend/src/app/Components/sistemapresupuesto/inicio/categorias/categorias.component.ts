import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Categoria } from 'src/app/interfaces/Categoria';
import { CategoriaService } from 'src/app/services/presupuesto/categoria.service';

@Component({
  selector: 'app-categorias',
  templateUrl: './categorias.component.html',
  styleUrls: ['./categorias.component.css']
})
export class CategoriasComponent implements OnInit {
  displayedColumns: string[] = ['id', 'categoria', 'acciones'];
  categoriaForm!: FormGroup;
  categorias: Categoria[] = [];
  cat: any;

  constructor(public fb: FormBuilder,
    public categoriaService: CategoriaService,
    private _snackBar: MatSnackBar) { }

  ngOnInit(): void {
    this.categoriaForm = this.fb.group({
      categoria: ['', Validators.required]
    });;
    this.getCategorias()
  }
  getCategorias() {
    this.categoriaService.obtenerTodas().subscribe(res => {
      return this.categorias = res;
    })
  }
  guardar(): void {
    this.categoriaService.guardar(this.categoriaForm.value).subscribe(resp => {
      this.categoriaForm.reset();
      this.menGuardar()
      this.getCategorias();
    }
    );
  }
  eliminar(categoria: any) {
    this.categoriaService.eliminar(categoria.id)
      .subscribe(resp => {
        if (resp.id == categoria.id) {
          this.getCategorias();
          this.menEliminarCorrecto()
        } else {
          this.menEliminarIncorrecto()
        }

      })
  }

  menEliminarCorrecto() {
    this._snackBar.open('Categoría eliminada', '', {
      duration: 5000,
      horizontalPosition: 'center',
      verticalPosition: 'bottom',
      panelClass: ['snackbarOk']
    });
  }
  menEliminarIncorrecto() {
    this._snackBar.open('La categoría no puede ser eliminada, dado que esta siendo usada en los conceptos.', '', {
      duration: 5000,
      horizontalPosition: 'center',
      verticalPosition: 'bottom',
      panelClass: ['snackbarErr']
    });
    
  }
  menGuardar() {
    this._snackBar.open('Categoria agregada.', '', {

      duration: 5000,
      horizontalPosition: 'center',
      verticalPosition: 'bottom',
      panelClass: ['snackbarOk']
    });
  }
}
