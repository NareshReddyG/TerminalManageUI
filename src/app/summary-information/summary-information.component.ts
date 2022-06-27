import { Component, OnInit } from '@angular/core';
import { SummaryModel } from '../models/SummaryModel';
import { SummaryService } from '../services/summary.service';

@Component({
  selector: 'app-summary-information',
  templateUrl: './summary-information.component.html',
  styleUrls: ['./summary-information.component.scss']
})
export class SummaryInformationComponent implements OnInit {
  summaryModel: SummaryModel;
  id: string = '';
  constructor(private summaryService: SummaryService) { }

  ngOnInit(): void {
  }
  getSummaryById(): void {
    debugger;
    if (this.id.length < 36) {
      // Nice to have: Use form error or use toasts
      alert("Please Enter id");
      return;
    }
    this.summaryService.getSummaryById(this.id).subscribe(result => {
      this.summaryModel = result;
    });
  }
}
