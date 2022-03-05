import { Injectable } from '@angular/core';
import { Employee } from './employee.model';
@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  employees: Employee[] = [{
    id: 1,
    name: 'Nikita',
    position: 'Director'
    },
    {
      id: 2,
      name: 'Artem',
      position: 'Vice Director'
    },
    {
      id: 3,
      name: 'Anton',
      position: 'Vice Director'
    },
    {
      id: 4,
      name: 'Denis',
      position: 'Software Developer'
  },
  {
      id: 5,
      name: 'Kirill',
      position: 'QA Engineer'
  },
  {
      id: 6,
      name: 'Petya',
      position: 'UI/UX Designer'
  },
  {
      id: 7,
      name: 'Klim',
      position: 'Product Manager'
  }];

  constructor() { }

  public getEmployees(): any {
      return this.employees;
  }
}
