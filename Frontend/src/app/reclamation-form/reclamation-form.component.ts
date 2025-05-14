import { Component, OnInit } from '@angular/core';
import { ReclamationService } from '../reclamation.service';
import { ClientService } from '../client.service';
import { AgentSAVService } from '../agent-sav.service';
import { Reclamation } from '../models/reclamation.model';
import { Client } from '../models/client.model';
import { AgentSAV } from '../models/agent-sav.model';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms'; // Import FormsModule

@Component({
  selector: 'app-reclamation-form',
  standalone: true, // Confirm standalone
  imports: [CommonModule, FormsModule], // Add FormsModule here
  templateUrl: './reclamation-form.component.html',
  styleUrls: ['./reclamation-form.component.css']
})
export class ReclamationFormComponent implements OnInit {
  reclamation: Reclamation = {
    produit: '',
    statut: '',
    description: '',
    date: new Date().toISOString().slice(0, 10),
    note: undefined,  // Optional field, set to undefined
    client: { id: 0, nom: '', email: '', telephone: '' },
    agentSAV: { id: 0, nom: '', competence: '' }  // Competence is required here, added missing field
  };

  clients: Client[] = [];
  agents: AgentSAV[] = [];

  constructor(
    private reclamationService: ReclamationService,
    private clientService: ClientService,
    private agentSAVService: AgentSAVService
  ) {}

  ngOnInit(): void {
    this.clientService.getClients().subscribe(data => this.clients = data);
    this.agentSAVService.getAgents().subscribe(data => this.agents = data);
  }

  onSubmit(): void {
    this.reclamationService.createReclamation(this.reclamation).subscribe(() => {
      alert("Réclamation ajoutée !");
      this.resetForm();
    });
  }

  resetForm(): void {
    this.reclamation = {
      produit: '',
      statut: '',
      description: '',
      date: new Date().toISOString().slice(0, 10),
      note: undefined,  // Reset note to undefined
      client: { id: 0, nom: '', email: '', telephone: '' },
      agentSAV: { id: 0, nom: '', competence: '' }  // Reset agentSAV info
    };
  }
}
