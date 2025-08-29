import { Injectable } from '@angular/core';
import {
  HttpClient,
  HttpErrorResponse,
  HttpHeaders,
} from '@angular/common/http';
import { Observable, throwError, map } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Proposal } from './proposal';

@Injectable({
  providedIn: 'root',
})
export class ProposalService {
  private proposalsUrl = 'http://localhost:3002/proposals';

  constructor(private http: HttpClient) {}

  getProposals(): Observable<Proposal[]> {
    return this.http
      .get<Proposal[]>(this.proposalsUrl)
      .pipe(catchError(this.handleError));
  }

  getProposal(id: number): Observable<Proposal> {
    return this.http.get<Proposal>(`${this.proposalsUrl}/${id}`);
  }

  // createProposal(proposal) {
  //   let headers = new Headers({ 'Content-Type': 'application/json' });
  //   let options = new RequestOptions({ headers: headers });
  //   this.http
  //     .post(this.proposalsUrl, JSON.stringify(proposal), { headers: headers })
  //     .map((res: Response) => res.json());
  // }

  createProposal(proposal: Proposal): Observable<Proposal> {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });

    return this.http
      .post<Proposal>(this.proposalsUrl, proposal, { headers })
      .pipe(map((res) => res));
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
