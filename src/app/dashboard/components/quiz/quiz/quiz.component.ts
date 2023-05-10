import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, ParamMap } from '@angular/router';
import { QuizService } from 'src/app/dashboard/services/quiz.service';
import { Question, Quiz, Response, Result } from 'src/app/models/data.model';
import * as _ from 'lodash';
import { ResultService } from 'src/app/dashboard/services/result.service';

@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.scss']
})
export class QuizComponent implements OnInit {
  quizWithAnswers: Quiz;
  quiz:Quiz = {
    id: 0,
    code: '',
    name: '',
    totalScore: 0,
    passingScore: 0,
    questions: []
  }
  constructor(private activeRoute: ActivatedRoute, private router: Router, private quizService: QuizService, private resultService: ResultService) { }

  ngOnInit(): void {
    this.activeRoute.paramMap.subscribe((param: ParamMap) => {
      let quizId = param.get('id');
      if (quizId) {
        this.quizService.getQuiz(quizId).subscribe((data: Quiz) => {
          this.quizWithAnswers = data;
          this.loadQuiz(data);
        });
      }
    });
  }

  loadQuiz(data: Quiz) {
    this.quiz = _.cloneDeep(data);
    this.quiz.questions.forEach(que => {
      que.answer = "";
    });
  }

  submitQuiz() {
    console.log(this.quiz);
    console.log(this.quizWithAnswers);
    let scoreObtained = 0;
    this.quiz.questions.forEach(que => {
      let question = this.quizWithAnswers.questions.filter(q=>q.code == que.code)[0];
      if (question && que.answer == question.answer) {
        scoreObtained = scoreObtained + que.score;
      }
    });
    let result: Result = {
      resultId: 0,
      quizId: this.quiz.id,
      marksObtained: scoreObtained,
      maxMarks: this.quiz.totalScore,
      isPass: scoreObtained >= this.quiz.passingScore
    }
    this.resultService.saveResult(result).subscribe((res: Response)=>{
      this.resultService.quiz = this.quizWithAnswers;
      this.resultService.result = res.response;
      this.router.navigateByUrl("user/result");
    });
  }
}
