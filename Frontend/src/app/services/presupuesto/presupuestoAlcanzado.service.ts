import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { PresupuestoAlcanzado, PresupuestoAlcanzadoVis } from 'src/app/interfaces/PresupuestoAlcanzado';


@Injectable({
  providedIn: 'root'
})
export class PresupuestoAlcanzadoService {
  private API_SERVER = "http://localhost:8080/api/presupuestoAlcanzado";

  constructor(private httpClient: HttpClient ) { }

    public obtenerTodas():Observable<PresupuestoAlcanzado[]>{
      return this.httpClient.get<PresupuestoAlcanzado[]>(this.API_SERVER+"/getAll");
    }
    public guardar(presupuestoAlcanzado: any): Observable<any>{
      return this.httpClient.post(this.API_SERVER+"/savePresupuestoAlcanzado",presupuestoAlcanzado);
    }
    public eliminar(id: number): Observable<any>{
      return this.httpClient.delete(this.API_SERVER+ "/deletePresupuesto/" + id);
    }
    public obtenerLista(id: number):Observable<PresupuestoAlcanzadoVis[]>{
      return this.httpClient.get<PresupuestoAlcanzadoVis[]>(this.API_SERVER+"/obtenerLista/"+ id);
    }
}
