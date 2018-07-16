import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StoreService {
  todoList: Todo[] = [
    {
      title: 'text 1',
      finished: false
    },
    {
      title: 'text 2',
      finished: true
    },
    {
      title: 'text 3',
      finished: false
    },
    {
      title: 'text 4',
      finished: true
    }
  ];

  constructor() {
  }

  get todoListData() {
    return this.todoList;
  }

  addTodo(name: string) {
    const todo: Todo = {
      title: name,
      finished: false
    };
    this.todoList.push(todo);
  }

  removeTodo(todo: Todo): void {
    this.todoList.splice(this.todoList.indexOf(todo), 1);
  }

  checkToggle(todo: Todo): void {
    todo.finished = !todo.finished;
  }
}
