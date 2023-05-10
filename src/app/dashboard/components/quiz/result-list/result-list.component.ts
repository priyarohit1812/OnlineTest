import { Component, OnInit } from '@angular/core';
import { QuizService } from 'src/app/dashboard/services/quiz.service';
import { ResultService } from 'src/app/dashboard/services/result.service';
import { Result, ResultDetails } from 'src/app/models/data.model';

@Component({
  selector: 'app-result-list',
  templateUrl: './result-list.component.html',
  styleUrls: ['./result-list.component.scss']
})
export class ResultListComponent implements OnInit {
  result_list: ResultDetails[] = [];
  constructor(private resultService: ResultService, private quizService: QuizService) { }

  ngOnInit(): void {
    this.resultService.getResultList().subscribe((data)=>{
      let resultList:Result[] = data.response;
      resultList.forEach(res => {
        this.quizService.getQuiz(res.quizId).subscribe((quiz)=>{
          let resDetail: ResultDetails = {
            resultId: res.resultId,
            quiz: quiz,
            marksObtained: res.marksObtained,
            maxMarks: res.maxMarks,
            isPass: res.isPass
          };
          this.result_list.push(resDetail);
        })
      });
    });
  }

}
