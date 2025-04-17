package com.example.repositories;


import com.example.models.Reclamation;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ReclamationRepository extends JpaRepository<Reclamation, Long> {
    // Custom query methods can be added here if needed
}
