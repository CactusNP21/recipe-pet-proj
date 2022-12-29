import { Component } from '@angular/core';

@Component({
  selector: 'app-filter-dialog',
  templateUrl: './filter-dialog.component.html',
  styleUrls: ['./filter-dialog.component.scss']
})
export class FilterDialogComponent {
  minMinutes = 30
  maxMinutes = 90

  minPrice = 50
  maxPrice = 200



}
