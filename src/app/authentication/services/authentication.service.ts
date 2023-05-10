import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Response } from 'src/app/models/data.model';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  private baseURL: string = "http://localhost:8090";
  private adminLoginURL:string = this.baseURL + "/admin/login";
  private userLoginURL:string = this.baseURL + "/user/login";
  private userRegisterURL:string = this.baseURL + "/user/register";
  

  constructor(private http: HttpClient) { }

  public adminLogin(request:any): Observable<Response>{
    return this.http.post<Response>(this.adminLoginURL, request);
  }

  public userLogin(request:any): Observable<Response>{
    return this.http.post<Response>(this.userLoginURL, request);
  }

  public userRegister(request:any): Observable<Response>{
    return this.http.post<Response>(this.userRegisterURL, request);
  }

   
}
