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
  lastSearchValue: MockedDishes[] = []
  value: string = ''

  private between(min: number, max: number, number: number): boolean {
    return number >= min && max >= number
  }

  constructor() {
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
  added(dish: MockedDishes) {
    const found = mocked.find(value1 => value1.id === dish.id)
    if (found) {
      found.added = true
    }
    console.log(mocked)
  }
  removed(dish: MockedDishes) {
    const found = mocked.find(value1 => value1.id === dish.id)
    if (found) {
      found.added = false
    }
    console.log(mocked)
  }
  search() {
    if (this.lastSearchValue.length > 0) {
      console.log('2222')
      this.dishes.next(this.lastSearchValue)
      return
    }
    this.lastSearchValue = mocked.filter(dish => {
      const {minMinutes, maxMinutes, minPrice, maxPrice, topics} = this.searchOptions
      return (
        this.between(minPrice, maxPrice, dish.price) &&
        this.between(minMinutes, maxMinutes, dish.time) &&
        dish.title.toLowerCase().includes(this.value.toLowerCase()) &&
        topics.every((value1) => dish.topics.includes(value1.toLowerCase()))
      )
    })
    this.dishes.next(this.lastSearchValue)
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
