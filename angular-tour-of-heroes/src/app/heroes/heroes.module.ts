import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HeroesRoutingModule } from './heroes-routing.module';
import { SharedModule } from '../shared/shared.module';
import { LabelComponent } from './components/label/label.component';
import { HeroesComponent } from './components/heroes-page/heroes-page.component';
import { HeroDetailComponent } from './components/hero-detail/hero-detail.component';
import { MessagesComponent } from '../shared/messages/messages.component';
import { HeroTypesComponent } from './components/hero-types/hero-types.component';
import { HeroSearchComponent } from './components/hero-search/hero-search.component';


@NgModule({
  declarations: [ // va todo lo que va en el modulo
    LabelComponent,
    HeroesComponent,
    HeroDetailComponent,
    MessagesComponent,
    HeroTypesComponent,
    HeroSearchComponent,
  ],
  imports: [
    CommonModule,
    HeroesRoutingModule,
    SharedModule,
  ],
  exports:[
    HeroSearchComponent,
  ]
})
export class HeroesModule { }
