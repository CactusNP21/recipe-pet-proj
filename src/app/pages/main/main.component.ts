import {Component} from '@angular/core';
import {mocked} from "../../core/mockedDishes";
import {MatPaginator, PageEvent} from "@angular/material/paginator";
@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css'],
})
export class MainComponent {
  dishes = mocked
  mocked = mocked




  paginator: MatPaginator;
  log(event: PageEvent) {
    console.log(event)
    this.dishes = mocked.slice((event.pageIndex * event.pageSize), (event.pageIndex * event.pageSize) + event.pageSize )
  }

}
