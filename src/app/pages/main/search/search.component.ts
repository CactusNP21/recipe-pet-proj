import { Component } from '@angular/core';
import {MatDialog} from "@angular/material/dialog";
import {FilterDialogComponent} from "../filter-dialog/filter-dialog.component";

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent {
  constructor(private dialog: MatDialog) {
  }

  searchValue = ''

  openDialog() {
    const dialogRef = this.dialog.open(FilterDialogComponent)
    dialogRef.afterClosed().subscribe(value => {
      console.log(value)
    })
  }
}
