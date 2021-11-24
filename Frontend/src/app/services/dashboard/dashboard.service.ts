import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { PptoDashboard, PptoTotalDashboard } from 'src/app/interfaces/PptoDashboard';

@Injectable({
  providedIn: 'root'
})
export class DashboardService {
  private API_SERVER = "http://localhost:8080/api/dashboard";

  constructor(private httpClient: HttpClient ) { }

    public obtenerDatosGraficoPpto(id: number):Observable<PptoDashboard[]>{
      return this.httpClient.get<PptoDashboard[]>(this.API_SERVER+"/datosDashPpto/"+id);
    }
    public obtenerDatosGraficoPptoTotal(id: number):Observable<PptoTotalDashboard[]>{
      return this.httpClient.get<PptoTotalDashboard[]>(this.API_SERVER+"/datosDashPptoTotal/"+id);
    }
}
