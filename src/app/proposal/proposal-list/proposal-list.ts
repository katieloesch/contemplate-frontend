import { Component, OnInit } from '@angular/core';
// import { CommonModule } from '@angular/common';
import { timer } from 'rxjs';
// import { RouterLink } from '@angular/router';
import { CurrencyPipe } from '@angular/common';
import { Router } from '@angular/router';

import { Proposal } from '../proposal';
import { ProposalService } from '../proposal.service';

@Component({
  selector: 'app-proposal-list',
  standalone: true,
  // imports: [RouterLink, CurrencyPipe],
  imports: [CurrencyPipe],
  templateUrl: './proposal-list.html',
  styleUrl: './proposal-list.scss',
})
export class ProposalList implements OnInit {
  proposals: Proposal[] = [];
  errorMessage = '';

  constructor(
    private proposalService: ProposalService,
    private router: Router
  ) {}

  ngOnInit(): void {
    // emit immediately (0) and then every 5000 ms
    timer(0, 5000).subscribe(() => this.getProposals());
  }

  getProposals(): void {
    this.proposalService.getProposals().subscribe({
      next: (proposals) => (this.proposals = proposals),
      error: (err) => (this.errorMessage = err),
    });
  }

  goToShow(proposal: Proposal): void {
    let link = ['/proposal', proposal.id];
    this.router.navigate(link);
  }
}
