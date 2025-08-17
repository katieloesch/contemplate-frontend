import { Component } from '@angular/core';
// import { OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { map } from 'rxjs/operators';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';

import { Proposal } from '../proposal';

@Component({
  selector: 'app-proposal-show',
  standalone: true,
  imports: [],
  templateUrl: './proposal-show.html',
  styleUrl: './proposal-show.scss',
})
// export class ProposalShow implements OnInit {
export class ProposalShow {
  id!: number;
  // routeId: any;

  // constructor(private route: ActivatedRoute) {}
  // ngOnInit(): void {
  //   this.id = Number(this.route.snapshot.paramMap.get('id'));
  // }

  constructor(route: ActivatedRoute) {
    route.paramMap
      .pipe(
        map((p) => Number(p.get('id'))),
        takeUntilDestroyed()
      )
      .subscribe((id) => (this.id = id));
  }
}
