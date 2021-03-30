import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';

import { environment } from '../../environments/environment';
import { ApiPaths } from '../enums/api-paths';
import { Employee } from '../interfaces/employee';
import { Message } from '../interfaces/message';

@Injectable({
  providedIn: 'root'
})
export class EmployeesService {

    private baseUrl = environment.baseUrl;
    private httpOptions = {
        headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    };

    constructor(private http: HttpClient) { }

    getEmployees(): Observable<Employee[]> {
        const url = `${this.baseUrl}${ApiPaths.Employees}`;
        return this.http.get<Employee[]>(url)
            .pipe (
                catchError(this.handleError<Employee[]>('getEmployees', []))
            );
    }

    deleteEmployee(employee_id: number): Observable<Message> {
        const url = `${this.baseUrl}${ApiPaths.Employees}/${employee_id}`;
        return this.http.delete<Message>(url, this.httpOptions);
    }

    addEmployee(employee: any): Observable<Message> {
        const url = `${this.baseUrl}${ApiPaths.Employees}`;
        return this.http.post<Message>(url, employee, this.httpOptions);
    }

    private handleError<T>(operation = 'operation', result?: T) {
        return (error: any): Observable<T> => {
            console.error(error);
            return of(result as T);
        };
    }

}
