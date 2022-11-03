import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { firstValueFrom, Observable } from 'rxjs';
import { User } from '../../models/user.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }

  getUsers(): Observable<User[]> {
    const url = "https://jsonplaceholder.typicode.com/users"
    return this.http.get<User[]>(url);
  }

  getUsersPromise(): Promise<User[]> { //evitar
    const url = "https://jsonplaceholder.typicode.com/users"
    // return this.http.get<User[]>(url).toPromise();
    return firstValueFrom(this.http.get<User[]>(url));
  }

  // getUsersPromiseAsync(): Promise<User[]>{ // se gasta mas para llamadas http
  //   const url = "https://jsonplaceholder.typicode.com/users";
  //     // return  this.http.get<User[]>(url).toPromise();
  //     return firstValueFrom(this.http.get<User[]>(url));
  // }

  getUsersPromiseAsync(): Promise<User[]>{ // se gasta mas para llamadas http
    const url = "api/users";
      // return  this.http.get<User[]>(url).toPromise();
      return firstValueFrom(this.http.get<User[]>(url));
  }


}
