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

  constructor(private search: SearchService) {
  }

  ngOnInit() {
  }

}
