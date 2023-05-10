import { Component, OnInit } from '@angular/core';
import { ResultService } from 'src/app/dashboard/services/result.service';
import { Quiz, Result } from 'src/app/models/data.model';

@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.scss']
})
export class ResultComponent implements OnInit {
  quiz: Quiz;
  result: Result;
  constructor(private resultService: ResultService) { }

  ngOnInit(): void {
    this.quiz = this.resultService.quiz;
    this.result = this.resultService.result;
  }

}
