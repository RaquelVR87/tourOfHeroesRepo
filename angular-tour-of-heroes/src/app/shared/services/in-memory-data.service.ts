import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Hero } from '../../heroes/models/hero.model';

@Injectable({
  providedIn: 'root'
})
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const heroes = [
      { id: 12, name: ' Dr. Nice', typeId: 1},
      { id: 13, name: ' Bombasto', typeId: 2},
      { id: 14, name: ' Celeritas' , typeId: 3},
      { id: 15, name: ' Magneta' , typeId: 1},
      { id: 16, name: ' RubberMan' , typeId: 2},
      { id: 17, name: ' Dynama' , typeId: 3},
      { id: 18, name: ' Dr. IQ', typeId: 1 },
      { id: 19, name: ' Magma' , typeId: 2},
      { id: 20, name: ' Tornado' , typeId: 3}
    ];

    const users = [
      { id: 12, name: 'Dr. Nice' },
      { id: 13, name: 'Bombasto' },
      { id: 14, name: 'Celeritas' },
      { id: 15, name: 'Magneta' },
      { id: 16, name: 'RubberMan' },
      { id: 17, name: 'Dynama' },
      { id: 18, name: 'Dr. IQ' },
      { id: 19, name: 'Magma' },
      { id: 20, name: 'Tornado' }
    ];

    const toDos = [
      {
        "userId": 1,
        "id": 1,
        "title": "delectus aut autem",
        "completed": false
      },
      {
        "userId": 2,
        "id": 22,
        "title": "distinctio vitae autem nihil ut molestias quo",
        "completed": true
      },
      {
        "userId": 3,
        "id": 42,
        "title": "rerum perferendis error quia ut eveniet",
        "completed": false
      },
      {
        "userId": 1,
        "id": 8,
        "title": "quo adipisci enim quam ut ab",
        "completed": true
      },
      {
        "userId": 2,
        "id": 21,
        "title": "suscipit repellat esse quibusdam voluptatem incidunt",
        "completed": false
      },
      {
        "userId": 3,
        "id": 43,
        "title": "tempore ut sint quis recusandae",
        "completed": true
      },
      {
        "userId": 1,
        "id": 3,
        "title": "fugiat veniam minus",
        "completed": false
      },
      {
        "userId": 2,
        "id": 25,
        "title": "voluptas quo tenetur perspiciatis explicabo natus",
        "completed": true
      },
    ];
    return { heroes, users, toDos };
  }
  // Overrides the genId method to ensure that a hero always has an id.
  // If the heroes array is empty,
  // the method below returns the initial number (11).
  // if the heroes array is not empty, the method below returns the highest
  // hero id + 1.
  genId(heroes: Hero[]): number {
    return heroes.length > 0 ? Math.max(...heroes.map(hero => hero.id)) + 1 : 11;
  }
}
