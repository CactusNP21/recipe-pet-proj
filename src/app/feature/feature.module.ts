import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavigationComponent } from './navigation/navigation.component';
import {MatButtonModule} from "@angular/material/button";
import {MatIconModule} from "@angular/material/icon";
import {MatBadgeModule} from "@angular/material/badge";
import {RouterLink} from "@angular/router";
import {DetailModule} from "../pages/detail/detail.module";
import {SummaryModule} from "../pages/summary/summary.module";



@NgModule({
  declarations: [
    NavigationComponent
  ],
  exports: [
    NavigationComponent
  ],
  imports: [
    CommonModule,
    MatButtonModule,
    MatIconModule,
    MatBadgeModule,
    RouterLink,
    DetailModule,
    SummaryModule,
  ]
})
export class FeatureModule { }
