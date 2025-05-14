import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SuiviReclamationListComponent } from './suivi-reclamation-list.component';

describe('SuiviReclamationListComponent', () => {
  let component: SuiviReclamationListComponent;
  let fixture: ComponentFixture<SuiviReclamationListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SuiviReclamationListComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SuiviReclamationListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
