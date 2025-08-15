import { Component } from '@angular/core';
import { Proposal } from '../proposal';

@Component({
  selector: 'app-proposal-list',
  standalone: true,
  imports: [],
  templateUrl: './proposal-list.html',
  styleUrl: './proposal-list.scss',
})
export class ProposalList {
  proposalOne: Proposal = new Proposal(
    13,
    'Wayne Enterprises',
    'https://batman.fandom.com/wiki/Wayne_Enterprises',
    'Ruby on Rails',
    150,
    120,
    15,
    'lucius.fox@email.com'
  );
  proposalTwo: Proposal = new Proposal(
    140,
    'LuthorCorp',
    'https://dcuniverse.fandom.com/wiki/LuthorCorp',
    'NodeJS',
    150,
    120,
    15,
    'eve.teschmacher@email.com'
  );
  proposalThree: Proposal = new Proposal(
    415,
    'Queen Consolidated',
    'https://arrow.fandom.com/wiki/Queen_Consolidated',
    'python3',
    150,
    120,
    15,
    'oliver.queen@email.com'
  );
  proposals: Proposal[] = [
    this.proposalOne,
    this.proposalTwo,
    this.proposalThree,
  ];
}
