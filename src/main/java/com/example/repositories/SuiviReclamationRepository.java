package com.example.repositories;


import com.example.models.SuiviReclamation;
import org.springframework.data.jpa.repository.JpaRepository;

public interface SuiviReclamationRepository extends JpaRepository<SuiviReclamation, Long> {
    // Custom query methods can be added here if needed
}
