import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AgentSAVService } from '../agent-sav.service';
import { AgentSAV } from '../models/agent-sav.model'; // import if you separated the interface

@Component({
  selector: 'app-agent-sav-list',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './agent-sav-list.component.html',
  styleUrls: ['./agent-sav-list.component.css']
})
export class AgentSAVListComponent {
  agents: AgentSAV[] = [];

  // Properly initialized object with correct typing
  selectedAgent: AgentSAV = { nom: '', competence: '' };

  isEditMode = false;

  constructor(private agentSAVService: AgentSAVService) {}

  ngOnInit(): void {
    this.loadAgents();
  }

  loadAgents(): void {
    this.agentSAVService.getAgents().subscribe(data => {
      this.agents = data;
    });
  }

  saveAgent(): void {
    if (this.isEditMode && this.selectedAgent.id != null) {
      this.agentSAVService.updateAgent(this.selectedAgent.id, this.selectedAgent).subscribe(() => {
        this.loadAgents();
        this.resetForm();
      });
    } else {
      this.agentSAVService.addAgent(this.selectedAgent).subscribe(() => {
        this.loadAgents();
        this.resetForm();
      });
    }
  }

  editAgent(agent: AgentSAV): void {
    this.selectedAgent = { ...agent };
    this.isEditMode = true;
  }

  deleteAgent(id: number): void {
    this.agentSAVService.deleteAgent(id).subscribe(() => {
      this.loadAgents();
    });
  }

  resetForm(): void {
    this.selectedAgent = { nom: '', competence: '' };
    this.isEditMode = false;
  }
}
