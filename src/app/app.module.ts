import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'


import { AppComponent } from './app.component';
import { EmployeeComponent } from './employee/employee.component';
import { EmployeeListComponent } from './employee/employeeList.component';
import { EmployeeTitlePipe } from './employee/epmloyeeTitle.pipe';
import { EmployeeCountComponent } from './employee/employeeCount.component';
import { SimpleComponent } from './Others/simple.component';

@NgModule({
  declarations: [
    AppComponent, EmployeeComponent, EmployeeListComponent, EmployeeTitlePipe, EmployeeCountComponent, SimpleComponent
  ],
  imports: [
    BrowserModule, FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
