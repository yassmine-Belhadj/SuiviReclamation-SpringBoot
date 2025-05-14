import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ClientService } from '../client.service';
import { Client } from '../models/client.model';

@Component({
  selector: 'app-client-list',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './client-list.component.html',
  styleUrls: ['./client-list.component.css']
})
export class ClientListComponent implements OnInit {
  clients: Client[] = [];
  selectedClient: Client = { nom: '', email: '', telephone: '' };
  isEditMode = false;

  constructor(private clientService: ClientService) {}

  ngOnInit(): void {
    this.loadClients();
  }

  loadClients(): void {
    this.clientService.getClients().subscribe(data => {
      this.clients = data;
    });
  }

  saveClient(): void {
    if (this.isEditMode && this.selectedClient.id !== undefined) {
      this.clientService.updateClient(this.selectedClient.id, this.selectedClient).subscribe(() => {
        this.loadClients();
        this.resetForm();
      });
    } else {
      this.clientService.createClient(this.selectedClient).subscribe(() => {
        this.loadClients();
        this.resetForm();
      });
    }
  }

  editClient(client: Client): void {
    this.selectedClient = { ...client };
    this.isEditMode = true;
  }

  deleteClient(id: number): void {
    this.clientService.deleteClient(id).subscribe(() => {
      this.loadClients();
    });
  }

  resetForm(): void {
    this.selectedClient = { nom: '', email: '', telephone: '' };
    this.isEditMode = false;
  }
}
