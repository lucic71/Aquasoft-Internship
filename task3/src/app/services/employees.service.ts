import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';

import { environment } from '../../environments/environment';
import { ApiPaths } from '../enums/api-paths';
import { Employee } from '../interfaces/employee';

@Injectable({
  providedIn: 'root'
})
export class EmployeesService {

    private baseUrl = environment.baseUrl;

    constructor(private http: HttpClient) { }

    getEmployees(): Observable<Employee[]> {
        const url = `${this.baseUrl}${ApiPaths.Employees}`;
        return this.http.get<Employee[]>(url)
            .pipe (
                catchError(this.handleError<Employee[]>('getEmployees', []))
            );
    }

    private handleError<T>(operation = 'operation', result?: T) {
        return (error: any): Observable<T> => {
            console.error(error);
            return of(result as T);
        };
    }

}
