import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Location } from '@angular/common';
import { MatSnackBar } from '@angular/material/snack-bar';
import { PresupuestoAlcanzado, PresupuestoAlcanzadoVis} from 'src/app/interfaces/PresupuestoAlcanzado';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { PresupuestoAlcanzadoService } from 'src/app/services/presupuesto/presupuestoAlcanzado.service';



@Component({
  selector: 'app-presupuestoAlcanzado',
  templateUrl: './presupuestoAlcanzado.component.html',
  styleUrls: ['./presupuestoAlcanzado.component.css']
})

export class PresupuestoAlcanzadoComponent implements OnInit {

  displayedColumns: string[] = ['categoria', 'concepto', 'anio', 'mes', 'valor','acciones'];
  presupuestoAlcanzadoForm!: FormGroup;
  presupuestosAlcanzadoVis: PresupuestoAlcanzadoVis[] = [];
  id: any = ''


  constructor(
    public fb: FormBuilder,
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
    this.getId()
    this.getpresupuestoAlcanzado(this.id)
    

  }
  getpresupuestoAlcanzado(id) {
    this.presupuestoAlcanzadoService.obtenerLista(id).subscribe(res => {
      return this.presupuestosAlcanzadoVis = res
    })
  }
  guardar(): void {
       this.presupuestoAlcanzadoService.guardar(this.presupuestoAlcanzadoForm.value).subscribe(resp => {

     
      if (resp.id_presupuesto == this.presupuestoAlcanzadoForm.value.id_presupuesto) {
        this.menGuardarCorrecto()
      } else {
        this.menGuardarIncorrecto()

      }
      this.getpresupuestoAlcanzado(this.presupuestoAlcanzadoForm.value.id_presupuesto)
      this.presupuestoAlcanzadoForm.reset();
      window.location.reload()
    }
    );
    
  }

 

  getId() {
    return this.id
  }

  eliminar(presupuesto: any) {
    this.presupuestoAlcanzadoService.eliminar(presupuesto.id)
      .subscribe(resp => {
        if (resp.id == presupuesto.id) {
          this.menEliminarCorrecto()
          
            }
        this.getpresupuestoAlcanzado(presupuesto.id)
        window.location.reload()
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
    this._snackBar.open('El presupuesto alcanzado  ya ha sido asignado para ese mes.', '', {
      duration: 5000,
      horizontalPosition: 'center',
      verticalPosition: 'bottom',
      panelClass: ['snackbarErr']
    });
  }
}
