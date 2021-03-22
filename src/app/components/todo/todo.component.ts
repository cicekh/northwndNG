import { Component, OnInit } from '@angular/core';
import { Todo } from 'src/app/models/todo';
import { TodoService } from 'src/app/services/todo.service';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css'],
})
export class TodoComponent implements OnInit {
  todos: Todo[] = [];
  dataLoaded = false;
  constructor(private todoService: TodoService) {}

  ngOnInit(): void {
    this.getProducts();
  }

  getProducts() {
    return this.todoService.getProducts().subscribe((response) => {
      this.todos = response;
      this.dataLoaded = true;
    });
  }
}
