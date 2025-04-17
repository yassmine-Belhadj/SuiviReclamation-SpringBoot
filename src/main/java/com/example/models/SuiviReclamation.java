package com.example.models;

import jakarta.persistence.*;
import java.time.LocalDate;

@Entity
@Table(name = "suivireclamation")
public class SuiviReclamation {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id")
    private Long id;

    @Column(name = "message", nullable = false, length = 255)
    private String message;

    @Column(name = "action", nullable = true, length = 255)
    private String action;

    @Column(name = "date", nullable = false)
    private LocalDate date;

    @ManyToOne
    @JoinColumn(name = "reclamation_id", nullable = false)
    private Reclamation reclamation;

    @ManyToOne
    @JoinColumn(name = "employe_id", nullable = false)
    private AgentSAV employe;

    // Default constructor
    public SuiviReclamation() {
    }

    // Parametrized constructor for convenience
    public SuiviReclamation(String message, String action, LocalDate date, Reclamation reclamation, AgentSAV employe) {
        this.message = message;
        this.action = action;
        this.date = date;
        this.reclamation = reclamation;
        this.employe = employe;
    }

    // Getters and Setters
    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getMessage() {
        return message;
    }

    public void setMessage(String message) {
        this.message = message;
    }

    public String getAction() {
        return action;
    }

    public void setAction(String action) {
        this.action = action;
    }

    public LocalDate getDate() {
        return date;
    }

    public void setDate(LocalDate date) {
        this.date = date;
    }

    public Reclamation getReclamation() {
        return reclamation;
    }

    public void setReclamation(Reclamation reclamation) {
        this.reclamation = reclamation;
    }

    public AgentSAV getEmploye() {
        return employe;
    }

    public void setEmploye(AgentSAV employe) {
        this.employe = employe;
    }

    // Optional: Override toString() for better readability
    @Override
    public String toString() {
        return "SuiviReclamation{" +
                "id=" + id +
                ", message='" + message + '\'' +
                ", action='" + action + '\'' +
                ", date=" + date +
                ", reclamation=" + reclamation +
                ", employe=" + employe +
                '}';
    }
}
