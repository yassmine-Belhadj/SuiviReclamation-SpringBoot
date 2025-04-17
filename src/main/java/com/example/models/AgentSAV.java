package com.example.models;

import jakarta.persistence.*;

@Entity
@Table(name = "agentsav")
public class AgentSAV {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id")
    private Long id;

    @Column(name = "nom", nullable = false, length = 100)
    private String nom;

    @Column(name = "competence", nullable = false, length = 255)
    private String competence;

    // Default constructor
    public AgentSAV() {
    }

    // Parametrized constructor for convenience
    public AgentSAV(String nom, String competence) {
        this.nom = nom;
        this.competence = competence;
    }

    // Getters and Setters
    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getNom() {
        return nom;
    }

    public void setNom(String nom) {
        this.nom = nom;
    }

    public String getCompetence() {
        return competence;
    }

    public void setCompetence(String competence) {
        this.competence = competence;
    }

    // Optional: Override toString() for better readability
    @Override
    public String toString() {
        return "AgentSAV{" +
                "id=" + id +
                ", nom='" + nom + '\'' +
                ", competence='" + competence + '\'' +
                '}';
    }
}
