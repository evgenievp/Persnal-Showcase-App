package web_page.controller;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import web_page.dtos.ProjectDTO;
import web_page.service.PublicService;

@RestController
@RequestMapping("/api/projects")
public class ProjectsController {
    private PublicService publicService;

    @PostMapping("/add")
    public ResponseEntity<ProjectDTO> addProject(@RequestBody ProjectDTO dto) {
        ProjectDTO dtoP = this.publicService.addProject(dto);
        return ResponseEntity.ok(dtoP);
    }

    @PatchMapping("/edit")
    public ResponseEntity<ProjectDTO> editProject(@RequestBody ProjectDTO dto) {
        ProjectDTO dtoP = this.publicService.editProject(dto);
        return ResponseEntity.ok(dtoP);
    }

    @PostMapping("/delete")
    public ResponseEntity<ProjectDTO> deleteProject(@RequestBody ProjectDTO dto) {
        ProjectDTO projectDTO = this.publicService.deleteProject(dto.getTitle());
        return ResponseEntity.ok(projectDTO);
    }

}
