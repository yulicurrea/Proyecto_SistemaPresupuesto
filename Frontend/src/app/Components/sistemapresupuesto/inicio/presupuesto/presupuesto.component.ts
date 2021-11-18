import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Concepto } from 'src/app/interfaces/Concepto';
import { Presupuesto, PresupuestoVis } from 'src/app/interfaces/Presupuesto';
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

  displayedColumns: string[] = ['categoria', 'concepto', 'anio', 'ppto_asignado', 'porce_ppto_alcanzado', 'ppto_alcanzado', 'ppto_restante'];
  presupuestoForm!: FormGroup;
  presupuestos: Presupuesto[] = [];
  presupuestosVis: PresupuestoVis[] = [];
  presup: any;

  selectedValue: string = "";

  conceptos: Concepto[] = [];
 


  constructor(
    public fb: FormBuilder,
    public presupuestoService: PresupuestoService
  ) { }

  ngOnInit(): void {
    this.presupuestoForm = this.fb.group({
      categoria: ['', Validators.required],
      concepto: ['', Validators.required],
      anio: ['', Validators.required, Validators.maxLength(4), Validators.minLength(4), Validators.min(1900), Validators.max(2099)],
      presupuesto: ['', Validators.required, Validators.pattern(/^[0-9]+/)]
    });;
    this.getPresupuestosVis()
  }
  getPresupuestosVis() {
    this.presupuestoService.obtenerVis().subscribe(res => {
      console.log(res);
      return this.presupuestosVis = res;
    })
  }
  guardar(): void {
    this.presupuestoService.guardar(this.presupuestoForm.value).subscribe(resp => {
      this.presupuestoForm.reset();
      this.presup = this.presup.filter((presupuesto: { id: any; }) => resp.id == presupuesto.id);
      this.presup.push(resp);
    }
    );
  }
}
