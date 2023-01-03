import {AfterViewInit, Component, OnInit} from '@angular/core';
import {SummaryService} from "./services/summary.service";
import {MockedDishes} from "../../core/mockedDishes";

@Component({
  selector: 'app-summary',
  templateUrl: './summary.component.html',
  styleUrls: ['./summary.component.scss']
})
export class SummaryComponent implements AfterViewInit{
  summary: MockedDishes[] = []
  test$ = this.summaryService.test$ //TODO MAKE NORMAL NAME
  constructor(private summaryService: SummaryService) {
    this.summary = this.summaryService.getSummary()
  }
  ngAfterViewInit() {
    this.summaryService.testSub.next(this.summary)
  }

}
