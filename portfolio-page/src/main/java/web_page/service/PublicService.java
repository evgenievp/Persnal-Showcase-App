package web_page.service;


import org.springframework.stereotype.Service;
import web_page.dtos.ProjectDTO;
import web_page.model.Project;
import web_page.repo.PublicThingsRepo;

import java.util.ArrayList;
import java.util.List;

@Service
public class PublicService {

    private final PublicThingsRepo repo;

    public PublicService(PublicThingsRepo repo) {
        this.repo = repo;
    }

    public List<ProjectDTO> getProjects() {
        List dtos = new ArrayList();
        for (var dto : this.repo.findAll()) {
            dtos.add(dto);
        }
        return dtos;
    }

    public ProjectDTO toDto(Project project) {
        return new ProjectDTO(
                project.getTitle(),
                project.getDescription(),
                project.getImageUrl(),
                project.getGithubUrl(),
                project.getLiveUrl());
    }

    public Project toProject(ProjectDTO dto) {
        return new Project(
                dto.getTitle(),
                dto.getDescription(),
                dto.getImageUrl(),
                dto.getGithubUrl(),
                dto.getLiveUrl());
    }



}

