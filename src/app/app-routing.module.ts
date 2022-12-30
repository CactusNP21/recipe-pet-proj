import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {MainComponent} from "./pages/main/main.component";
import {DetailComponent} from "./pages/detail/detail/detail.component";

const routes: Routes = [
  {path: '', redirectTo: '/main', pathMatch: "full"},
  {path: 'main', component: MainComponent},
  {path: 'main/dish', component: DetailComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
