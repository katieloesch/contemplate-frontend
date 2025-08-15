import { Component } from '@angular/core';
import { Proposal } from '../proposal';
import { FormsModule, NgForm } from '@angular/forms';
import { CurrencyPipe } from '@angular/common';

@Component({
  selector: 'app-proposal-new',
  standalone: true,
  imports: [FormsModule, CurrencyPipe],
  templateUrl: './proposal-new.html',
  styleUrl: './proposal-new.scss',
})
export class ProposalNew {
  proposal = new Proposal();
}
