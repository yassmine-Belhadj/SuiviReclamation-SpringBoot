import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { SuiviReclamationService } from '../suivi-reclamation.service';
import { SuiviReclamation } from '../models/suivi-reclamation.model';

@Component({
  selector: 'app-suivi-reclamation-form',
  standalone: true,
  imports: [CommonModule, RouterModule, ReactiveFormsModule],
  templateUrl: './suivi-reclamation-form.component.html',
  styleUrls: ['./suivi-reclamation-form.component.css']
})
export class SuiviReclamationFormComponent implements OnInit {
  form!: FormGroup;
  isEditMode = false;
  suiviId!: number;

  constructor(
    private fb: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private suiviService: SuiviReclamationService
  ) {}

  ngOnInit(): void {
    this.form = this.fb.group({
      date: ['', Validators.required],
      message: ['', Validators.required],
      action: ['', Validators.required],
      reclamationId: [null, Validators.required],
      employeId: [null, Validators.required]
    });

    this.route.params.subscribe(params => {
      if (params['id']) {
        this.isEditMode = true;
        this.suiviId = +params['id'];
        this.loadSuivi(this.suiviId);
      }
    });
  }

  loadSuivi(id: number): void {
    this.suiviService.getSuiviReclamationById(id).subscribe(data => {
      this.form.patchValue({
        date: data.date,
        message: data.message,
        action: data.action,
        reclamationId: data.reclamation?.id,
        employeId: data.employe?.id
      });
    });
  }

  onSubmit(): void {
    if (this.form.invalid) return;

    const suivi: SuiviReclamation = {
      id: this.isEditMode ? this.suiviId : undefined,
      date: this.form.value.date,
      message: this.form.value.message,
      action: this.form.value.action,
      reclamation: { id: this.form.value.reclamationId },
      employe: { id: this.form.value.employeId }
    };

    const action$ = this.isEditMode
      ? this.suiviService.updateSuiviReclamation(this.suiviId, suivi)
      : this.suiviService.createSuiviReclamation(suivi);

    action$.subscribe(() => {
      this.router.navigate(['/suivi-reclamations']);
    });
  }

  cancel(): void {
    this.router.navigate(['/suivi-reclamations']);
  }
}
