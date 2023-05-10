import { Injectable } from '@angular/core';
import {  
  HttpRequest,  
  HttpHandler,  
  HttpEvent,  
  HttpInterceptor,  
  HttpHeaders
} from '@angular/common/http';  
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class InterceptorService implements HttpInterceptor{
  constructor() { }
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    let clonedRequest = req.clone();
    if (!clonedRequest.url.includes("login") && !clonedRequest.url.includes("register")) {      
      const token = sessionStorage.getItem('token');
      clonedRequest = req.clone({
        headers: new HttpHeaders({
          Authorization : 'Bearer ' + token
        })
      });
    }
    return next.handle(clonedRequest);
  }
}
