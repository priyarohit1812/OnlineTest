import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { QuizListComponent } from './components/quiz/quiz-list/quiz-list.component';
import { AddUpdateQuizComponent } from './components/quiz/add-update-quiz/add-update-quiz.component';
import { QuestionAnswerComponent } from './components/quiz/question-answer/question-answer.component';
import { QuizComponent } from './components/quiz/quiz/quiz.component';
import { QuizQuestionsComponent } from './components/quiz/quiz-questions/quiz-questions.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ResultListComponent } from './components/quiz/result-list/result-list.component';
import { ResultComponent } from './components/quiz/result/result.component';
import { NavbarComponent } from './components/navbar/navbar.component';


@NgModule({
  declarations: [
    DashboardComponent,
    QuizListComponent,
    AddUpdateQuizComponent,
    QuestionAnswerComponent,
    QuizComponent,
    QuizQuestionsComponent,
    ResultListComponent,
    ResultComponent,
    NavbarComponent
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    ReactiveFormsModule
  ]
})
export class DashboardModule { }
