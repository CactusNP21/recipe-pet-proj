import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-ingredients-dialog',
  templateUrl: './ingredients-dialog.component.html',
  styleUrls: ['./ingredients-dialog.component.scss']
})
export class IngredientsDialogComponent {
  @Input()ingList: any
}
