import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Question } from 'src/app/models/data.model';

@Component({
  selector: 'app-quiz-questions',
  templateUrl: './quiz-questions.component.html',
  styleUrls: ['./quiz-questions.component.scss']
})
export class QuizQuestionsComponent implements OnInit {
  @Input() question: Question;

  quizQuestionForm = this.builder.group({
    option: [""]
  });

  constructor(private builder: FormBuilder) { }

  ngOnInit(): void {
    this.quizQuestionForm.valueChanges.subscribe((opt:any)=>{
      this.question.answer = opt.option;
    });

    this.quizQuestionForm.patchValue({
      option: this.question.answer
    });
  }

}
