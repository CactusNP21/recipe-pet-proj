import { Component } from '@angular/core';
import {SummaryService} from "./services/summary.service";
import {MockedDishes} from "../../core/mockedDishes";

@Component({
  selector: 'app-summary',
  templateUrl: './summary.component.html',
  styleUrls: ['./summary.component.scss']
})
export class SummaryComponent {
  summary: MockedDishes[] = []
  constructor(private summaryService: SummaryService) {
    this.summary = this.summaryService.getSummary()
  }


}
