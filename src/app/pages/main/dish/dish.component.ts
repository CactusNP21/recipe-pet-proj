import {Component, Input} from '@angular/core';
import {MockedDishes} from "../../../core/mockedDishes";
import {MatExpansionPanel} from "@angular/material/expansion";

@Component({
  selector: 'app-dish',
  templateUrl: './dish.component.html',
  styleUrls: ['./dish.component.scss'],
  viewProviders: [MatExpansionPanel]
})
export class DishComponent {
  @Input() dish!: MockedDishes



}
