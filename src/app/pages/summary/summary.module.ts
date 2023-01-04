import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SummaryComponent } from './summary.component';
import {DetailModule} from "../detail/detail.module";
import {MatExpansionModule} from "@angular/material/expansion";
import {MatListModule} from "@angular/material/list";
import {MatIconModule} from "@angular/material/icon";
import { IngredientsDialogComponent } from './ingridients-dialog/ingredients-dialog.component';




@NgModule({
  declarations: [
    SummaryComponent,
    IngredientsDialogComponent,
  ],
  exports: [
    SummaryComponent
  ],
  imports: [
    CommonModule,
    DetailModule,
    MatExpansionModule,
    MatListModule,
    MatIconModule,
  ]
})
export class SummaryModule { }
