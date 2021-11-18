import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Presupuesto } from 'src/app/interfaces/Presupuesto';


@Injectable({
  providedIn: 'root'
})

export class PresupuestoService {
  private API_SERVER = "http://localhost:8080/api/presupuestos";

  constructor(private httpClient: HttpClient ) { }

    public GetallPresupuesto():Observable<Presupuesto[]>{
      return this.httpClient.get<Presupuesto[]>(this.API_SERVER + "/getAll");
    }  
}