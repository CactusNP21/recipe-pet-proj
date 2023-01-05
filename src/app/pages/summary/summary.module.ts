import { NgModule } from '@angular/core';
import {CommonModule} from '@angular/common';
import { SummaryComponent } from './summary.component';
import {MatExpansionModule} from "@angular/material/expansion";
import {MatListModule} from "@angular/material/list";
import { IngredientsDialogComponent } from './ingredients-dialog/ingredients-dialog.component';
import {MatDialogModule} from "@angular/material/dialog";
import {MatButtonModule} from "@angular/material/button";
import {SummaryRoutingModule} from "./summary-routing.module";
import {MatIconModule} from "@angular/material/icon";
import {DetailModule} from "../detail/detail.module";




@NgModule({
  declarations: [
    SummaryComponent,
    IngredientsDialogComponent,
  ],
  exports: [
    SummaryComponent
  ],
  imports: [
    SummaryRoutingModule,
    MatListModule,
    MatIconModule,
    MatExpansionModule,
    MatDialogModule,
    CommonModule,
    DetailModule,
    MatButtonModule
  ]
})
export class SummaryModule { }
