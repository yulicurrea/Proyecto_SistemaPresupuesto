import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Location } from '@angular/common';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Concepto } from 'src/app/interfaces/Concepto';
import { PresupuestoAlcanzado } from 'src/app/interfaces/PresupuestoAlcanzado';
import { Presupuesto, PresupuestoVis } from 'src/app/interfaces/Presupuesto';
import { ConceptoService } from 'src/app/services/presupuesto/concepto.service';
import { PresupuestoService } from 'src/app/services/presupuesto/presupuesto.service';
import { PresupuestoAlcanzadoService } from 'src/app/services/presupuesto/presupuestoAlcanzado.service';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';

interface Food {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-presupuestoAlcanzado',
  templateUrl: './presupuestoAlcanzado.component.html',
  styleUrls: ['./presupuestoAlcanzado.component.css']
})

export class PresupuestoAlcanzadoComponent implements OnInit {

  displayedColumns: string[] = ['id_presupuesto', 'mes', 'valor','acciones'];
  presupuestoAlcanzadoForm!: FormGroup;
  presupuestosAlcanzado: PresupuestoAlcanzado[] = [];
  presupuestosVis: PresupuestoVis[] = [];
  presupuestoAlcanzadoServicel: PresupuestoAlcanzadoService[] = [];
  presupuesto: Presupuesto[] = [];
  conceptos: Concepto[] = [];
  id: any = ''


  constructor(
    public fb: FormBuilder,
    public presupuestoService: PresupuestoService,
    public conceptoService: ConceptoService,
    public presupuestoAlcanzadoService: PresupuestoAlcanzadoService,
    public location: Location,
    private _snackBar: MatSnackBar,
    private route: ActivatedRoute
  ) {
    this.id = this.route.snapshot.paramMap.get('id')
  }

  ngOnInit(): void {
    this.presupuestoAlcanzadoForm = this.fb.group({
      id_presupuesto: [this.id, Validators.required],
      mes: ['', Validators.required],
      valor: ['', Validators.required],
    });;
    this.getpresupuestoAlcanzado()
    this.getId()

  }
  getpresupuestoAlcanzado() {
    this.presupuestoAlcanzadoService.obtenerTodas().subscribe(res => {
      return this.presupuestosAlcanzado = res
    })
  }
  guardar(): void {
    console.log(this.presupuestoAlcanzadoForm.value)
    this.presupuestoAlcanzadoService.guardar(this.presupuestoAlcanzadoForm.value).subscribe(resp => {

      console.log(resp.id_presupuesto);
      console.log(this.presupuestoAlcanzadoForm.value.id_presupuesto);
      if (resp.id_presupuesto == this.presupuestoAlcanzadoForm.value.id_presupuesto) {
        this.getpresupuestoAlcanzado();
        this.menGuardarCorrecto()
      } else {
        this.menGuardarIncorrecto()
      }
      this.presupuestoAlcanzadoForm.reset();
    }
    );
  }
  getPresupuesto() {
    this.presupuestoService.obtenerVis().subscribe(res => {
      return this.presupuestosVis = res
    })
  }

  getId() {
    return this.id
  }

  eliminar(presupuesto: any) {
    this.presupuestoAlcanzadoService.eliminar(presupuesto.id)
      .subscribe(resp => {
        if (resp.id == presupuesto.id) {
          this.getpresupuestoAlcanzado();
          this.menEliminarCorrecto()
        }
      })
  }

  menEliminarCorrecto() {
    this._snackBar.open('Presupuesto Alcanzado eliminado', '', {
      duration: 5000,
      horizontalPosition: 'center',
      verticalPosition: 'bottom',
      panelClass: ['snackbarOk']
    });
  }
  menGuardarCorrecto() {
    this._snackBar.open('Presupuesto Alcanzado asignado', '', {
      duration: 5000,
      horizontalPosition: 'center',
      verticalPosition: 'bottom',
      panelClass: ['snackbarOk']
    });
  }
  menGuardarIncorrecto() {
    this._snackBar.open('El presupuesto alcanzado  ya ha sido asignado.', '', {
      duration: 5000,
      horizontalPosition: 'center',
      verticalPosition: 'bottom',
      panelClass: ['snackbarErr']
    });
  }
}
