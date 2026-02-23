package web_page.repo;

import org.springframework.data.jpa.repository.JpaRepository;
import web_page.model.Project;

public interface PublicThingsRepo extends JpaRepository<Project, Long> {


}
