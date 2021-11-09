import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class UsuariosService {
  private API_SERVER = "http:localhost:8080/api/user/";

  constructor(private httpClient: HttpClient ) { }

    public GetallUsuarios(){
      return this.httpClient.get(this.API_SERVER);
    }
    public saveUsuario (user:any): Observable<any>{
      return this.httpClient.post(this.API_SERVER,user);
    }
}
