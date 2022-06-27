import { Component, OnInit } from '@angular/core';
import { SummaryModel } from '../models/SummaryModel';
import { SummaryService } from '../services/summary.service';

@Component({
  selector: 'app-summary',
  templateUrl: './summary.component.html',
  styleUrls: ['./summary.component.scss']
})
export class SummaryComponent implements OnInit {

  summaryDisplayedColumns: string[] = ['apiId', 'count'];
  summaryDataSource: SummaryModel[] = [];

  constructor(private summaryService: SummaryService) { }

  ngOnInit(): void {
    this.getSummary();
  }

  getSummary = () => {
    this.summaryService.getSummary().subscribe(result=>{
      this.summaryDataSource = result;
    })
  }

}
