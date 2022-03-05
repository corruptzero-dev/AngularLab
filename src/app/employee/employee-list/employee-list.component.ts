import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../employee.service';
import { Employee } from '../employee.model';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {

    employees: Employee[] = [];

    constructor(private employeeservice: EmployeeService) { }

    ngOnInit() {
        const employeesData = this.employeeservice.getEmployees();
        this.employees = employeesData;
    }
}