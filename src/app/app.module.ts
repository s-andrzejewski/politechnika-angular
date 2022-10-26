import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AlertWarningComponent } from './alert-warning/alert-warning.component';
import { AlertInfoComponent } from './alert-info/alert-info.component';
import { BindingTaskComponent } from './binding-task/binding-task.component';

@NgModule({
  declarations: [
    AppComponent,
    AlertWarningComponent,
    AlertInfoComponent,
    BindingTaskComponent
  ],
  imports: [
    BrowserModule,
    NgbModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
