import { Component, Input, OnInit } from '@angular/core';
import { Validators } from '@angular/forms';
import { FormBuilder, FormControl } from '@angular/forms';
import { Option, OptionCodes, Question } from 'src/app/models/data.model';

@Component({
  selector: 'app-question-answer',
  templateUrl: './question-answer.component.html',
  styleUrls: ['./question-answer.component.scss']
})
export class QuestionAnswerComponent implements OnInit {
  @Input() question: Question;
  @Input() quizCode: string;
  @Input() index: number;

  options: string[] = [OptionCodes.OptionA, OptionCodes.OptionB, OptionCodes.OptionC, OptionCodes.OptionD];

  questionAnswerFrom = this.builder.group({
    question: this.builder.control("",[Validators.required]),
    optionA:  this.builder.control("", [Validators.required]),
    optionB:  this.builder.control("", [Validators.required]),
    optionC:  this.builder.control("", [Validators.required]),
    optionD:  this.builder.control("",  [Validators.required]),
    answer:  this.builder.control("", [Validators.required]),
    score:  this.builder.control(0,[Validators.required])
  });


  constructor(private builder: FormBuilder) { }

  ngOnInit(): void {
    this.questionAnswerFrom.patchValue({
      question: this.question.text,
      optionA: this.question.options.filter(o => o.code == OptionCodes.OptionA)[0].text,
      optionB: this.question.options.filter(o => o.code == OptionCodes.OptionB)[0].text,
      optionC: this.question.options.filter(o => o.code == OptionCodes.OptionC)[0].text,
      optionD: this.question.options.filter(o => o.code == OptionCodes.OptionD)[0].text,
      answer: this.question.answer,
      score: this.question.score
    });
    this.questionAnswerFrom.valueChanges.subscribe((qa: any) => {
      this.question.id = this.index;
      this.question.code = this.quizCode + "-" + this.index;
      this.question.text = qa.question;
      this.question.options.filter(o => o.code == OptionCodes.OptionA)[0].text = qa.optionA;
      this.question.options.filter(o => o.code == OptionCodes.OptionB)[0].text = qa.optionB;
      this.question.options.filter(o => o.code == OptionCodes.OptionC)[0].text = qa.optionC;
      this.question.options.filter(o => o.code == OptionCodes.OptionD)[0].text = qa.optionD;
      this.question.answer = qa.answer;
      this.question.score = qa.score;
    })
  }

}
