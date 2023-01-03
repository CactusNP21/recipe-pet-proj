import {Component, OnDestroy} from '@angular/core';
import {SummaryService} from "../../pages/summary/services/summary.service";
import {ActivatedRoute, NavigationEnd, Router} from "@angular/router";
import {Subscription} from "rxjs";

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent implements OnDestroy {
  len = 0
  lenSub: Subscription
  routerSub: Subscription
  summaryPage = false
  homePage = true

  constructor(private summaryService: SummaryService, private router: Router) {
    this.lenSub = summaryService.getSummaryLength().subscribe(len => {
      this.len = len
    })
    this.routerSub = router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        const url = this.router.url
        this.homePage = url.includes('main/')
        this.summaryPage = url.includes('summary')


      }

    })
  }


  ngOnDestroy() {
    this.lenSub.unsubscribe()
    this.routerSub.unsubscribe()
  }
}
