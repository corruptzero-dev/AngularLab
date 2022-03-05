import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EmployeeComponent } from './employee/employee.component';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import { EmployeeListItemComponent } from './employee-list-item/employee-list-item.component';



@NgModule({
  declarations: [
    EmployeeComponent,
    EmployeeListComponent,
    EmployeeListItemComponent
  ],
  imports: [
    CommonModule
  ]
})
export class EmployeeModule { }
