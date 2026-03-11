package web_page.service;


import jakarta.persistence.EntityNotFoundException;
import org.springframework.stereotype.Service;
import web_page.dtos.ProjectDTO;
import web_page.model.Project;
import web_page.repo.PublicThingsRepo;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

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

    public ProjectDTO addProject(ProjectDTO dto) {
        Project project = toProject(dto);
        this.repo.save(project);
        return toDto(project);
    }

    public ProjectDTO editProject(ProjectDTO dto) {
        Optional<Project> current = this.repo.findByTitle(dto.getTitle());
        if (current.isEmpty()) {
            throw new EntityNotFoundException("no project with this title in db");
        }
        ProjectDTO project = toDto(current.get());
        project.setTitle(dto.getTitle());
        project.setDescription(dto.getDescription());
        project.setGithubUrl(dto.getGithubUrl());
        project.setImageUrl(dto.getImageUrl());
        project.setLiveUrl(dto.getLiveUrl());
        this.repo.save(toProject(project));
        return project;
    }

    public ProjectDTO deleteProject(String title) {
        Optional<Project> opt = this.repo.findByTitle(title);
        if (opt.isEmpty()) {
            throw new EntityNotFoundException("no project with this title in db");
        }
        ProjectDTO dtoP = toDto(opt.get());
        this.repo.delete(opt.get());
        return dtoP;
    }

}

