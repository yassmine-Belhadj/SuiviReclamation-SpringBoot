import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router'; // Import Router
import { ReclamationService } from '../reclamation.service';
import { Reclamation } from '../models/reclamation.model';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-update-reclamation',
  standalone: true,
  templateUrl: './update-reclamation.component.html',
  styleUrls: ['./update-reclamation.component.css'],
  imports: [FormsModule, CommonModule]  // Add CommonModule here for ngIf
})
export class UpdateReclamationComponent {
  reclamation: Reclamation = {
    produit: '', statut: '', description: '', date: '', note: 0,
    client: { id: 0, nom: '', email: '', telephone: '' },
    agentSAV: { id: 0, nom: '', competence: '' }  // Ensure agentSAV is initialized
  }; // Initialize reclamation
  isLoading = true;

  constructor(
    private reclamationService: ReclamationService,
    private route: ActivatedRoute,
    private router: Router  // Inject Router service
  ) {}

  ngOnInit(): void {
    const reclamationId = Number(this.route.snapshot.paramMap.get('id'));
    this.reclamationService.getReclamation(reclamationId).subscribe((data) => {
      this.reclamation = data;
      this.isLoading = false;
    });
  }

  updateReclamation(): void {
    if (this.reclamation) {
      this.reclamationService.updateReclamation(this.reclamation.id!, this.reclamation).subscribe(() => {
        // Navigate back to the reclamations list after success
        this.router.navigate(['/reclamations']);
      });
    }
  }
}
