import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProposalNew } from './proposal-new';

describe('ProposalNew', () => {
  let component: ProposalNew;
  let fixture: ComponentFixture<ProposalNew>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProposalNew]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProposalNew);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
