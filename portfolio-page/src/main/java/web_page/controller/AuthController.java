package web_page.controller;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import web_page.dtos.LoginRequest;
import web_page.dtos.RegisterRequest;
import web_page.dtos.ResetPasswordRequest;
import web_page.model.UserModel;
import web_page.service.EmailService;
import web_page.service.UserService;

import java.util.UUID;

@RestController
@RequestMapping("/api/auth")
public class AuthController {

    private final EmailService emailService;
    private final UserService userService;

    public AuthController(EmailService emailService, UserService userService) {
        this.emailService = emailService;
        this.userService = userService;
    }

    @PostMapping("/login")
    public ResponseEntity<?> login(@RequestBody LoginRequest request) {
        String token = userService.login(request.getEmail(), request.getPassword());
        return ResponseEntity.ok(token);
    }
    @PostMapping("/register")
    public ResponseEntity<?> register(@RequestBody RegisterRequest request) {
        if (request.getEmail() == null || request.getPassword() == null) {
            return ResponseEntity.badRequest().body("Invalid data");
        }
        UserModel user = new UserModel(request.email, request.password);
        this.userService.registerUser(user);
        return ResponseEntity.status(201).body("User registered");
    }

    @PostMapping("/forgot-password")
    public ResponseEntity<?> forgotPassword(@RequestBody LoginRequest request) {

        if (request.getEmail() == null || request.getEmail().isEmpty()) {
            return ResponseEntity.badRequest().body("Email required");
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

        return ResponseEntity.ok("Password updated");
    }
}