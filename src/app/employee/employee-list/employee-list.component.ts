import { Component} from '@angular/core';
import { OnInit } from '@angular/core';
import {EmployeeService,IEmployeeService} from '../emloyee.service';
@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrl: './employee-list.component.css'
})
export class EmployeeListComponent {
  EmployeeList: IEmployeeService[] = [];
  DetailsList: IEmployeeService[] = [];
  constructor(private EmployeeService: EmployeeService) {}

  ngOnInit(): void {
    this.EmployeeList = this.EmployeeService.getEmployees();
  }
  showDetails(i: number) {
    this.DetailsList = [this.EmployeeList[i]];
    
  }
  

}
