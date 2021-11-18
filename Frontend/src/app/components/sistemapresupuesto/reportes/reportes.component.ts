import { Component , OnInit} from '@angular/core';
import { FormBuilder,FormGroup, Validators } from '@angular/forms';
import { Location } from '@angular/common';
import { Presupuesto } from 'src/app/interfaces/Presupuesto';
import { PresupuestoService } from 'src/app/_services/Presupuesto.service';
@Component({
  selector: 'app-reportes',
  templateUrl: './reportes.component.html',
  styleUrls: ['./reportes.component.css']
})
export class ReportesComponent implements OnInit {

  title(title: any) {
    throw new Error('Method not implemented.');
  }
  
  displayedColumns: string[] = ['anio', 'ppto_concepto', 'porce_ppto_alcanzado', 'ppto_alcanzado', 'ppto_restante'];

  presupuesto: Presupuesto[] = [];

  constructor(
    public fb: FormBuilder,
    public presupuestoService: PresupuestoService,
    public location: Location
  ){

  }
  ngOnInit(): void {
   
  }
 
  getPresupuesto():void{
    this.presupuestoService.GetallPresupuesto().subscribe(resp => {
      
      return this.presupuesto = resp;

      },
        error => { console.error(error) }
      );
  }

}
