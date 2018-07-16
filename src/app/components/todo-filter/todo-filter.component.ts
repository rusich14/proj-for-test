import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-todo-filter',
  template: `
    <div>
      <button type="button" (click)="statusTodo('Active')">Active</button>
      <button type="button" (click)="statusTodo('Finished')">Finished</button>
      <button type="button" (click)="statusTodo('All')">All</button>
    </div>`
})
export class TodoFilterComponent implements OnInit {
  @Output() status: EventEmitter<any> = new EventEmitter();

  constructor() {
  }

  ngOnInit() {
  }

  statusTodo(status: string) {
    this.status.emit(status);
  }

}
