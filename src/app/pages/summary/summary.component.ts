import {AfterViewInit, Component} from '@angular/core';
import {SummaryService} from "./services/summary.service";
import {Ingredients, mocked, MockedDishes} from "../../core/mockedDishes";
import {Observable} from "rxjs";
import {MatDialog} from "@angular/material/dialog";
import {IngredientsDialogComponent} from "./ingredients-dialog/ingredients-dialog.component";

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

  constructor(private summaryService: SummaryService, private dialog: MatDialog) {
    this.summary = this.summaryService.getSummary()
    this.totalPrice = this.summary.reduce((accumulator, currentValue) => {
      return accumulator + currentValue.price * currentValue.servings
    }, 0)
  }

  openDialog() {
    this.totalIngredients = this.calculateIngredients(this.summary)
    this.dialog.open(IngredientsDialogComponent, {
      data: this.totalIngredients
    })
  }
  changeServ(dish: MockedDishes) {
    this.summary.find(value => value.id === dish.id)!.servings = dish.servings
    this.totalPrice = this.summary.reduce((accumulator, currentValue) => {
      return accumulator + currentValue.price * currentValue.servings
    }, 0)
  }
  calculateIngredients(dishes: MockedDishes[]): Ingredients[] {
    let total: Ingredients[] = []
    for (const dish of dishes) {
      const ingredients = dish.ingredients.map(value => {
          const container: Ingredients = JSON.parse(JSON.stringify(value))
          container.count *= dish.servings
          return container
        }
      )
      total = [...total, ...ingredients]
    }
    return Object.values(total.reduce((current: { [index: string]: Ingredients }, {name, count, unit}) => {
      current[name] = current[name] || {name, count: 0, unit};
      current[name].count += +count
      return current;
    }, {}));
  }

  ngAfterViewInit() {
    this.summaryService.summarySubject.next(this.summary)
  }

}
