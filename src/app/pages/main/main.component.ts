import {Component} from '@angular/core';
import {mocked, MockedDishes} from "../../core/mockedDishes";
import {PageEvent} from "@angular/material/paginator";
import {SearchService} from "./services/search.service";
import {BehaviorSubject, Subject} from "rxjs";

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css'],
})
export class MainComponent  {
  dishesSubject = new Subject<MockedDishes[]>();
  dishes$ = this.dishesSubject.asObservable();
  pageItems: number;
  pageIndex: number;
  pageSize: number = 5;
  dishes: MockedDishes[]
  constructor(private search: SearchService) {
    search.getDishes().subscribe(dishes => {
      console.log(dishes)
      this.dishes = dishes
      this.pageItems = dishes.length
      this.dishesSubject.next(dishes.slice(0, this.pageSize))
    })
  }


  changePage(event: PageEvent) {
    this.pageIndex = event.pageIndex
    this.pageSize = event.pageSize
    this.dishesSubject.next(this.dishes.slice((event.pageIndex * event.pageSize), (event.pageIndex * event.pageSize) + event.pageSize))
  }

}
