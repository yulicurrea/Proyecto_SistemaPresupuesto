import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { Observable } from "rxjs";

export class JwtInterceptor implements HttpInterceptor{

    intercept(
        request: HttpRequest<any>,
        next: HttpHandler
    ): Observable<HttpEvent<any>> {
        request = this.addAutorization(request);
        return next.handle(request);
    }

    private addAutorization(request: HttpRequest<any>): HttpRequest<any> {
        // add authorization header with jwt token if available

        let token = localStorage.getItem("TOKEN");
        

        if (token) {
            request = request.clone({
                setHeaders: {
                    Authorization: `Bearer ${token}`
                }
            });
        }

        return request;
    }

}