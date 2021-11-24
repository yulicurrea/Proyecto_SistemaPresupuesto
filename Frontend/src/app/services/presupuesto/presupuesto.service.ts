import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Presupuesto, PresupuestoVis } from '../../interfaces/Presupuesto';

@Injectable({
  providedIn: 'root'
})
export class PresupuestoService {

  private API_SERVER = "http://localhost:8080/api/presupuestos";

  constructor(private httpClient: HttpClient ) { }

    public GetallPresupuesto():Observable<Presupuesto[]>{
      return this.httpClient.get<Presupuesto[]>(this.API_SERVER+"/getAll");
    }
    public obtenerVis():Observable<PresupuestoVis[]>{
      return this.httpClient.get<PresupuestoVis[]>(this.API_SERVER+"/obtenerPre");
    }
    public guardar(presupuesto: any): Observable<any>{
      return this.httpClient.post(this.API_SERVER+"/savePresupuesto",presupuesto);
    }
    public eliminarPresupuesto(id: string): Observable<any>{
      return this.httpClient.delete(this.API_SERVER+ "/deletePresupuesto/" + id);
    }
}
