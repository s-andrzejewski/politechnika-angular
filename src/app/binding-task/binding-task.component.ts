import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-binding-task',
  templateUrl: './binding-task.component.html',
  styleUrls: ['./binding-task.component.css'],
})
export class BindingTaskComponent implements OnInit {
  name = 'text jakis do wyswietlenia';

  constructor() {}

  ngOnInit(): void {}
}
