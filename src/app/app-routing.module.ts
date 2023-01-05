import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {MainComponent} from "./pages/main/main.component";

const routes: Routes = [
  {path: '', redirectTo: '/main', pathMatch: "full"},
  {path: 'main', component: MainComponent},
  {path: 'main/dish', loadChildren: () => import('./pages/detail/detail.module').then(m => m.DetailModule)},
  {path: 'main/summary',  loadChildren: () => import('./pages/summary/summary.module').then(m => m.SummaryModule)}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
