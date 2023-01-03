import { Injectable } from '@angular/core';
import {Subject} from "rxjs";
import {MockedDishes} from "../../../core/mockedDishes";

@Injectable({
  providedIn: 'root'
})
export class SummaryService {

  summary: MockedDishes[] = []
  testSub = new Subject<MockedDishes[]>()
  test$ = this.testSub.asObservable()
  summaryLengthSub = new Subject<number>()
  summaryLength$ = this.summaryLengthSub.asObservable()
  newDishSub = new Subject<MockedDishes>()
  newDish$ = this.newDishSub.asObservable()
  constructor() {
    this.newDish$.subscribe(dish => {
      this.summary.push(dish)
      this.testSub.next(this.summary)
    })
  }
  getSummaryLength() {
    return this.summaryLength$
  }
  getTest() {
    return this.test$
  }
  getSummary() {
    return this.summary
  }
  sendDish(dish: MockedDishes) {
    this.newDishSub.next(dish)
    this.summaryLengthSub.next(this.summary.length)
  }
  removeDish(dish: MockedDishes) {
    this.summary = this.summary.filter(value => value.id !== dish.id)
    this.summaryLengthSub.next(this.summary.length)
    this.testSub.next(this.summary)
  }



}
