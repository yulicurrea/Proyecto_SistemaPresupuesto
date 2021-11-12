import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Usuario } from 'src/app/interfaces/Usuario';


@Injectable({
  providedIn: 'root'
})

export class UsuariosService {
  private API_SERVER = "http://localhost:8080/api/user/";

  constructor(private httpClient: HttpClient ) { }

  public getUsuario(id:string):Observable<Usuario>{
    return this.httpClient.get<Usuario>(this.API_SERVER + id);
  }

    public GetallUsuarios():Observable<Usuario[]>{
      return this.httpClient.get<Usuario[]>(this.API_SERVER);
    }
    public guardar(usuario: any): Observable<any>{
      return this.httpClient.post(this.API_SERVER,  usuario);
    }
    public eliminarPersona(id: string): Observable<any>{
      return this.httpClient.delete(this.API_SERVER+ "delete/" + id);
    }
    public login(usuario:any){
      return this.httpClient.post(this.API_SERVER + "login/", usuario);
    }
    public validar(usuario:any){
      return this.httpClient.post(this.API_SERVER + "validar/", usuario);
    }
}
