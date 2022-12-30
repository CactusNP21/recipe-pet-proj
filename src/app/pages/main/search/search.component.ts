import { Component } from '@angular/core';
import {MatDialog} from "@angular/material/dialog";
import {FilterDialogComponent} from "../filter-dialog/filter-dialog.component";
import {SearchService} from "../services/search.service";

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent {
  constructor(private dialog: MatDialog, private searchS: SearchService) {
  }

  searchValue = ''
  search() {
    this.searchS.sendSearchValue(this.searchValue)
  }

  openDialog() {
    const dialogRef = this.dialog.open(FilterDialogComponent)
    dialogRef.afterClosed().subscribe(value => {
      console.log(value)
      this.searchS.sendSearchOptions(value)
    })
  }
}
