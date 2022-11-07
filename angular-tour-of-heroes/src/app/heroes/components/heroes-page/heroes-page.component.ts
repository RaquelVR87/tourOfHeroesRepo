import { HttpClient } from '@angular/common/http';
import { Component, OnInit, ViewChild } from '@angular/core';
import { heroTypeNames, heroTypes } from '../../constants/hero.constants';
import { Hero } from '../../models/hero.model';
import { HEROES } from '../../../shared/mock-heroes';
import { User } from '../../models/user.model';
import { HeroService } from '../../../shared/services/hero.service';
import { MessageService } from '../../../shared/services/message.service';
import { UserService } from '../../../shared/services/user.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-heroes-page',
  templateUrl: './heroes-page.component.html',
  styleUrls: ['./heroes-page.component.scss']
})
export class HeroesComponent implements OnInit {

  // hero = 'Windstorm';

  // hero: Hero = {
  //   id: 1,
  //   name: 'Windstorm'
  // };

  // heroes = HEROES;
  // selectedHero?: Hero;
  newHero = new Hero();
  heroes: Hero[] = [];
  users?: User[];
  heroTypes = heroTypes;
  heroTypesNames = heroTypeNames;

  @ViewChild("heroesCreateForm") heroesCreateForm: NgForm

  constructor(
    private userService: UserService,
    private heroService: HeroService,
    // private messageService: MessageService
  ) { }

  ngOnInit(): void {
    this.getHeroes();
    // this.getUsers();
    // this.getUsersPromise();
    this.getUsersPromiseAsync();
  }

  // onSelect(hero: Hero): void {
  //   this.selectedHero = hero;
  //   this.messageService.add(`HeroresComponent: Selected hero id = ${hero.id}`);
  // }

  onChangeName(text: string, hero: Hero) {
    hero.name = text;
  }

  getHeroes(): void {
    this.heroService.getHeroes().subscribe(data => {
      this.heroes = data;
    })
  }

  add(name: string): void {
    name = name.trim();
    if (!name) { return; }
    this.heroService.addHero({ name } as Hero)
      .subscribe(hero => {
        this.heroes.push(hero);
      });
  }

  delete(hero: Hero): void {
    this.heroes = this.heroes.filter(h => h !== hero);
    this.heroService.deleteHero(hero.id).subscribe();
  }

  // getHeroes(): void {
  //   this.heroes = this.heroService.getHeroes();
  // }

  getUsers(): void {
    const url = "https://jsonplaceholder.typicode.com/users"
    this.userService.getUsers().subscribe(data => {
      this.users = data;
    });
  }

  getUsersPromise(): void{ //evitar
    const url = "https://jsonplaceholder.typicode.com/users"
    this.userService.getUsersPromise().then(data =>{
      this.users = data;
    });
  }

  async getUsersPromiseAsync(): Promise<void> { // se gasta mas para llamadas http
    const url = "https://jsonplaceholder.typicode.com/users"
    this.users = await this.userService.getUsersPromiseAsync();

  }
  onSubmitHero(): void {
    this.add(this.newHero.name);
    // this.newHero.name = "";
    this.heroesCreateForm.resetForm();
  
  }
}

