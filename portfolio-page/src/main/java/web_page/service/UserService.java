package web_page.service;

import web_page.dtos.UserDTO;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;
import jakarta.validation.Valid;
import web_page.model.UserModel;
import web_page.repo.UserRepository;

@Service
public class UserService {

    private UserRepository userRepository;

    @Autowired
    private PasswordEncoder passwordEncoder;

    public UserService(UserRepository userRepository) {
        this.userRepository = userRepository;
    }

    public UserModel registerUser(@Valid UserModel userModel) {
        UserDTO userDTO = toDto(userModel);
        if (userRepository.existsByEmail(userDTO.getEmail())) {
            throw new RuntimeException("Email already exists");
        }
        UserModel user = new UserModel();
        user.setEmail(userDTO.getEmail());
        user.setPassword(passwordEncoder.encode(userDTO.getPassword()));
        return userRepository.save(user);
    }

    public UserDTO toDto(UserModel userModel) {
        return new UserDTO(userModel.getEmail(), userModel.getPassword());
    }

    public UserModel toUserModel(UserDTO userDTO) {
        return new UserModel(userDTO.getEmail(), userDTO.getPassword());
    }


    public String login(String email, String password) {
        UserModel user = userRepository.findByEmail(email)
                .orElseThrow(() -> new RuntimeException("User not found"));
        if (!passwordEncoder.matches(password, user.getPassword())) {
            throw new RuntimeException("Invalid password");
        }
        return "jwt-token-here";
    }

}