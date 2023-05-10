import { Component, OnInit } from '@angular/core';
import { Validators, FormBuilder } from '@angular/forms';
import { ActivatedRoute, Router, ParamMap } from '@angular/router';
import { QuizService } from 'src/app/dashboard/services/quiz.service';
import { Quiz, Question, OptionCodes } from 'src/app/models/data.model';

@Component({
  selector: 'app-add-update-quiz',
  templateUrl: './add-update-quiz.component.html',
  styleUrls: ['./add-update-quiz.component.scss']
})
export class AddUpdateQuizComponent implements OnInit {
  quizForm = this.builder.group({
    code: this.builder.control("", [Validators.required]),
    name: this.builder.control("",[Validators.required]) ,
    passingScore: this.builder.control(0, [Validators.required]),
    totalScore: this.builder.control(0,[Validators.required])
  });

  quiz:Quiz = {
    id: 0,
    code: '',
    name: '',
    totalScore: 0,
    passingScore: 0,
    questions: []
  }
  constructor(private builder: FormBuilder, private activeRoute: ActivatedRoute, private router: Router, private quizService: QuizService) { }

  ngOnInit(): void {
    this.activeRoute.paramMap.subscribe((param: ParamMap)=>{
      let quizId = param.get('id');
      if (quizId) {
        this.quizService.getQuiz(quizId).subscribe((data: Quiz)=>{
          this.loadQuiz(data);
        });
      }
    });
    this.quizForm.valueChanges.subscribe((q:any)=>{
      this.quiz.code = q.code;
      this.quiz.name = q.name;
      this.quiz.passingScore = q.passingScore;
      this.quiz.totalScore = q.totalScore;
    });
  }

  loadQuiz(data:Quiz){
    this.quiz.id = data.id;
    this.quiz.questions = data.questions;
    this.quizForm.patchValue({
      code: data.code,
      name: data.name,
      passingScore: data.passingScore,
      totalScore: data.totalScore
    });
  }

  addQuestion(){
    let que : Question = {
      id: 0,
      code: '',
      text: '',
      score: 0,
      options: [
        {
          code: OptionCodes.OptionA,
          text: ''
        },
        {
          code: OptionCodes.OptionB,
          text: ''
        },
        {
          code: OptionCodes.OptionC,
          text: ''
        },
        {
          code: OptionCodes.OptionD,
          text: ''
        }
      ],
      answer: ''
    };

    this.quiz.questions.push(que);
  }

  deleteQuestion(i:number){
    this.quiz.questions.splice(i,1);
  }

  saveQuiz(){
    if (this.quiz.id > 0) {
      this.quizService.updateQuiz(this.quiz).subscribe((data)=>{
        this.router.navigateByUrl("admin/dashboard");
      });
    } else {
      this.quizService.createQuiz(this.quiz).subscribe((data)=>{
        this.router.navigateByUrl("admin/dashboard");
      });
    }
  }
}
