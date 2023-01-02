import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {mocked, MockedDishes} from "../../../core/mockedDishes";

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss']
})
export class DetailComponent implements OnInit {

  dish: MockedDishes
  servings = 3

  constructor(private route: ActivatedRoute, private router: Router) {
  }

  removeServ() {
    this.servings = this.servings === 1 ? this.servings : this.servings - 1
  }

  home() {
    this.router.navigate(['main'])
  }

  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      this.dish = mocked.find(value => value.id === params['id'])!; // TODO fix undefined error
      console.log(this.dish)
    });
  }
}


