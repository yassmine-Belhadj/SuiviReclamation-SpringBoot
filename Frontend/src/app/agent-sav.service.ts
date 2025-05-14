import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AgentSAV } from './models/agent-sav.model';

@Injectable({
  providedIn: 'root'
})
export class AgentSAVService {
  private apiUrl = 'http://localhost:8082/api/agents'; // Modifie l'URL si nécessaire

  constructor(private http: HttpClient) {}

  getAgents(): Observable<AgentSAV[]> {
    return this.http.get<AgentSAV[]>(this.apiUrl);
  }

  getAgentById(id: number): Observable<AgentSAV> {
    return this.http.get<AgentSAV>(`${this.apiUrl}/${id}`);
  }

  addAgent(agent: AgentSAV): Observable<AgentSAV> {
    return this.http.post<AgentSAV>(this.apiUrl, agent);
  }

  updateAgent(id: number, agent: AgentSAV): Observable<AgentSAV> {
    return this.http.put<AgentSAV>(`${this.apiUrl}/${id}`, agent);
  }

  deleteAgent(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }
}
