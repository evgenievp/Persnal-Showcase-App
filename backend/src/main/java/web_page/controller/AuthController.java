package web_page.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.bind.annotation.*;
import web_page.config.JwtUtil;
import web_page.dtos.LoginRequest;
import web_page.dtos.RegisterRequest;
import web_page.dtos.ResetPasswordRequest;
import web_page.model.UserModel;
import web_page.repo.UserRepository;
import web_page.service.EmailService;
import web_page.service.UserService;

import java.util.UUID;

@RestController
@RequestMapping("/api/auth")
public class AuthController {

    private final EmailService emailService;
    private final UserService userService;
    private final UserRepository userRepository;
    private final PasswordEncoder passwordEncoder;
    private final JwtUtil jwtUtil;

    public AuthController(EmailService emailService,
                          UserService userService,
                          UserRepository userRepository,
                          PasswordEncoder passwordEncoder,
                          JwtUtil jwtUtil) {
        this.emailService = emailService;
        this.userService = userService;
        this.userRepository = userRepository;
        this.passwordEncoder = passwordEncoder;
        this.jwtUtil = jwtUtil;
    }

    @PostMapping("/login")
    public ResponseEntity<?> login(@RequestBody LoginRequest request) {
        // 1. Намери потребител
        UserModel user = userRepository.findByEmail(request.getEmail())
                .orElseThrow(() -> new RuntimeException("User not found"));

        if (passwordEncoder.matches(request.getPassword(), user.getPassword())) {
            String token = jwtUtil.generateToken(user.getEmail());
            return ResponseEntity.ok(token);
        }
        return ResponseEntity.status(HttpStatus.UNAUTHORIZED)
                .body("Invalid credentials");
    }

    @PostMapping("/register")
    public ResponseEntity<?> register(@RequestBody RegisterRequest request) {
        if (request.getEmail() == null || request.getPassword() == null) {
            return ResponseEntity.badRequest().body("Invalid data!");
        }
        UserModel user = new UserModel(request.email, request.password);
        this.userService.registerUser(user);
        return ResponseEntity.status(201).body("User registered!");
    }

    @PostMapping("/forgot-password")
    public ResponseEntity<?> forgotPassword(@RequestBody LoginRequest request) {

        if (request.getEmail() == null || request.getEmail().isEmpty()) {
            return ResponseEntity.badRequest().body("Email required!");
        }
        String resetToken = UUID.randomUUID().toString();
        String resetLink = "http://localhost:3000/reset-password?token=" + resetToken;
        emailService.sendResetPasswordEmail(request.getEmail(), resetLink);
        return ResponseEntity.ok("Reset link sent to email");
    }

    @PostMapping("/reset-password")
    public ResponseEntity<?> resetPassword(@RequestBody ResetPasswordRequest request) {
        if (request.getToken() == null || request.getPassword() == null) {
            return ResponseEntity.badRequest().body("Invalid request");
        }

        return ResponseEntity.ok("Password updated!");
    }
}