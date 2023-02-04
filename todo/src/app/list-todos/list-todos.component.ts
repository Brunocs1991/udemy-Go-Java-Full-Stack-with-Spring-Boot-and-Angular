import { Component, OnInit } from '@angular/core';
import { Todo } from '../models/Todo';

@Component({
  selector: 'app-list-todos',
  templateUrl: './list-todos.component.html',
  styleUrls: ['./list-todos.component.css'],
})
export class ListTodosComponent implements OnInit {
  todos: Todo[] = [
    { id: 1, description: 'Learn to Dance' },
    { id: 2, description: 'Become an Expert angular' },
    { id: 3, description: 'Visit India' },
  ];
  constructor() {}

  ngOnInit(): void {}
}
