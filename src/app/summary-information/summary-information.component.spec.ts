import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SummaryInformationComponent } from './summary-information.component';

describe('SummaryInformationComponent', () => {
  let component: SummaryInformationComponent;
  let fixture: ComponentFixture<SummaryInformationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SummaryInformationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SummaryInformationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
