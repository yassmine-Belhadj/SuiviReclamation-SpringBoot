import { Component, OnInit } from '@angular/core';
import { ReclamationService } from '../reclamation.service';
import { Reclamation } from '../models/reclamation.model';
import { Router } from '@angular/router'; // Import Router for navigation
import { CommonModule } from '@angular/common'; 

@Component({
  selector: 'app-reclamation-list',
  standalone: true,
  imports: [CommonModule],  // Ensure CommonModule is imported for ngFor
  templateUrl: './reclamation-list.component.html',
  styleUrls: ['./reclamation-list.component.css']
})
export class ReclamationListComponent implements OnInit {
  reclamations: Reclamation[] = [];
  isLoading: boolean = true;  // Track loading state

  constructor(
    private reclamationService: ReclamationService,
    private router: Router  // Inject Router
  ) {}

  ngOnInit(): void {
    this.loadReclamations();
  }

  loadReclamations(): void {
    this.reclamationService.getReclamations().subscribe(
      (data: Reclamation[]) => {
        console.log('Fetched data:', data); // Check the data in console
        this.reclamations = data;
        this.isLoading = false;  // Data loaded
      },
      error => {
        console.error('Error fetching data:', error);
        this.isLoading = false;  // Error loading data
      }
    );
  }

  deleteReclamation(id: number): void {
    if (confirm("Are you sure you want to delete this reclamation?")) {
      this.reclamationService.deleteReclamation(id).subscribe(() => {
        this.loadReclamations(); // Reload the list after deletion
      });
    }
  }

  // Navigate to the Add Reclamation form
  addReclamation(): void {
    this.router.navigate(['/add-reclamation']);
  }

  // Navigate to the Update form with the reclamation ID
  updateReclamation(id: number): void {
    this.router.navigate([`/update-reclamation`, id]);
  }
}
