import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { HeroDetailComponent } from './heroes/components/hero-detail/hero-detail.component';
import { HeroesComponent } from './heroes/components/heroes-page/heroes-page.component';
import { TodosComponent } from './tasks/components/to-dos-page/to-dos-page.component';

const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: "dashboard", component: DashboardComponent },
  // { path: 'detail/:id', component: HeroDetailComponent },
  { path: 'heroes', loadChildren: () => import('./heroes/heroes.module').then(m => m.HeroesModule) },
  { path: 'tasks', loadChildren: () => import('./tasks/tasks.module').then(m => m.TasksModule) },
  // { path: "heroes", component: HeroesComponent },
  // { path: "todos", component: TodosComponent },
  { path: '**', redirectTo: '/dashboard', pathMatch: 'full' } // esta ruta debe ser siempre la ultima
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
