import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css'],
})
export class TodoListComponent implements OnInit {
  task: string = '';
  taskList: string[] = [];

  constructor() {}

  ngOnInit(): void {}

  onButtonPress() {
    this.taskList.push(this.task);
  }
}
