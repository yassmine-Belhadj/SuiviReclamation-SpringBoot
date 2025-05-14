
export interface Client {
  id?: number;  // optional for new clients
  nom: string;
  email: string;
  telephone: string;
}
  
export interface AgentSAV {
  id?: number;          // optional for creation
  nom: string;
  competence: string;
}

  export interface Reclamation {
    id?: number;
    produit: string;
    statut: string;
    description: string;
    date: string; // ISO format: 'YYYY-MM-DD'
    note?: number;
    client: Client;
    agentSAV: AgentSAV;
  }
  