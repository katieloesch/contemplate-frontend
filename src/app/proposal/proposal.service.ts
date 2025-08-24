import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Proposal } from './proposal';

@Injectable({
  providedIn: 'root',
})
export class ProposalService {
  private proposalsUrl = 'http://localhost:3002/proposals.json';

  constructor(private http: HttpClient) {}

  getProposals(): Observable<Proposal[]> {
    return this.http
      .get<Proposal[]>(this.proposalsUrl)
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
