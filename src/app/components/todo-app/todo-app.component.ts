import { Component, OnInit } from '@angular/core';
import { StoreService } from '../../services/store.service';

@Component({
  selector: 'app-todo-app',
  template: `
    <app-todo-input (enter)="addTodo($event)"></app-todo-input>
    <app-todo-list
      [todoList]="todoList"
      (remove)="removeTodo($event)"
      (toggle)="toggleTodo($event)"></app-todo-list>
    <app-todo-filter (status)="statusTodo($event)"></app-todo-filter>
  `
})
export class TodoAppComponent implements OnInit {
  todoList: Todo[];

  constructor(private storeService: StoreService) {
    this.todoList = this.storeService.todoList;
  }

  ngOnInit() {
  }

  addTodo(event: string): void {
    this.storeService.addTodo(event);
  }

  toggleTodo(todo: Todo) {
    this.storeService.checkToggle(todo);
  }

  removeTodo(todo: Todo) {
    this.storeService.removeTodo(todo);
  }

  statusTodo(status: string) {
    this.todoList = this.storeService.todoList.filter(val => {
      switch (status) {
        case 'Finished':
          return val.finished === true;
        case 'Active':
          return val.finished === false;
        case 'All':
          return val.finished === true || val.finished === false;
        default:
      }
    });
  }
}
