import { Routes } from '@angular/router';
import { AgentSAVListComponent } from './agent-sav-list/agent-sav-list.component';
import { ClientListComponent } from './client-list/client-list.component';
import { ReclamationListComponent } from './reclamation-list/reclamation-list.component';
import { ReclamationFormComponent } from './reclamation-form/reclamation-form.component';
import { UpdateReclamationComponent } from './update-reclamation/update-reclamation.component';
import { SuiviReclamationListComponent } from './suivi-reclamation-list/suivi-reclamation-list.component';
import { SuiviReclamationFormComponent } from './suivi-reclamation-form/suivi-reclamation-form.component';

export const routes: Routes = [
  { path: 'clients', component: ClientListComponent },
  { path: 'reclamations', component: ReclamationListComponent },
  { path: 'add-reclamation', component: ReclamationFormComponent },
  { path: 'update-reclamation/:id', component: UpdateReclamationComponent },

  // 👉 Routes pour SuiviReclamation
  { path: 'suivi-reclamations', component: SuiviReclamationListComponent },
  { path: 'suivi-reclamations/create', component: SuiviReclamationFormComponent },
  { path: 'suivi-reclamations/edit/:id', component: SuiviReclamationFormComponent },
  
  { path: '', redirectTo: 'reclamations', pathMatch: 'full' },
  { path: 'agents', component: AgentSAVListComponent }
];
