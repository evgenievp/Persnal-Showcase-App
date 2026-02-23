package web_page.controller;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import web_page.dtos.ProjectDTO;
import web_page.service.PublicService;

import java.util.List;

@CrossOrigin(origins = "https://localhost/3000")
@RequestMapping("/api")
@RestController
public class PublicController {

    private final PublicService publicService;

    public PublicController(PublicService service) {
        this.publicService = service;
    }

    @GetMapping("/projects")
    public List<ProjectDTO> getProjects() {
        return this.publicService.getProjects();
    }

}
