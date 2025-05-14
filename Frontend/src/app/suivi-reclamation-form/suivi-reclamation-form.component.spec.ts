import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SuiviReclamationFormComponent } from './suivi-reclamation-form.component';

describe('SuiviReclamationFormComponent', () => {
  let component: SuiviReclamationFormComponent;
  let fixture: ComponentFixture<SuiviReclamationFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SuiviReclamationFormComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SuiviReclamationFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
