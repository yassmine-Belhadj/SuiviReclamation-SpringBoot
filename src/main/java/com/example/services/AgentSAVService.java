package com.example.services;

import com.example.models.AgentSAV;
import com.example.repositories.AgentSAVRepository;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class AgentSAVService {

    private final AgentSAVRepository agentSAVRepository;

    public AgentSAVService(AgentSAVRepository agentSAVRepository) {
        this.agentSAVRepository = agentSAVRepository;
    }

    public List<AgentSAV> findAll() {
        return agentSAVRepository.findAll();
    }

    public AgentSAV save(AgentSAV agent) {
        return agentSAVRepository.save(agent);
    }

    public AgentSAV getById(Long id) {
        return agentSAVRepository.findById(id).orElse(null);
    }

    public void delete(Long id) {
        agentSAVRepository.deleteById(id);
    }

    // Updated: Add method to update an existing AgentSAV
    public AgentSAV update(Long id, AgentSAV updatedAgent) {
        // Check if the agent with the given ID exists
        AgentSAV existingAgent = agentSAVRepository.findById(id).orElse(null);
        
        if (existingAgent != null) {
            // Update the fields of the existing agent with the new data
            existingAgent.setNom(updatedAgent.getNom());
            existingAgent.setCompetence(updatedAgent.getCompetence());
            // Save and return the updated agent
            return agentSAVRepository.save(existingAgent);
        } else {
            return null;  // Agent not found, can be handled differently if needed
        }
    }
}
