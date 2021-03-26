import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';

import { environment } from '../../environments/environment';
import { ApiPaths } from '../enums/api-paths';
import { Project } from '../interfaces/project';


@Injectable({
  providedIn: 'root'
})
export class ProjectsService {

    private baseUrl = environment.baseUrl;
    private httpOptions = {
        headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    };

    constructor(private http: HttpClient) { }

    getProjects(): Observable<Project[]> {
        const url = `${this.baseUrl}${ApiPaths.Projects}`;
        return this.http.get<Project[]>(url)
            .pipe (
                catchError(this.handleError<Project[]>('getProjects', []))
            );
    }

    private handleError<T>(operation = 'operation', result?: T) {
        return (error: any): Observable<T> => {
            console.error(error);
            return of(result as T);
        };
    }

}

