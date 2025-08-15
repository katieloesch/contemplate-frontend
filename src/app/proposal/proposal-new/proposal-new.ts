import { Component } from '@angular/core';
import { Proposal } from '../proposal';

@Component({
  selector: 'app-proposal-new',
  standalone: true,
  imports: [],
  templateUrl: './proposal-new.html',
  styleUrl: './proposal-new.scss',
})
export class ProposalNew {
  proposal = new Proposal();
}
