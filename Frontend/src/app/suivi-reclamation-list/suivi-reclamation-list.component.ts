import { Component, OnInit } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { SuiviReclamationService } from '../suivi-reclamation.service';
import { SuiviReclamation } from '../models/suivi-reclamation.model';

@Component({
  selector: 'app-suivi-reclamation-list',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './suivi-reclamation-list.component.html',
  styleUrls: ['./suivi-reclamation-list.component.css']
})
export class SuiviReclamationListComponent implements OnInit {
  suivis: SuiviReclamation[] = [];

  constructor(
    private suiviService: SuiviReclamationService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.suiviService.getSuiviReclamations().subscribe(data => {
      this.suivis = data;
    });
  }

  goToCreate(): void {
    this.router.navigate(['/suivi-reclamations/create']);
  }

  goToEdit(id: number): void {
    this.router.navigate(['/suivi-reclamations/edit', id]);
  }

  deleteSuiviReclamation(id: number): void {
    this.suiviService.deleteSuiviReclamation(id).subscribe(() => {
      this.suivis = this.suivis.filter(s => s.id !== id);
    });
  }
}
