import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Concepto } from 'src/app/interfaces/Concepto';

@Injectable({
  providedIn: 'root'
})
export class ConceptoService {

  private API_SERVER = "http://localhost:8080/";

  constructor(private httpClient: HttpClient ) { }

    public obtenerTodos():Observable<Concepto[]>{
      return this.httpClient.get<Concepto[]>(this.API_SERVER);
    }
    public guardar(concepto: any): Observable<any>{
      return this.httpClient.post(this.API_SERVER,concepto);
    }
    public eliminar(id: number): Observable<any>{
      return this.httpClient.delete(this.API_SERVER+ "delete/" + id);
    }
}
