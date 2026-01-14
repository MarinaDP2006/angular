import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { PlanListComponent } from './components/lista/plan-list.component';
import { PlanCardComponent } from './components/cartasInfo/plan-card.component';
import { PlanCreateComponent } from './components/crear/plan-create';
import { PlanDetailComponent } from './components/detalles/plan-detail';
import { ReactiveFormsModule } from '@angular/forms';

const routes: Routes = [
  { path: '', redirectTo: 'planes', pathMatch: 'full' },
  { path: 'planes', component: PlanListComponent },
  { path: 'create', component: PlanCreateComponent },
  { path: 'plan/:id', component: PlanDetailComponent },
  { path: '**', redirectTo: '', pathMatch: 'full' }
];

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    PlanListComponent,
    PlanCardComponent,
    PlanCreateComponent,
    PlanDetailComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(routes, {
      scrollPositionRestoration: 'enabled',
      anchorScrolling: 'enabled'
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}