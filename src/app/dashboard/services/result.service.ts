import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Quiz, Response, Result } from 'src/app/models/data.model';

@Injectable({
  providedIn: 'root'
})
export class ResultService {
  private baseURL: string = "http://localhost:8090";
  private submitResultURL: string = this.baseURL + "/user/result/save";
  private listResultURL: string = this.baseURL + "/user/result/list";

  quiz:Quiz;
  result: Result;

  constructor(private http: HttpClient) { }

  saveResult(result:Result): Observable<Response>{
    return this.http.post<Response>(this.submitResultURL,result);
  }

  getResultList(): Observable<Response>{
    return this.http.get<Response>(this.listResultURL);
  }
}
