import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})

export class AuthenticationService {
  private API_SERVER = "http://localhost:8080/";

  constructor(private httpClient: HttpClient ) { }

    public login(usuario:string, clave:string):Observable<any>{
        let data = {
            usuario:usuario,
            clave: clave
        }
      return this.httpClient.post<any>(this.API_SERVER + "login", data);
    }
    
}
