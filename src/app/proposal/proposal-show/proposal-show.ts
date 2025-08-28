import { Component, inject, DestroyRef } from '@angular/core';
import { Observable } from 'rxjs';
import { ActivatedRoute } from '@angular/router';
import { map, filter, switchMap } from 'rxjs/operators';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { CommonModule } from '@angular/common';

import { Proposal } from '../proposal';
import { ProposalService } from '../proposal.service';

@Component({
  selector: 'app-proposal-show',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './proposal-show.html',
  styleUrl: './proposal-show.scss',
})
export class ProposalShow {
  private route = inject(ActivatedRoute);
  private proposalService = inject(ProposalService);
  private destroyRef = inject(DestroyRef);

  proposal!: Proposal;

  ngOnInit() {
    this.route.paramMap
      .pipe(
        map((pm) => Number(pm.get('id'))),
        filter((id) => !Number.isNaN(id)),
        switchMap((id) => this.proposalService.getProposal(id)),
        takeUntilDestroyed(this.destroyRef)
      )
      .subscribe((p) => (this.proposal = p));
  }
}
