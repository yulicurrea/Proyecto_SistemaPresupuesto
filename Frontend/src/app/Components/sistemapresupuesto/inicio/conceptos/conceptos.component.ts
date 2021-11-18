import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Categoria } from 'src/app/interfaces/Categoria';
import { ConceptoVis } from 'src/app/interfaces/Concepto';
import { CategoriaService } from 'src/app/services/presupuesto/categoria.service';
import { ConceptoService } from 'src/app/services/presupuesto/concepto.service';

@Component({
  selector: 'app-conceptos',
  templateUrl: './conceptos.component.html',
  styleUrls: ['./conceptos.component.css']
})
export class ConceptosComponent implements OnInit {

  displayedColumns: string[] = ['id', 'categoria', 'concepto', 'acciones'];
  conceptoForm!: FormGroup;
  conceptos: ConceptoVis[] = [];
  categorias: Categoria[] = [];
  con: any;
  error: any;

  constructor(public fb: FormBuilder,
    public conceptoService: ConceptoService, public categoriaService: CategoriaService,
    private _snackBar: MatSnackBar) { }

  ngOnInit(): void {
    this.conceptoForm = this.fb.group({
      concepto: ['', Validators.required],
      id_categoria: ['', Validators.required]
    });;
    this.getConceptosVis()
    this.getCategorias()
  }
  getCategorias() {
    this.categoriaService.obtenerTodas().subscribe(res => {
      return this.categorias = res;
    })
  }
  getConceptosVis() {
    this.conceptoService.obtener().subscribe(res => {
      return this.conceptos = res;
    })
  }
  guardar(): void {
    this.conceptoService.guardar(this.conceptoForm.value).subscribe(resp => {
      this.conceptoForm.reset();
      this.menGuardar()
      this.getConceptosVis()
    }
    );
  }
  eliminar(concepto: any) {
    this.conceptoService.eliminar(concepto.id)
      .subscribe(resp => {
        if (resp.id == concepto.id) {
          this.getConceptosVis()
          this.menEliminarCorrecto()
        } else {
          this.menEliminarIncorrecto()
        }
      })
  }

  menEliminarCorrecto() {
    this._snackBar.open('Concepto eliminado', '', {
      duration: 5000,
      horizontalPosition: 'center',
      verticalPosition: 'bottom',
      panelClass: ['snackbarOk']
    });
  }
  menEliminarIncorrecto() {
    this._snackBar.open('El concepto no puede ser eliminado, dado que esta siendo usado en el presupuesto.', '', {
      duration: 5000,
      horizontalPosition: 'center',
      verticalPosition: 'bottom',
      panelClass: ['snackbarErr']
    });
  }
  menGuardar() {
    this._snackBar.open('Concepto agregado.', '', {

      duration: 5000,
      horizontalPosition: 'center',
      verticalPosition: 'bottom',
      panelClass: ['snackbarOk']
    });
  }
}
