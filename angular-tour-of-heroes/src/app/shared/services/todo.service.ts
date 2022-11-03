import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, firstValueFrom, Observable, of, tap } from 'rxjs';
import { ToDo } from '../../tasks/models/toDo.model';
import { MessageService } from './message.service';

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  private toDosUrl = "api/toDos"

  constructor(private http: HttpClient) { }

  getToDosAsync(): Promise<ToDo[]> {
    const url = "api/toDos";
    return firstValueFrom(this.http.get<ToDo[]>(url));
  }


}
