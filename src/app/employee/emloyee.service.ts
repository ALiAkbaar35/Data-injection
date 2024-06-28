import { Injectable } from '@angular/core';

export interface IEmployeeService {
  id: number;
  name: string;
  position: string;
  department: string;
  age: number;
  phoneNumber: string;
}

@Injectable({
  providedIn: 'root',
})
export class EmployeeService {
  private employees: IEmployeeService[] = [
    { id: 1, name: 'John', position: 'Manager', department: 'IT', age: 30, phoneNumber: '123-456-7890' },
    { id: 2, name: 'Jane', position: 'Developer', department: 'IT', age: 28, phoneNumber: '987-654-3210' },
    { id: 3, name: 'Michael', position: 'Designer', department: 'Design', age: 32, phoneNumber: '555-555-5555' },
    { id: 4, name: 'Emily', position: 'QA Engineer', department: 'IT', age: 26, phoneNumber: '111-111-1111' },
    { id: 5, name: 'Robert', position: 'Team Lead', department: 'IT', age: 34, phoneNumber: '222-222-2222' },
    { id: 6, name: 'Sophia', position: 'Developer', department: 'IT', age: 29, phoneNumber: '333-333-3333' },
    { id: 7, name: 'David', position: 'Analyst', department: 'Finance', age: 31, phoneNumber: '444-444-4444' },
    { id: 8, name: 'Emma', position: 'HR Manager', department: 'HR', age: 33, phoneNumber: '666-666-6666' },
    { id: 9, name: 'William', position: 'Marketing Specialist', department: 'Marketing', age: 27, phoneNumber: '777-777-7777' },
    { id: 10, name: 'Olivia', position: 'Content Writer', department: 'Marketing', age: 25, phoneNumber: '888-888-8888' },
    { id: 11, name: 'Alexander', position: 'Sales Manager', department: 'Sales', age: 35, phoneNumber: '999-999-9999' },
  ];

  getEmployees(): IEmployeeService[] {
    return this.employees;
  }
}
