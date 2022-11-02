import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LabelComponent } from './components/label/label.component';
import { HeroesComponent } from './components/heroes/heroes.component';
import { HeroDetailComponent } from './components/hero-detail/hero-detail.component';
import { CommonModule } from '@angular/common';
import {HttpClientModule} from'@angular/common/http';
import { MessagesComponent } from './messages/messages.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { HeroTypesComponent } from './components/hero-types/hero-types.component';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService } from './services/in-memory-data.service';
import { HeroSearchComponent } from './components/hero-search/hero-search.component';
import { TodosComponent } from './components/to-dos-page/to-dos-page.component';

@NgModule({
  declarations: [
    AppComponent,
    LabelComponent,
    HeroesComponent,
    HeroDetailComponent,
    MessagesComponent,
    DashboardComponent,
    HeroTypesComponent,
    HeroSearchComponent,
    TodosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    CommonModule,
    HttpClientModule,
    HttpClientInMemoryWebApiModule.forRoot(
      InMemoryDataService, { dataEncapsulation: false }
    )
  ],
  providers: [
    
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
