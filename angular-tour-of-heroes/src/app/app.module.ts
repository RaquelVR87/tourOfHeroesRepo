import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LabelComponent } from './heroes/components/label/label.component';
import { HeroesComponent } from './heroes/components/heroes-page/heroes-page.component';
import { HeroDetailComponent } from './heroes/components/hero-detail/hero-detail.component';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { MessagesComponent } from './shared/messages/messages.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { HeroTypesComponent } from './heroes/components/hero-types/hero-types.component';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService } from './shared/services/in-memory-data.service';
import { HeroSearchComponent } from './heroes/components/hero-search/hero-search.component';

import { TasksModule } from './tasks/tasks.module';
import { SharedModule } from './shared/shared.module';
import { HeroesModule } from './heroes/heroes.module';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CommonModule,
    HttpClientModule,
    HttpClientInMemoryWebApiModule.forRoot(
      InMemoryDataService, { dataEncapsulation: false }
    ),
    TasksModule,
    SharedModule,
    HeroesModule
  ],
  providers: [

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
