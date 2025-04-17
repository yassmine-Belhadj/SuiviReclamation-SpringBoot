package com.example.controleurs;

import com.example.models.SuiviReclamation;
import com.example.services.SuiviReclamationService;

import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/suivis")
@CrossOrigin
public class SuiviReclamationController {

    private final SuiviReclamationService suiviService;

    public SuiviReclamationController(SuiviReclamationService suiviService) {
        this.suiviService = suiviService;
    }

    @GetMapping
    public List<SuiviReclamation> getAll() {
        return suiviService.findAll();
    }

    @PostMapping
    public SuiviReclamation create(@RequestBody SuiviReclamation suivi) {
        return suiviService.save(suivi);
    }

    @GetMapping("/{id}")
    public SuiviReclamation getById(@PathVariable Long id) {
        return suiviService.getById(id);
    }

    @PutMapping("/{id}")
    public SuiviReclamation update(@PathVariable Long id, @RequestBody SuiviReclamation updated) {
        updated.setId(id);
        return suiviService.save(updated);
    }

    @DeleteMapping("/{id}")
    public void delete(@PathVariable Long id) {
        suiviService.delete(id);
    }
}
