import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { PresupuestoDTO } from 'src/app/interfaces/presupuestoDTO';
import { Presupuesto, PresupuestoVis } from '../../interfaces/Presupuesto';

@Injectable({
  providedIn: 'root'
})
export class PresupuestoVisService {

  private API_SERVER = "http://localhost:8080/api/presupuestos";

  constructor(private httpClient: HttpClient ) { }

    
    public obtenerVis(idCategoria:number):Observable<PresupuestoDTO>{
      return this.httpClient.get<PresupuestoDTO>(this.API_SERVER+"/obtenerPre/" + idCategoria);
    }

    public exportaPDF():Observable<Blob>{
      return this.httpClient.get(this.API_SERVER+"/PDF", { responseType: 'blob'});
    }
}
