package web_page.repo;

import org.springframework.data.jpa.repository.JpaRepository;
import web_page.model.VisitCounter;

public interface VisitRepo extends JpaRepository<VisitCounter, Long> {

}
