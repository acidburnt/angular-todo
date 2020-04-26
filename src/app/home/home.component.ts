import { Component, OnInit } from '@angular/core';

interface Todo {
  completed: boolean;
  task: string;
  id: number;
}

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  todos: Todo[] = [];

  constructor() {}

  saveTodosToLS(): void {
    localStorage.setItem('todos', JSON.stringify(this.todos));
  }

  ngOnInit(): void {
    const todosFromLS = JSON.parse(localStorage.getItem('todos'));
    if (todosFromLS) {
      this.todos = todosFromLS;
    }
  }

  onEnterPress(event): void {
    this.todos.push({
      task: event.target.value,
      completed: false,
      id: Math.floor(1000 + Math.random() * 9000),
    });
    this.saveTodosToLS();
    event.target.value = '';
  }

  markTodo(event): void {
    this.todos.forEach((todo) => {
      if (todo.id === Number(event.target.id)) {
        todo.completed = !todo.completed;
      }
    });
    this.saveTodosToLS();
  }

  deleteTodo(event): void {
    const newTodos = this.todos.filter(
      (todo) => todo.id !== Number(event.target.dataset.todoId)
    );
    this.todos = newTodos;
    this.saveTodosToLS();
  }
}
