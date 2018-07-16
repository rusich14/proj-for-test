import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-todo-input',
  template: `
    <input type="text" class="todo-input" #name (keyup.enter)="clickOnEnter(name.value)">
  `
})

export class TodoInputComponent implements OnInit {
  @Output() enter: EventEmitter<any> = new EventEmitter();

  constructor() {
  }

  ngOnInit() {
  }

  clickOnEnter(value: string) {
    this.enter.emit(value);
  }

}
