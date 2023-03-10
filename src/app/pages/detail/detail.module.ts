import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DetailComponent } from './detail/detail.component';
import {MatCardModule} from "@angular/material/card";
import {MatListModule} from "@angular/material/list";
import {MatIconModule} from "@angular/material/icon";
import {MatStepperModule} from "@angular/material/stepper";
import {MatButtonModule} from "@angular/material/button";
import {MatSidenavModule} from "@angular/material/sidenav";
import {MatInputModule} from "@angular/material/input";
import {FormsModule} from "@angular/forms";
import {MatExpansionModule} from "@angular/material/expansion";
import {DetailRoutingModule} from "./detail-routing.module";


@NgModule({
    declarations: [
        DetailComponent,
    ],
    exports: [
        DetailComponent
    ],
  imports: [
    CommonModule,
    MatCardModule,
    MatListModule,
    MatIconModule,
    MatStepperModule,
    MatButtonModule,
    MatSidenavModule,
    MatInputModule,
    FormsModule,
    MatExpansionModule,
    DetailRoutingModule
  ]
})
export class DetailModule { }
