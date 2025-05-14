import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { SuiviReclamation } from './models/suivi-reclamation.model';

@Injectable({
  providedIn: 'root'
})
export class SuiviReclamationService {
  private apiUrl = 'http://localhost:8082/api/suivis';

  constructor(private http: HttpClient) {}

  getSuiviReclamations(): Observable<SuiviReclamation[]> {
    return this.http.get<SuiviReclamation[]>(this.apiUrl);
  }

  getSuiviReclamationById(id: number): Observable<SuiviReclamation> {
    return this.http.get<SuiviReclamation>(`${this.apiUrl}/${id}`);
  }

  createSuiviReclamation(suivi: SuiviReclamation): Observable<SuiviReclamation> {
    return this.http.post<SuiviReclamation>(this.apiUrl, suivi);
  }

  updateSuiviReclamation(id: number, suivi: SuiviReclamation): Observable<SuiviReclamation> {
    return this.http.put<SuiviReclamation>(`${this.apiUrl}/${id}`, suivi);
  }

  deleteSuiviReclamation(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }
}
