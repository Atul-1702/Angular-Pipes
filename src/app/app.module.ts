import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { StudentManagementComponent } from './student-management/student-management.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { UpperPipe } from './Pipes/upper.pipe';
import { TitleCasePipe } from './Pipes/titlecase.pipe';
import { DecimalPipe } from './Pipes/decimal.pipe';
import { FormsModule } from '@angular/forms';
import { FilterPipe } from './Pipes/filter.pipe';

@NgModule({
  declarations: [
    AppComponent,
    StudentManagementComponent,
    UpperPipe,
    TitleCasePipe,
    DecimalPipe,
    FilterPipe
  ],
  imports: [
    BrowserModule,
    FontAwesomeModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
