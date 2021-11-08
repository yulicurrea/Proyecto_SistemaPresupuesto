import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, ɵHttpInterceptingHandler } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

   private API_SERVER = "http://localhost:8080/api/user/";

  constructor(private httpClient: HttpClient) { }

  public getAlluser(): Observable<any>{
    return this.httpClient.get(this.API_SERVER);
  }

  public saveUser(usuario:any): Observable<any>{
    return this.httpClient.post(this.API_SERVER,usuario);
  }




}
