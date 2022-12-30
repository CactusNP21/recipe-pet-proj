import {Injectable} from '@angular/core';
import {Subject} from "rxjs";
import {mocked, MockedDishes} from "../../../core/mockedDishes";
import {defaultSearchOption, SearchOptions} from "../../../core/search-options";

@Injectable({
  providedIn: 'root'
})
export class SearchService {


  dishes = new Subject<MockedDishes[]>();
  searchSubject = new Subject<string>;
  searchValue$ = this.searchSubject.asObservable()
  searchOptionsSubject = new Subject<SearchOptions>()
  searchOptions$ = this.searchOptionsSubject.asObservable();
  searchOptions: SearchOptions = defaultSearchOption;
  value: string = ''

  private between(min: number, max: number, number: number): boolean {
    return number >= min && max >= number
  }

  constructor() {
    setTimeout(() => {
      this.search()
    }, 0)
    this.searchOptions$.subscribe(options => {
      console.log(options)
      if (options) {
        this.searchOptions = options
        this.search()
      }
    })
    this.searchValue$.subscribe(value => {
      this.value = value
      this.search()
    })
  }

  search() {
    const filtered = mocked.filter(dish => {
      const {minMinutes, maxMinutes, minPrice, maxPrice, topics} = this.searchOptions
      return (
        this.between(minPrice, maxPrice, dish.price) &&
        this.between(minMinutes, maxMinutes, dish.time) &&
        dish.title.toLowerCase().includes(this.value) &&
        topics.every((value1) => dish.topics.includes(value1.toLowerCase()))
      )
    })
    this.dishes.next(filtered)
  }

  sendSearchOptions(value: SearchOptions) {
    this.searchOptionsSubject.next(value)
  }

  sendSearchValue(value: string) {
    this.searchSubject.next(value)
  }

  getDishes() {
    return this.dishes.asObservable()
  }
}
