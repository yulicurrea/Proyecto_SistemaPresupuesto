import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Categoria } from 'src/app/interfaces/Categoria';


@Injectable({
  providedIn: 'root'
})
export class CategoriaService {
  private API_SERVER = "http://localhost:8080/api/categorias";

  constructor(private httpClient: HttpClient ) { }

    public obtenerTodas():Observable<Categoria[]>{
      return this.httpClient.get<Categoria[]>(this.API_SERVER+"/getAll");
    }
    public guardar(categoria: any): Observable<any>{
      return this.httpClient.post(this.API_SERVER+"/saveCategoria",categoria);
    }
    public eliminar(id: number): Observable<any>{
      return this.httpClient.delete(this.API_SERVER+ "/deleteCategoria/" + id);
    }
}
