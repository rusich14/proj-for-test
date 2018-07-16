import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-todo-list',
  template: `
    <ul class="todo-list" *ngIf="todoList.length">
      <li *ngFor="let todo of todoList">
        <input type="checkbox" [checked]="todo.finished" (change)="toggleTodo(todo)">
        <span class="title">
          <span class="title__text">{{ todo.title }}</span>
        </span>
        <span class="control">
          <button class="remove" type="button" (click)="removeTodo(todo)">Del</button>
        </span>
      </li>
    </ul>
  `
})
export class TodoListComponent implements OnInit {
  @Input() todoList: Todo[];

  @Output() remove: EventEmitter<any> = new EventEmitter();
  @Output() toggle: EventEmitter<any> = new EventEmitter();

  constructor() {
  }

  ngOnInit() {
  }

  removeTodo(todo: Todo) {
    this.remove.emit(todo);
  }

  toggleTodo(todo: Todo) {
    this.toggle.emit(todo);
  }

}
