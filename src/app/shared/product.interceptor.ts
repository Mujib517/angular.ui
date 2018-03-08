import { Injectable } from "@angular/core";
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent } from "@angular/common/http";
import { Observable } from "rxjs/Observable";

@Injectable()
export class ProductInterceptor implements HttpInterceptor {

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

        var token = localStorage.getItem("token");
        if (token) {
            var newReq = req.clone({ headers: req.headers.set("authorization", token) });
            return next.handle(newReq);
        }
        
        return next.handle(req);
    }
}