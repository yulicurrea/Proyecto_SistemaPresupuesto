import { Component , OnInit, ViewChild} from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { Presupuesto, PresupuestoVis, } from 'src/app/interfaces/Presupuesto';
import { PresupuestoService } from 'src/app/services/presupuesto/presupuesto.service';
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

  constructor(public presupuestoService: PresupuestoService,
    private router: Router,
    private _snackBar: MatSnackBar) {

  }

  ngOnInit(): void {
    this.getPresupuestosVis()
  }
 
  getPresupuestosVis() {
    this.presupuestoService.obtenerVis().subscribe(res => {
      console.log(res);
      return this.presupuestosVis = res;
    })
  }
}
