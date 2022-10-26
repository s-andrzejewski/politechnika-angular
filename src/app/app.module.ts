import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AlertWarningComponent } from './alert-warning/alert-warning.component';
import { AlertInfoComponent } from './alert-info/alert-info.component';
import { BindingTaskComponent } from './binding-task/binding-task.component';
import { TodoListComponent } from './todo-list/todo-list.component';

@NgModule({
  declarations: [
    AppComponent,
    AlertWarningComponent,
    AlertInfoComponent,
    BindingTaskComponent,
    TodoListComponent,
  ],
  imports: [BrowserModule, NgbModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
