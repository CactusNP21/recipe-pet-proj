import {Component, OnInit} from '@angular/core';
import {SearchService} from "../services/search.service";
import {defaultSearchOption} from "../../../core/search-options";

@Component({
  selector: 'app-filter-dialog',
  templateUrl: './filter-dialog.component.html',
  styleUrls: ['./filter-dialog.component.scss']
})
export class FilterDialogComponent implements OnInit {
  defaultSearchOption = defaultSearchOption ;
  topics: string[] = defaultSearchOption.topics
  topic: string
  constructor() {
  }
  removeTopic(topic: string) {
    const index = this.topics.indexOf(topic);
    if (index >= 0) {
      this.topics.splice(index, 1);
    }
  }
  addTopic(): void {
    if ((this.topic || '').trim()) {
      this.topics.push(this.topic);
    }
  }

  ngOnInit() {
  }

}
