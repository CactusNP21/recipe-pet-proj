import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {mocked, MockedDishes} from "../../../core/mockedDishes";

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss']
})
export class DetailComponent implements OnInit {

  dish: MockedDishes

  constructor(private route: ActivatedRoute) {
  }
  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      this.dish = mocked.find(value => value.id === params['id'])!; // TODO fix undefined error
      console.log(this.dish)
    });
  }
}


