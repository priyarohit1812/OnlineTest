import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { QuizComponent } from './components/quiz/quiz/quiz.component';
import { AddUpdateQuizComponent } from './components/quiz/add-update-quiz/add-update-quiz.component';
import { ResultComponent } from './components/quiz/result/result.component';
import { ResultListComponent } from './components/quiz/result-list/result-list.component';
import { NavbarComponent } from './components/navbar/navbar.component';


const routes: Routes = [
  {
    path: 'admin/dashboard',
    component: DashboardComponent
  },
  {
    path: 'user/dashboard',
    component: DashboardComponent
  },
  {
    path: 'admin/quiz/new',
    component: AddUpdateQuizComponent
  },
  {
    path: 'admin/quiz/:id',
    component: AddUpdateQuizComponent
  },
  {
    path: 'user/quiz/attempt/:id',
    component: QuizComponent
  },
  {
    path: 'user/result/list',
    component: ResultListComponent
  },
  {
    path: 'user/result',
    component: ResultComponent
  },
  {
    path: 'navbar',
    component: NavbarComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
