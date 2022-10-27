import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';
import { HEROES } from '../mock-heroes';
import { User } from '../models/user.model';
import { HeroService } from '../services/hero.service';
import { MessageService } from '../services/message.service';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.scss']
})
export class HeroesComponent implements OnInit {

  // hero = 'Windstorm';

  // hero: Hero = {
  //   id: 1,
  //   name: 'Windstorm'
  // };

  // heroes = HEROES;
  heroes: Hero [] = [];
  selectedHero?: Hero;
  users?: User[];


  constructor(
    private userService: UserService, 
    private heroService:HeroService,
    private messageService: MessageService
    ) { }

  ngOnInit(): void {
    this,this.getHeroes();
    // this.getUsers();
    // this.getUsersPromise();
    // this.getUsersPromiseAsync();
  }

  onSelect(hero: Hero): void {
    this.selectedHero = hero;
    this.messageService.add(`HeroresComponent: Selected hero id = ${hero.id}`);
  }

  onChangeName(text: string, hero: Hero) {
    hero.name = text;
  }

  // getHeroes(): void {
  //   this.heroes = this.heroService.getHeroes();
  // }

  getHeroes(): void {
    this.heroService.getHeroes().subscribe(data => {
      this.heroes = data;
    })
  }

  getUsers(): void {
    const url = "https://jsonplaceholder.typicode.com/users"
    this.userService.getUsers().subscribe(data => {
      this.users = data;
    });
  }

  // getUsersPromise(): void{ //evitar
  //   const url = "https://jsonplaceholder.typicode.com/users"
  //   this.userService.getUsersPromise().then(data =>{
  //     this.users = data;
  //   });
  // }

  // async getUsersPromiseAsync(): Promise<void> { // se gasta mas para llamadas http
  //   const url = "https://jsonplaceholder.typicode.com/users"
  //   this.users = await this.userService.getUsersPromiseAsync();

  // }
}

