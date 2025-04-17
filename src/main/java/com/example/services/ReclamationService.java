package com.example.services;

import com.example.models.Reclamation;
import com.example.repositories.ReclamationRepository;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ReclamationService {

    private final ReclamationRepository reclamationRepository;

    public ReclamationService(ReclamationRepository reclamationRepository) {
        this.reclamationRepository = reclamationRepository;
    }

    public List<Reclamation> findAll() {
        return reclamationRepository.findAll();
    }

    public Reclamation save(Reclamation reclamation) {
        return reclamationRepository.save(reclamation);
    }

    public Reclamation getById(Long id) {
        return reclamationRepository.findById(id).orElse(null);
    }

    public void delete(Long id) {
        reclamationRepository.deleteById(id);
    }

    // Updated: Add method to update an existing Reclamation
    public Reclamation update(Long id, Reclamation updatedReclamation) {
        // Check if the reclamation with the given ID exists
        Reclamation existingReclamation = reclamationRepository.findById(id).orElse(null);

        if (existingReclamation != null) {
            // Update the fields of the existing reclamation with the new data
            existingReclamation.setProduit(updatedReclamation.getProduit());
            existingReclamation.setStatut(updatedReclamation.getStatut());
            existingReclamation.setDescription(updatedReclamation.getDescription());
            existingReclamation.setDate(updatedReclamation.getDate());
            existingReclamation.setNote(updatedReclamation.getNote());
            existingReclamation.setClient(updatedReclamation.getClient());
            existingReclamation.setAgentSAV(updatedReclamation.getAgentSAV());

            // Save and return the updated reclamation
            return reclamationRepository.save(existingReclamation);
        } else {
            return null;  // Reclamation not found, can be handled differently if needed
        }
    }
}
