package com.example.services;

import com.example.models.SuiviReclamation;
import com.example.repositories.SuiviReclamationRepository;

import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class SuiviReclamationService {

    private final SuiviReclamationRepository suiviReclamationRepository;

    public SuiviReclamationService(SuiviReclamationRepository suiviReclamationRepository) {
        this.suiviReclamationRepository = suiviReclamationRepository;
    }

    public List<SuiviReclamation> findAll() {
        return suiviReclamationRepository.findAll();
    }

    public SuiviReclamation save(SuiviReclamation suivi) {
        return suiviReclamationRepository.save(suivi);
    }

    public SuiviReclamation getById(Long id) {
        return suiviReclamationRepository.findById(id).orElse(null);
    }

    public void delete(Long id) {
        suiviReclamationRepository.deleteById(id);
    }
}
