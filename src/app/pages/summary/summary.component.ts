import {AfterViewInit, Component} from '@angular/core';
import {SummaryService} from "./services/summary.service";
import {Ingredients, MockedDishes} from "../../core/mockedDishes";
import {Observable} from "rxjs";

@Component({
  selector: 'app-summary',
  templateUrl: './summary.component.html',
  styleUrls: ['./summary.component.scss']
})
export class SummaryComponent implements AfterViewInit {
  summary: MockedDishes[] = []
  totalPrice: number = 0
  totalIngredients: Ingredients[] = []
  summary$: Observable<MockedDishes[]> = this.summaryService.summary$

  constructor(private summaryService: SummaryService) {
    this.summary = this.summaryService.getSummary()
    this.totalPrice = this.summary.reduce((accumulator, currentValue) => {
      return accumulator + currentValue.price
    }, 0)
      // this.totalIngredients = this.calculateIngredients(mocked)
  }

  calculateIngredients(dishes: MockedDishes[]): Ingredients[] {
    const overall: Ingredients[] = []
    let x = {}
    for (const dish of dishes) {
      x = Object.assign({}, x, dish.ingredients)
      for (const ingredients of dish.ingredients) {

      }

    }
    console.log(x)
    return overall
  }

  ngAfterViewInit() {
    this.summaryService.summarySubject.next(this.summary)
  }

}
