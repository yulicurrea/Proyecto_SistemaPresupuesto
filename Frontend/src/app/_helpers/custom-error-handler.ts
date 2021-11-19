import { HttpErrorResponse } from "@angular/common/http";
import { ErrorHandler, Injectable } from "@angular/core";
import { Router } from "@angular/router";
import Swal from 'sweetalert2'

@Injectable()
export class CustomErrorHandler implements ErrorHandler {

    constructor(private router:Router
        ){

    }

    handleError(error: any): void {
        console.log(error)

        if (error instanceof HttpErrorResponse) {
            this.httpErrors(error);
        }
        else {
            throw new Error("Method not implemented.");
        }
    }

    httpErrors(error: HttpErrorResponse) {
        
        switch (error.status) {
            case 0:

                break;

            case 401:
                //Notificar que no tiene permisos o vencio la sesion
                
                //Borrar token
                localStorage.removeItem('TOKEN');
                // Dirigir al login
                this.router.navigate(['login']);
                break;
            case 403:
                Swal.fire('No tiene suficientes permisos');
            break;

            default:
                throw error;
                break;
        }
    }



}