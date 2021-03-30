import { Component, OnInit } from '@angular/core';

import { Employee } from '../../interfaces/employee';
import { EmployeesService } from '../../services/employees.service';

@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.css']
})
export class EmployeesComponent implements OnInit {

    employees: Employee[] = [];

    constructor(private employeesService: EmployeesService) { }

    ngOnInit(): void {
        this.getEmployees();
    }

    getEmployees(): void {
        this.employeesService.getEmployees()
            .subscribe(employees => this.employees = employees);
    }

}
