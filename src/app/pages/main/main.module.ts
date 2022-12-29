import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {MatExpansionModule} from "@angular/material/expansion";
import {MainComponent} from "./main.component";
import {DishComponent} from "./dish/dish.component";
import {SearchComponent} from "./search/search.component";
import {MatInputModule} from "@angular/material/input";
import {MatCardModule} from "@angular/material/card";
import {MatButtonModule} from "@angular/material/button";
import {MatIconModule} from "@angular/material/icon";
import {MatChipsModule} from "@angular/material/chips";
import {MatPaginatorModule} from "@angular/material/paginator";


@NgModule({
  declarations: [
    MainComponent,
    DishComponent,
    SearchComponent],
  imports: [
    CommonModule,
    MatExpansionModule,
    MatInputModule,
    MatCardModule,
    MatButtonModule,
    MatIconModule,
    MatChipsModule,
    MatPaginatorModule
  ]
})
export class MainModule {
}
