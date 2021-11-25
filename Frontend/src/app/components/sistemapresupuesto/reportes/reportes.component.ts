import { Component, OnInit, ViewChild } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { Presupuesto, PresupuestoVis, } from 'src/app/interfaces/Presupuesto';
import { PresupuestoDTO } from 'src/app/interfaces/presupuestoDTO';
import { PresupuestoService } from 'src/app/services/presupuesto/presupuesto.service';
import { PresupuestoVisService } from 'src/app/services/presupuesto/presupuestovis.service';


import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';

@Component({
  selector: 'app-reportes',
  templateUrl: './reportes.component.html',
  styleUrls: ['./reportes.component.css']
})
export class ReportesComponent implements OnInit {

  displayedColumns: string[] = ['concepto', 'anio', 'ppto_asignado', 'porce_ppto_alcanzado', 'ppto_alcanzado', 'ppto_restante'];
  presupuestos: Presupuesto[] = [];
  presupuestosVis: PresupuestoVis[] = [];
  presup: any;


  idIngresos = 1;
  idEgresos = 2;
  ingresos: PresupuestoDTO = new PresupuestoDTO();
  egresos: PresupuestoDTO = new PresupuestoDTO();

  loading: boolean = false;

  constructor(public presupuestoService: PresupuestoService,
    private presupuestoVisService: PresupuestoVisService,
    private router: Router,
    private _snackBar: MatSnackBar) {

  }

  ngOnInit(): void {
    //this.getPresupuestosVis();

    this.getIngresos();
    this.getEgresos();

  }

  getPresupuestosVis() {//No se usa
    this.presupuestoService.obtenerVis().subscribe(res => {
      console.log(res);
      return this.presupuestosVis = res;
    })
  }

  getIngresos() {
    this.presupuestoVisService.obtenerVis(this.idIngresos).subscribe(
      resp => {
        this.ingresos = resp;

        this.ingresos.datos.push({
          id: 0,
          concepto: 'Total',
          ppto_asignado: this.ingresos.totalPresupuesto,
          porce_ppto_alcanzado: this.ingresos.totalPorcentajeEjecucion,
          ppto_alcanzado: this.ingresos.totalEjecutado,
          ppto_restante: this.ingresos.totalFaltante,
          categoria: ""
        })
      }
    );
  }

  getEgresos() {
    this.presupuestoVisService.obtenerVis(this.idEgresos).subscribe(
      resp => {
        this.egresos = resp;

        this.egresos.datos.push({
          id: 0,
          concepto: 'Total',
          ppto_asignado: this.egresos.totalPresupuesto,
          porce_ppto_alcanzado: this.egresos.totalPorcentajeEjecucion,
          ppto_alcanzado: this.egresos.totalEjecutado,
          ppto_restante: this.egresos.totalFaltante,
          categoria: ""
        })
      }
    );
  }


  exportarPDF() {
    const DATA = document.getElementById('contenedorPDF');
    const doc = new jsPDF('p', 'pt', 'a4');

    const options = {
      background: 'white',
      scale: 3
    }

    html2canvas(DATA, options).then((canvas) => {

      const img = canvas.toDataURL('image/PNG');

      // Add image Canvas to PDF
      const bufferX = 15;
      const bufferY = 15;
      const imgProps = (doc as any).getImageProperties(img);
      const pdfWidth = doc.internal.pageSize.getWidth() - 2 * bufferX;
      const pdfHeight = (imgProps.height * pdfWidth) / imgProps.width;
      doc.addImage(img, 'PNG', bufferX, bufferY, pdfWidth, pdfHeight, undefined, 'FAST');
      return doc;
    }).then((docResult) => {
      docResult.save(`Presupuesto.pdf`);
    });



  }
  exportarPDF2() {
    this.loading = true;

    this.presupuestoVisService.exportaPDF().subscribe(res => {
      this.loading = false;

      const blob: Blob = new Blob([res], { type: 'application/pdf' });
      const fileName: string = 'Presupuesto.pdf';
      const objectUrl: string = URL.createObjectURL(blob);


      const a: HTMLAnchorElement = document.createElement('a') as HTMLAnchorElement;
      a.href = objectUrl;
      a.download = fileName;
      document.body.appendChild(a);
      a.click();

      document.body.removeChild(a);
      URL.revokeObjectURL(objectUrl);

    },
    err=>{
      this.loading = false;
      throw err;
    }
    );
  }

}
