package com.example.controleurs;

import com.example.models.Reclamation;
import com.example.models.AgentSAV;
import com.example.models.Client;
import com.example.services.ReclamationService;
import com.example.repositories.AgentSAVRepository;
import com.example.repositories.ClientRepository;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/api/reclamations")
@CrossOrigin
public class ReclamationController {

    private final ReclamationService reclamationService;
    private final AgentSAVRepository agentSAVRepository;
    private final ClientRepository clientRepository;

    public ReclamationController(ReclamationService reclamationService, AgentSAVRepository agentSAVRepository, ClientRepository clientRepository) {
        this.reclamationService = reclamationService;
        this.agentSAVRepository = agentSAVRepository;
        this.clientRepository = clientRepository;
    }

    @GetMapping
    public List<Reclamation> getAll() {
        return reclamationService.findAll();
    }

    @PostMapping
    public Reclamation create(@RequestBody Reclamation r) {
        // Validate that the client exists
        Optional<Client> clientOpt = clientRepository.findById(r.getClient().getId());
        if (!clientOpt.isPresent()) {
            throw new RuntimeException("Client with ID " + r.getClient().getId() + " does not exist");
        }
        r.setClient(clientOpt.get());

        // Validate that the agent exists
        Optional<AgentSAV> agentOpt = agentSAVRepository.findById(r.getAgentSAV().getId());
        if (!agentOpt.isPresent()) {
            throw new RuntimeException("AgentSAV with ID " + r.getAgentSAV().getId() + " does not exist");
        }
        r.setAgentSAV(agentOpt.get());

        return reclamationService.save(r);
    }

    @GetMapping("/{id}")
    public Reclamation getById(@PathVariable Long id) {
        return reclamationService.getById(id);
    }

    @PutMapping("/{id}")
    public Reclamation update(@PathVariable Long id, @RequestBody Reclamation updated) {
        updated.setId(id);
        return reclamationService.save(updated);
    }

    @DeleteMapping("/{id}")
    public void delete(@PathVariable Long id) {
        reclamationService.delete(id);
    }
}
