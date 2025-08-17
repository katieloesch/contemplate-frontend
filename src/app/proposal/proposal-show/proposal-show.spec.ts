import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProposalShow } from './proposal-show';

describe('ProposalShow', () => {
  let component: ProposalShow;
  let fixture: ComponentFixture<ProposalShow>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProposalShow]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProposalShow);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
