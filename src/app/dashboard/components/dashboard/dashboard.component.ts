import { Component, OnInit } from '@angular/core';
import { QuizService } from '../../services/quiz.service';
import { Quiz } from 'src/app/models/data.model';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  quiz_list: Quiz[] = [];
  is_admin: boolean = false;
  constructor(private quizService : QuizService) { }

  ngOnInit(): void {
    this.quiz_list = this.quizService.quizList;
    this.is_admin = JSON.parse(sessionStorage.getItem("is_admin") || "false");
  }

}
