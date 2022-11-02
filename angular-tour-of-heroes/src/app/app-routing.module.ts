import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { HeroDetailComponent } from './components/hero-detail/hero-detail.component';
import { HeroesComponent } from './components/heroes/heroes.component';
import { TodosComponent } from './components/to-dos-page/to-dos-page.component';

const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: "dashboard", component: DashboardComponent },
  { path: 'detail/:id', component: HeroDetailComponent },
  { path: "heroes", component: HeroesComponent },
  { path: "todos", component: TodosComponent },
  { path: '**', redirectTo: '', pathMatch: 'full' } // esta ruta debe ser siempre la ultima
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
