import {Component, Input, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {mocked, MockedDishes} from "../../../core/mockedDishes";
import {Subscription} from "rxjs";

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss']
})
export class DetailComponent implements OnInit {
  @Input() dish: MockedDishes
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
    console.log(this.dish)
    const sub: Subscription = this.route.queryParams.subscribe(params => {
      if (params['id']) {
        this.dish = mocked.find(value => value.id === params['id'])!; // TODO fix undefined error
        console.log(this.dish)
      }
    });
    sub.unsubscribe()
  }
}

