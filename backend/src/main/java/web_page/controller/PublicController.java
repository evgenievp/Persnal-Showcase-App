package web_page.controller;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import web_page.dtos.ProjectDTO;
import web_page.service.PublicService;
import web_page.service.VisitService;

import java.util.List;

@CrossOrigin(origins = "https://frontend-j486.onrender.com")
@RequestMapping("/api")
@RestController
public class PublicController {

    private final PublicService publicService;
    private final VisitService visitService;

    public PublicController(PublicService service, VisitService visitService) {
        this.publicService = service;
        this.visitService = visitService;
    }

    @GetMapping("/projects")
    public List<ProjectDTO> getProjects() {
        return this.publicService.getProjects();
    }

    @GetMapping("/visits")
    public long countVisit() {
        return visitService.incrementAndGet();
    }


}
