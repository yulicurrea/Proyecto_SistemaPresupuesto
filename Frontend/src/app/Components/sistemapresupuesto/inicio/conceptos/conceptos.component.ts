import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Concepto } from 'src/app/interfaces/Concepto';
import { ConceptoService } from 'src/app/services/presupuesto/concepto.service';

@Component({
  selector: 'app-conceptos',
  templateUrl: './conceptos.component.html',
  styleUrls: ['./conceptos.component.css']
})
export class ConceptosComponent implements OnInit {

  displayedColumns: string[] = ['id', 'concepto'];
  conceptoForm!: FormGroup;
  conceptos: Concepto[] = [];
  con: any;

  constructor(public fb: FormBuilder,
    public conceptoService: ConceptoService) { }

  ngOnInit(): void {
    this.conceptoForm = this.fb.group({
      concepto: ['', Validators.required]
    });;
  }
  guardar(): void {
    this.conceptoService.guardar(this.conceptoForm.value).subscribe(resp => {
      this.conceptoForm.reset();
      this.con = this.con.filter((concep: { id: any; }) => resp.id == concep.id);
      this.con.push(resp);
    }
    );
  }
}
