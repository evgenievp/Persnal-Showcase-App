package web_page.repo;

import org.springframework.data.jpa.repository.JpaRepository;
import web_page.model.UserModel;

import java.util.Optional;

public interface UserRepository extends JpaRepository<UserModel, Long> {
    Optional<UserModel> findByEmail(String email);
    boolean existsByEmail(String email);
}
