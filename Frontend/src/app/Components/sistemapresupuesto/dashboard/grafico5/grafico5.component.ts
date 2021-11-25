import { Component, OnInit } from '@angular/core';
import { ChartDataSets, ChartOptions, ChartType } from 'chart.js';
import { Label, SingleDataSet } from 'ng2-charts';
import { DashboardService } from 'src/app/services/dashboard/dashboard.service';

@Component({
  selector: 'app-grafico5',
  templateUrl: './grafico5.component.html',
  styleUrls: ['./grafico5.component.css']
})
export class Grafico5Component implements OnInit {

  total_presupuestos : Number[] = [];
  conceptos : String[] = [];
 
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
    this.getDatosPptoGrafico()
  }
  getDatosPptoGrafico() {
    this.total_presupuestos = [];
    this.conceptos = [];
    this.dashboardService.obtenerDatosPorcentaje(1).subscribe(res => {
      res.forEach(element => {
        
        this.total_presupuestos.push(element.porce_ppto_alcanzado);
        this.conceptos.push(element.concepto);
        
      });
      
      this.cargarDatosGrafica(this.total_presupuestos,this.conceptos);
    })
  }

  cargarDatosGrafica(total_presupuestos,concepto) {
  
    this.barChartData = [];
    this.barChartData.push({data:total_presupuestos,label:'Porcentaje presupuesto alcanzado'});
    this.barChartLabels = [];
    for (const element in concepto) {
      this.barChartLabels.push(concepto[element])
      
    }
   
  }
   
  }
