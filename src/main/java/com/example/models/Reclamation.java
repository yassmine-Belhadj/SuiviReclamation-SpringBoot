package com.example.models;

import jakarta.persistence.*;
import java.time.LocalDate;

@Entity
@Table(name = "reclamation")
public class Reclamation {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id")
    private Long id;

    @Column(name = "produit", nullable = false, length = 255)
    private String produit;

    @Column(name = "statut", nullable = false, length = 50)
    private String statut;

    @Column(name = "description", nullable = false, length = 500)
    private String description;

    @Column(name = "date", nullable = false)
    private LocalDate date;

    @Column(name = "note", nullable = true)
    private Integer note;

    @ManyToOne
    @JoinColumn(name = "client_id", nullable = false)
    private Client client;

    @ManyToOne
    @JoinColumn(name = "agent_sav_id", nullable = false)
    private AgentSAV agentSAV;

    // Default constructor
    public Reclamation() {
    }

    // Parametrized constructor for convenience
    public Reclamation(String produit, String statut, String description, LocalDate date, Integer note, Client client, AgentSAV agentSAV) {
        this.produit = produit;
        this.statut = statut;
        this.description = description;
        this.date = date;
        this.note = note;
        this.client = client;
        this.agentSAV = agentSAV;
    }

    // Getters and Setters
    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getProduit() {
        return produit;
    }

    public void setProduit(String produit) {
        this.produit = produit;
    }

    public String getStatut() {
        return statut;
    }

    public void setStatut(String statut) {
        this.statut = statut;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public LocalDate getDate() {
        return date;
    }

    public void setDate(LocalDate date) {
        this.date = date;
    }

    public Integer getNote() {
        return note;
    }

    public void setNote(Integer note) {
        this.note = note;
    }

    public Client getClient() {
        return client;
    }

    public void setClient(Client client) {
        this.client = client;
    }

    public AgentSAV getAgentSAV() {
        return agentSAV;
    }

    public void setAgentSAV(AgentSAV agentSAV) {
        this.agentSAV = agentSAV;
    }

    // Optional: Override toString() for better readability
    @Override
    public String toString() {
        return "Reclamation{" +
                "id=" + id +
                ", produit='" + produit + '\'' +
                ", statut='" + statut + '\'' +
                ", description='" + description + '\'' +
                ", date=" + date +
                ", note=" + note +
                ", client=" + client +
                ", agentSAV=" + agentSAV +
                '}';
    }
}
