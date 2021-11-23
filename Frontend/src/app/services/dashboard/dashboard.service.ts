import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { PptoDashboard } from 'src/app/interfaces/PptoDashboard';

@Injectable({
  providedIn: 'root'
})
export class DashboardService {
  private API_SERVER = "http://localhost:8080/api/dashboard";

  constructor(private httpClient: HttpClient ) { }

    public obtenerDatosGraficoPpto(id: string):Observable<PptoDashboard[]>{
      return this.httpClient.get<PptoDashboard[]>(this.API_SERVER+"/datosDashPpto/"+id);
    }
}
