import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Document } from './document.dto';

@Injectable({
  providedIn: 'root',
})
export class DocumentService {
  private documentsUrl = 'http://localhost:3001/contemplate_documents.json';

  constructor(private http: HttpClient) {}

  getDocuments(): Observable<Document[]> {
    return this.http
      .get<Document[]>(this.documentsUrl)
      .pipe(catchError(this.handleError));
  }

  private handleError(error: HttpErrorResponse) {
    let errMsg: string;

    if (error.error instanceof ErrorEvent) {
      // Client-side / network error
      errMsg = `An error occurred: ${error.error.message}`;
    } else {
      // Backend error
      errMsg = `Backend returned code ${error.status}, body was: ${error.message}`;
    }

    console.error(errMsg);
    return throwError(() => errMsg);
  }
}
