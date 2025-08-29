import { Component, inject } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { CurrencyPipe } from '@angular/common';
import { Observable, throwError } from 'rxjs';

import { Proposal } from '../proposal';
import { ProposalService } from '../proposal.service';

@Component({
  selector: 'app-proposal-new',
  standalone: true,
  imports: [FormsModule, CurrencyPipe],
  templateUrl: './proposal-new.html',
  styleUrl: './proposal-new.scss',
})
export class ProposalNew {
  proposal = new Proposal();
  submitted: boolean = false;

  constructor(private proposalService: ProposalService) {}

  createProposal(proposal: Proposal) {
    this.submitted = true;
    this.proposalService.createProposal(proposal).subscribe({
      next: (data) => {
        return true;
      },
      error: (err) => {
        console.error('Error sending proposal', err);
        return throwError(() => err);
      },
    });
  }
}
