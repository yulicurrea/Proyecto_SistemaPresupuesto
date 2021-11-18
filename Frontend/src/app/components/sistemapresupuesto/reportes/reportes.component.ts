import { Component , OnInit, ViewChild} from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { Presupuesto, PresupuestoVis, } from 'src/app/interfaces/Presupuesto';
import { PresupuestoService } from 'src/app/_services/Presupuesto.service';
@Component({
  selector: 'app-reportes',
  templateUrl: './reportes.component.html',
  styleUrls: ['./reportes.component.css']
})
export class ReportesComponent implements OnInit {

  displayedColumns: string[] = ['categoria', 'concepto', 'anio', 'ppto_asignado', 'porce_ppto_alcanzado', 'ppto_alcanzado', 'ppto_restante'];
  presupuestos: Presupuesto[] = [];
  presupuestosVis: PresupuestoVis[] = [];
  presup: any;

  constructor(public _presupuestos: PresupuestoService,
    private router: Router,
    private _snackBar: MatSnackBar) {

  }
  ngOnInit(): void {
      this.getPresupuesto()
  }
 
  getPresupuesto() {
    this._presupuestos.GetallPresupuesto().subscribe(res => {
      return this.presupuestos = res;
    })
  }

}
