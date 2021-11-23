import { Component, OnInit } from '@angular/core';
import { ChartDataSets, ChartOptions, ChartType } from 'chart.js';
import { Color, Label } from 'ng2-charts';
import { DashboardService } from 'src/app/services/dashboard/dashboard.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  conceptos: String[] = [];
  ppto_asignado: Number[] = [];
  ppto_alcanzado: Number[] = [];

  public barChartOptions: ChartOptions = {
    responsive: true,
  };
  public barChartLabels: Label[] = [];
  public barChartType: ChartType = 'bar';
  public barChartLegend = true;
  public barChartPlugins = [];

  public barChartData: ChartDataSets[] = [];

  constructor(public dashboardService: DashboardService) { }

  ngOnInit() {
    this.getDatosPptoGrafico1();
    this.getDatosPptoGrafico2();
  }
  getDatosPptoGrafico1() {
    this.conceptos = [];
    this.ppto_asignado = [];
    this.ppto_alcanzado = [];
    this.dashboardService.obtenerDatosGraficoPpto("1").subscribe(res => {
      res.forEach(element => {
        this.conceptos.push(element.concepto);
        this.ppto_asignado.push(element.ppto_asignado);
        this.ppto_alcanzado.push(element.ppto_alcanzado)
      });
      this.cargarDatosGrafica(this.conceptos, this.ppto_asignado, this.ppto_alcanzado);
    })
  }
  getDatosPptoGrafico2() {
    this.conceptos = [];
    this.ppto_asignado = [];
    this.ppto_alcanzado = [];
    this.dashboardService.obtenerDatosGraficoPpto("2").subscribe(res => {
      res.forEach(element => {
        this.conceptos.push(element.concepto);
        this.ppto_asignado.push(element.ppto_asignado);
        this.ppto_alcanzado.push(element.ppto_alcanzado)
      });
      this.cargarDatosGrafica(this.conceptos, this.ppto_asignado, this.ppto_alcanzado);
    })
  }
  cargarDatosGrafica(concepto, ppto_asignado, ppto_alcanzado) {
    this.barChartData = [];
    this.barChartLabels = [];
    for (const index in concepto) {
      this.barChartLabels.push(concepto[index]);
    }
      this.barChartData.push({data: ppto_asignado,label:'Presupuesto Asignado'},{data: ppto_alcanzado,label:'Presupuesto Alcanzado'})
    
  }
}
