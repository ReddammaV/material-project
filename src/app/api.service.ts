import { Injectable } from '@angular/core';
import { Iemployee } from './employees/Iemployee';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable, Subject, throwError } from 'rxjs';
import { map, catchError } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class ApiService {
  url = "http://localhost:3000/employees";

  constructor(private http:HttpClient) { }

  getEmployee(): Observable<Iemployee[]> {
    return this.http.get<Iemployee[]>(this.url);
  }

  addEmployee(employee): Observable<Iemployee> {
    return this.http.post<Iemployee>(this.url, employee, {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': 'my-auth-token'
      })
    })
      .pipe(catchError(this.handleError));
  }

  private handleError(errorResponse: HttpErrorResponse) {
    if (errorResponse.error instanceof ErrorEvent) {
      console.error('Client side Error: ', errorResponse.error)
    } else {
      console.error('Server side Error: ', errorResponse)
    }
    return throwError('There is a problem with the service');
  }

  deleteUser(id: number): Observable<void> {
    return this.http.delete<void>(this.url + '/' + id)
  }
  
}
