import { Component, Input, OnInit } from '@angular/core';
import { QuizService } from 'src/app/dashboard/services/quiz.service';
import { Quiz } from 'src/app/models/data.model';


@Component({
  selector: 'app-quiz-list',
  templateUrl: './quiz-list.component.html',
  styleUrls: ['./quiz-list.component.scss']
})
export class QuizListComponent implements OnInit {
  quiz_list: Quiz[];
  is_admin: boolean;

  constructor(private quizService: QuizService) { }

  ngOnInit(): void {
    this.fetchAllQuiz();
    this.is_admin = JSON.parse(sessionStorage.getItem("is_admin") || "false");
  }

  fetchAllQuiz() {
    this.quizService.getAllQuiz().subscribe((data: Quiz[]) => {
      this.quiz_list = [...data];
    });
  }

  deleteQuiz(id: number) {
    this.quizService.deleteQuiz(id).subscribe((data) => {
      this.fetchAllQuiz();
    });
  }

}
