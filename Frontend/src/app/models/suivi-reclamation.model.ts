export interface SuiviReclamation {
    id?: number;
    date: string;
    message: string;
    action: string;
    reclamation?: {
      id: number;
    };
    employe?: {
      id: number;
    };
  }
  