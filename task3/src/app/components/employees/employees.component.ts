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

    delete(employee: Employee): void {
        this.employees = this.employees.filter(e => e !== employee),
        this.employeesService.deleteEmployee(employee.id).subscribe(
            message => console.log(message)
        );
    }

    add(name, email, hire_date, salary, job_title, project_id) {
        this.employeesService.addEmployee({
            name: name,
            email: email,
            hire_date: hire_date,
            salary: salary,
            job_title: job_title,
            project_id: project_id
        }).subscribe(
            () => this.getEmployees()
        );

    }

}
