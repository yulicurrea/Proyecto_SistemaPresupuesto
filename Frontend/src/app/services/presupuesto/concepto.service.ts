import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Concepto } from 'src/app/interfaces/Concepto';
import { ConceptoVis } from 'src/app/interfaces/Concepto';

@Injectable({
  providedIn: 'root'
})
export class ConceptoService {

  private API_SERVER = "http://localhost:8080/api/conceptos";

  constructor(private httpClient: HttpClient ) { }

    public obtenerTodos():Observable<Concepto[]>{
      return this.httpClient.get<Concepto[]>(this.API_SERVER+"/getAll");
    }
    public obtener():Observable<ConceptoVis[]>{
      return this.httpClient.get<ConceptoVis[]>(this.API_SERVER+"/obtener");
    }
    public guardar(concepto: any): Observable<any>{
      return this.httpClient.post(this.API_SERVER+"/saveConcepto",concepto);
    }
    public eliminar(id: number): Observable<any>{
      return this.httpClient.delete(this.API_SERVER+ "/deleteConcepto/" + id);
    }
}
