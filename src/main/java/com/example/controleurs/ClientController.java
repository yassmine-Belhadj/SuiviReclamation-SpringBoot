package com.example.controleurs;

import com.example.models.Client;
import com.example.services.ClientService;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/clients")  // This should map the path correctly
@CrossOrigin(origins = "*")  // Allow all origins for CORS
public class ClientController {

    private final ClientService clientService;

    public ClientController(ClientService clientService) {
        this.clientService = clientService;
    }

    @GetMapping
    public List<Client> getAll() {
        return clientService.findAll();
    }

    @PostMapping
    public Client create(@RequestBody Client client) {
        return clientService.save(client);
    }

    @GetMapping("/{id}")
    public Client getById(@PathVariable Long id) {
        return clientService.getById(id);
    }

    @DeleteMapping("/{id}")
    public void delete(@PathVariable Long id) {
        clientService.delete(id);
    }

    // Updated: Add PUT method to update a client
    @PutMapping("/{id}")
    public Client update(@PathVariable Long id, @RequestBody Client updatedClient) {
        return clientService.update(id, updatedClient);
    }
}
