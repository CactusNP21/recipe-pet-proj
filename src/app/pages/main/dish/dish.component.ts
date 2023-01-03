import {Component, Input, OnInit} from '@angular/core';
import {MockedDishes} from "../../../core/mockedDishes";
import {MatExpansionPanel} from "@angular/material/expansion";
import {SummaryService} from "../../summary/services/summary.service";
import {SearchService} from "../services/search.service";

@Component({
  selector: 'app-dish',
  templateUrl: './dish.component.html',
  styleUrls: ['./dish.component.scss'],
  viewProviders: [MatExpansionPanel]
})
export class DishComponent implements OnInit{
  @Input() dish!: MockedDishes

  constructor(private summaryService: SummaryService, private mocked: SearchService) {
  }


  addDish() {
    this.dish.added = true
    this.summaryService.sendDish(this.dish)
    this.mocked.added(this.dish)
  }
  removeDish() {
    this.dish.added = false
    this.summaryService.removeDish(this.dish)
    this.mocked.removed(this.dish)
  }
  ngOnInit() {
  }
}
