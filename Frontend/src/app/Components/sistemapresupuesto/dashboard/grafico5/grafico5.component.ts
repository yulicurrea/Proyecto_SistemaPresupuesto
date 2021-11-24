import { Component, OnInit } from '@angular/core';
import { ChartDataSets, ChartOptions, ChartType } from 'chart.js';
import { Label } from 'ng2-charts';
import { DashboardService } from 'src/app/services/dashboard/dashboard.service';

@Component({
  selector: 'app-grafico5',
  templateUrl: './grafico5.component.html',
  styleUrls: ['./grafico5.component.css']
})
export class Grafico5Component implements OnInit {

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
   
  }
}
