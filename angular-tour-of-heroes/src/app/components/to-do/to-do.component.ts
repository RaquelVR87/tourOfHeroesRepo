import { Component, Input, OnInit } from '@angular/core';
import { userIdNames } from 'src/app/constants/toDo.constants';
import { ToDo } from 'src/app/models/toDo.model';

@Component({
  selector: 'app-to-do',
  templateUrl: './to-do.component.html',
  styleUrls: ['./to-do.component.scss']
})
export class TodoTypesComponent implements OnInit {

  // @Input() todo: ToDo;
  userIdNames = userIdNames;

  @Input() userId: number | undefined;
  @Input() id: number | undefined;
  @Input() title: string | undefined;
  @Input() completed: boolean | undefined;

  constructor() { }

  ngOnInit(): void {
  }

}
