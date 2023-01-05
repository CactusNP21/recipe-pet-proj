import {Component, Inject} from '@angular/core';
import {Ingredients} from "../../../core/mockedDishes";
import {MAT_DIALOG_DATA} from "@angular/material/dialog";

@Component({
  selector: 'app-ingredients-dialog',
  templateUrl: './ingredients-dialog.component.html',
  styleUrls: ['./ingredients-dialog.component.scss']
})
export class IngredientsDialogComponent {
  constructor(@Inject(MAT_DIALOG_DATA) public data: Ingredients[]) {
  }
}
