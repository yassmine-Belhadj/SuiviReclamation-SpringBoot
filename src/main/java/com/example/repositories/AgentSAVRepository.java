package com.example.repositories;

import com.example.models.AgentSAV;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface AgentSAVRepository extends JpaRepository<AgentSAV, Long> {
    // Custom queries (if any) can be added here
}
