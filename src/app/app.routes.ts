import { Routes } from '@angular/router';
import { EmployeeListComponent } from './employee/employee-list/employee-list.component';
export const routes: Routes = [
    { path: '', component: EmployeeListComponent },
    { path: '**', redirectTo: 'EmployeeListComponent' }, 

];
