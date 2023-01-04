import {ChangeDetectionStrategy, Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {mocked, MockedDishes} from "../../../core/mockedDishes";
import {Subscription} from "rxjs";
import {SummaryService} from "../../summary/services/summary.service";
import {SearchService} from "../../main/services/search.service";

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DetailComponent implements OnInit {
  @Input() dish: MockedDishes
  @Output() changeServ = new EventEmitter<number>;

  servings = 3

  constructor(private route: ActivatedRoute, private summaryService: SummaryService, private mocked: SearchService) {
  }
  addServ() {
    this.servings += 1
    this.changeServ.emit(this.dish.price / 3)
  }

  removeServ() {
    if (this.servings === 1) {
      return
    }
    const x = () => {
      this.servings -= 1
      this.changeServ.emit(-(this.dish.price / 3))
    }
    x()
  }

  addToList() {
    this.summaryService.sendDish(this.dish)
    this.mocked.added(this.dish)
  }
  removeFromList() {
    this.summaryService.removeDish(this.dish)
    this.mocked.removed(this.dish)
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

