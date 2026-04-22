import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
import { ToDOModel } from '../../Model/todoModel';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ToDOServiceService {

  // ✅ Correct base URL
  baseURL = environment.apiUrl;

  constructor(private http: HttpClient) { }

  private handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      console.error('Client Error:', error.error.message);
    } else {
      console.error(
        `Backend returned code ${error.status}, body was: ${error.error}`
      );
    }
    return throwError(() => new Error('Something bad happened; please try again later.'));
  }

  // ✅ FIXED API CALL
  getToDOItems(): Observable<ToDOModel[]> {
    return this.http.get<ToDOModel[]>(`${this.baseURL}/todo`).pipe(
      catchError(this.handleError)
    );
  }

  // ✅ OPTIONAL: Add POST (useful for your app)
  addToDOItem(item: ToDOModel): Observable<any> {
    return this.http.post(`${this.baseURL}/todo`, item).pipe(
      catchError(this.handleError)
    );
  }
}