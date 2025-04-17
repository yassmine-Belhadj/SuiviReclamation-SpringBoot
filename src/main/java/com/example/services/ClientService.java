package com.example.services;

import com.example.models.Client;
import com.example.repositories.ClientRepository;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ClientService {

    private final ClientRepository clientRepository;

    public ClientService(ClientRepository clientRepository) {
        this.clientRepository = clientRepository;
    }

    public List<Client> findAll() {
        return clientRepository.findAll();
    }

    public Client save(Client client) {
        return clientRepository.save(client);
    }

    public Client getById(Long id) {
        return clientRepository.findById(id).orElse(null);
    }

    public void delete(Long id) {
        clientRepository.deleteById(id);
    }

    // Fixed: Add update method to handle client updates
    public Client update(Long id, Client updatedClient) {
        // Check if the client exists
        Client existingClient = clientRepository.findById(id).orElse(null);
        if (existingClient != null) {
            // Update the fields, without modifying the ID
            existingClient.setNom(updatedClient.getNom());
            existingClient.setEmail(updatedClient.getEmail());
            existingClient.setTelephone(updatedClient.getTelephone());

            // Save the updated client
            return clientRepository.save(existingClient);
        } else {
            return null;  // Client not found
        }
    }
}
