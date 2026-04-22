import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http'
import { Observable, throwError } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
import { ToDOModel } from '../../Model/todoModel';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ToDOServiceService {
  baseURL = environment.APIBaseURL;
  constructor(private http: HttpClient) { }


  private handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error('An error occurred:', error.error.message);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong,
      console.error(
        `Backend returned code ${error.status}, ` +
        `body was: ${error.error}`);
    }
    // return an observable with a user-facing error message
    return throwError(
      'Something bad happened; please try again later.');
  };

  getToDOItems(): Observable<ToDOModel[]> {
    const slug: string = "/ToDo";
    return this.http.get(this.baseURL + slug).pipe(
      map((response) => {
        const result: any = response;
        return result
      }),
      catchError(this.handleError)
    )
  }

}
