import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from './app.component';
import {RouterOutlet} from "@angular/router";
import {AppRoutingModule} from "./app-routing.module";
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MainModule} from "./pages/main/main.module";
import {DetailModule} from "./pages/detail/detail.module";
import {FeatureModule} from "./feature/feature.module";
import {SummaryModule} from "./pages/summary/summary.module";

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    RouterOutlet,
    AppRoutingModule,
    BrowserAnimationsModule,
    DetailModule,
    MainModule,
    SummaryModule,
    FeatureModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
