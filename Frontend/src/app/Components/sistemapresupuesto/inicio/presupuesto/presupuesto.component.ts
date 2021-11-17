import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Categoria } from 'src/app/interfaces/Categoria';
import { Concepto } from 'src/app/interfaces/Concepto';
import { Presupuesto } from 'src/app/interfaces/Presupuesto';
import { PresupuestoService } from 'src/app/services/presupuesto.service';


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
  presup: any;

  selectedValue: string = "";

  conceptos: Concepto[] = [
    { id: 1, concepto: "Luz" },
    { id: 2, concepto: "Salarios" },
    { id: 3, concepto: "Ventas" }
  ];
  categorias: Categoria[] = [
    { id: 1, categoria: "Ingreso" },
    { id: 2, categoria: "Gasto" }
  ];


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
