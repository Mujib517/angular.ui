import { Injectable } from "@angular/core";
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent } from "@angular/common/http";
import { Observable } from "rxjs/Observable";
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';

@Injectable()
export class ProductInterceptor implements HttpInterceptor {

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

        var token = localStorage.getItem("token");
        if (token) {
            var newReq = req.clone({ headers: req.headers.set("authorization", token) });
            return next.handle(newReq)
                .do(
                response => {
                    console.log("In response interceptor");
                    return response;
                })
                .catch(err => {
                    console.log("In Error");
                    return Observable.throw(err)
                });
        }

        return next.handle(req);
    }
}