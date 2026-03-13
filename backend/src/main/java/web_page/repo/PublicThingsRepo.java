package web_page.repo;

import org.springframework.data.jpa.repository.JpaRepository;
import web_page.model.Project;

import java.util.Optional;

public interface PublicThingsRepo extends JpaRepository<Project, Long> {


    Optional<Project> findByTitle(String title);
}
