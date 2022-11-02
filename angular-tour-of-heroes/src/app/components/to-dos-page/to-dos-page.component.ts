import { Component, OnInit } from '@angular/core';
import { userIdNames } from 'src/app/constants/toDo.constants';
import { ToDo } from 'src/app/models/toDo.model';
import { TodoService } from 'src/app/services/todo.service';

@Component({
  selector: 'app-todos',
  templateUrl: './to-dos-page.component.html',
  styleUrls: ['./to-dos-page.component.scss']
})
export class TodosComponent implements OnInit {

  todos: ToDo[] = [];
  userIdNames = userIdNames;

  constructor(private toDoService: TodoService) { }

  ngOnInit(): void {
    this.getToDos();
  }

  async getToDos(): Promise<void> {
  this.todos = await this.toDoService.getToDosAsync();
 }



}
