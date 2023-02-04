import { Component, OnInit } from '@angular/core';
import { Todo } from '../models/Todo';

@Component({
  selector: 'app-list-todos',
  templateUrl: './list-todos.component.html',
  styleUrls: ['./list-todos.component.css'],
})
export class ListTodosComponent implements OnInit {
  todos: Todo[] = [
    {
      id: 1,
      description: 'Learn to Dance',
      done: false,
      targetDate: new Date(),
    },
    {
      id: 2,
      description: 'Become an Expert angular',
      done: false,
      targetDate: new Date(),
    },
    {
      id: 3,
      description: 'Visit India',
      done: false,
      targetDate: new Date(),
    },
  ];

  constructor() {}

  ngOnInit(): void {}
}
