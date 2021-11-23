import { Component, OnInit } from '@angular/core';
import { ChartDataSets, ChartOptions, ChartType } from 'chart.js';
import { Label, SingleDataSet } from 'ng2-charts';
import { DashboardService } from 'src/app/services/dashboard/dashboard.service';

@Component({
  selector: 'app-grafico4',
  templateUrl: './grafico4.component.html',
  styleUrls: ['./grafico4.component.css']
})
export class Grafico4Component implements OnInit {
  total_presupuestos : Number[] = [];

 public pieChartLabels: Label[] = ['Presupuesto asignado','Presupuesto alcanzado','Presupuesto restante'];
  public pieChartOptions: ChartOptions = {
    responsive: true,
  };
  public pieChartData: SingleDataSet = [0,0,0];
  public pieChartType: ChartType = 'pie';
  public pieChartLegend = true;
  public pieChartPlugins = [];

  constructor(public dashboardService: DashboardService) { }

  ngOnInit() {
    this.getDatosPptoGrafico()
  }
  getDatosPptoGrafico() {
    this.total_presupuestos = [];
    this.dashboardService.obtenerDatosGraficoPptoTotal(2).subscribe(res => {
      res.forEach(element => {
        this.total_presupuestos=[element.total_ppto_asignado,element.total_ppto_alcanzado,element.total_ppto_restante]
        
      });
      this.cargarDatosGrafica(this.total_presupuestos);
    })
  }

  cargarDatosGrafica(total_presupuestos) {
  
    this.pieChartData = [];
    this.pieChartData.push(total_presupuestos);
  }
}
