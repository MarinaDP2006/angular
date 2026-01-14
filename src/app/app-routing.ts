import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PlanListComponent } from './components/lista/plan-list.component';
import { PlanDetailComponent } from './components/detalles/plan-detail';
import { AboutComponent } from './components/about/about.component';

const routes: Routes = [
  { path: '', redirectTo: 'planes', pathMatch: 'full' },
  { path: 'planes', component: PlanListComponent },
  { path: 'acerca-de', component: AboutComponent },
  { path: 'detalle/:id', component: PlanDetailComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }