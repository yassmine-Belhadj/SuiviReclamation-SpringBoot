package com.example.controleurs;

import com.example.models.AgentSAV;
import com.example.services.AgentSAVService;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/agents")
@CrossOrigin
public class AgentSAVController {

    private final AgentSAVService agentSAVService;

    public AgentSAVController(AgentSAVService agentSAVService) {
        this.agentSAVService = agentSAVService;
    }

    @GetMapping
    public List<AgentSAV> getAll() {
        return agentSAVService.findAll();
    }

    @PostMapping
    public AgentSAV create(@RequestBody AgentSAV agent) {
        return agentSAVService.save(agent);
    }

    @GetMapping("/{id}")
    public AgentSAV getById(@PathVariable Long id) {
        return agentSAVService.getById(id);
    }

    // Updated: PUT mapping to update an existing agent
    @PutMapping("/{id}")
    public AgentSAV update(@PathVariable Long id, @RequestBody AgentSAV updated) {
        // Delegate to the service for the actual update
        return agentSAVService.update(id, updated);
    }

    @DeleteMapping("/{id}")
    public void delete(@PathVariable Long id) {
        agentSAVService.delete(id);
    }
}
