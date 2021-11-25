import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Concepto } from 'src/app/interfaces/Concepto';
import { Router } from '@angular/router';
import { Presupuesto, PresupuestoVis } from 'src/app/interfaces/Presupuesto';
import { ConceptoService } from 'src/app/services/presupuesto/concepto.service';
import { PresupuestoService } from 'src/app/services/presupuesto/presupuesto.service';


interface Food {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-presupuesto',
  templateUrl: './presupuesto.component.html',
  styleUrls: ['./presupuesto.component.css']
})

export class PresupuestoComponent implements OnInit {

  displayedColumns: string[] = ['categoria', 'concepto', 'anio', 'ppto_asignado', 'porce_ppto_alcanzado', 'ppto_alcanzado', 'ppto_restante', 'acciones'];
  presupuestoForm!: FormGroup;
  presupuestos: Presupuesto[] = [];
  presupuestosVis: PresupuestoVis[] = [];

  conceptos: Concepto[] = [];


  constructor(
    public fb: FormBuilder,
    private router: Router,
    public presupuestoService: PresupuestoService,
    public conceptoService: ConceptoService,
    private _snackBar: MatSnackBar
  ) { }

  ngOnInit(): void {
    this.presupuestoForm = this.fb.group({
      id_concepto: ['', Validators.required],
      anio: ['', Validators.required],
      ppto_asignado: ['', Validators.required],
    });;
    this.getPresupuestosVis()
    this.getConceptos();
  }
  getPresupuestosVis() {
    this.presupuestoService.obtenerVis().subscribe(res => {
      return this.presupuestosVis = res;
    })
  }
  guardar(): void {
    console.log(this.presupuestoForm.value)
    this.presupuestoService.guardar(this.presupuestoForm.value).subscribe(resp => {
      
      console.log(resp.id_concepto);
      console.log(this.presupuestoForm.value.id_concepto);
      if (resp.id_concepto == this.presupuestoForm.value.id_concepto) {
        this.getPresupuestosVis();
        this.menGuardarCorrecto()
      } else {
        this.menGuardarIncorrecto()
      }
      this.presupuestoForm.reset();
    }
    );
  }

  getConceptos() {
    this.conceptoService.obtenerTodos().subscribe(res => {
      return this.conceptos = res;
    })
  }
  eliminar(presupuesto: any) {
    this.presupuestoService.eliminarPresupuesto(presupuesto.id)
      .subscribe(resp => {
        if (resp.id == presupuesto.id) {
          this.getPresupuestosVis();
          this.menEliminarCorrecto()
        }
      })
  }
  agregar(presupuesto: Presupuesto) {
    this.router.navigateByUrl('/sistemapresupuesto/presupuestoAlcanzado/' + presupuesto.id);
  }
 
  menEliminarCorrecto() {
    this._snackBar.open('Presupuesto eliminado', '', {
      duration: 5000,
      horizontalPosition: 'center',
      verticalPosition: 'bottom',
      panelClass: ['snackbarOk']
    });
  }
  menGuardarCorrecto() {
    this._snackBar.open('Presupuesto asignado', '', {
      duration: 5000,
      horizontalPosition: 'center',
      verticalPosition: 'bottom',
      panelClass: ['snackbarOk']
    });
  }
  menGuardarIncorrecto() {
    this._snackBar.open('El presupuesto para este concepto ya ha sido asignado.', '', {
      duration: 5000,
      horizontalPosition: 'center',
      verticalPosition: 'bottom',
      panelClass: ['snackbarErr']
    });
  }
}
