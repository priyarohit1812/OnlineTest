import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { Quiz } from 'src/app/models/data.model';

@Injectable({
  providedIn: 'root'
})
export class QuizService {
  private baseURL: string = "http://localhost:3000";
  private quizURL: string = this.baseURL + "/quizes";

  public quizList: Quiz[] = [];

  constructor(private http: HttpClient) {
   }

  createQuiz(quiz: Quiz): Observable<any> {
    return this.http.post(this.quizURL, quiz);
  }

  getQuiz(quizId: any): Observable<Quiz> {
    return this.http.get<Quiz>(this.quizURL + `/${quizId}`);
  }

  updateQuiz(quiz: Quiz): Observable<any> {
    return this.http.put(this.quizURL + `/${quiz.id}`, quiz);
  }

  deleteQuiz(quizId: any): Observable<any> {
    return this.http.delete(this.quizURL + `/${quizId}`);
  }

  getAllQuiz(): Observable<Quiz[]> {
    return this.http.get<Quiz[]>(this.quizURL);
  }
}
