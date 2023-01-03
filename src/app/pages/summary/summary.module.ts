import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SummaryComponent } from './summary.component';
import {DetailModule} from "../detail/detail.module";




@NgModule({
  declarations: [
    SummaryComponent,
  ],
  exports: [
    SummaryComponent
  ],
  imports: [
    CommonModule,
    DetailModule,
  ]
})
export class SummaryModule { }
