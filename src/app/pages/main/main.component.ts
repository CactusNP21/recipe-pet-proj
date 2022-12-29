import {Component, OnInit} from '@angular/core';
import {mocked} from "../../core/mockedDishes";
import {PageEvent} from "@angular/material/paginator";
@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css'],
})
export class MainComponent implements OnInit{
  dishes = mocked
  mocked = mocked
  pageIndex: number;
  ngOnInit() {
    const pageIndex = !!sessionStorage.getItem('page') ? +sessionStorage.getItem('page')! : 0
    this.pageIndex = pageIndex
    this.dishes = mocked.slice(pageIndex * 5, pageIndex * 5 + 5)
  }

  changePage(event: PageEvent) {
    sessionStorage.setItem('page', String(event.pageIndex))
    this.dishes = mocked.slice((event.pageIndex * event.pageSize), (event.pageIndex * event.pageSize) + event.pageSize )
  }

}
