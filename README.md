Portfolio Platform 


![Portfolio Demo](demo.gif)


A full-stack web application showcasing my journey as a Java developer. 
Built with a custom Spring Boot backend integrated with a modified React/Next.js frontend template.

Overview
This project demonstrates:
- Custom backend development with Spring Boot, JPA, and PostgreSQL
- User authentication (registration/login/logout) with JWT tokens
- REST API design and implementation
- Database integration with Docker containerization
- Frontend integration with a responsive React/Next.js template
  Tech Stack
Backend
- Java 21
- Spring Boot
- Spring Security + JWT 
- Spring Data JPA / Hibernate
- PostgreSQL
- Maven
- Docker
 Frontend
- React / Next.js
- Tailwind CSS
- TypeScript
Features
User Authentication – Register, login, logout with JWT 
Protected Routes – Projects visible only to authenticated users
REST API – Fully functional endpoints for projects and auth
Responsive Design – Mobile-friendly frontend

How to run:
    - git clone https://github.com/evgenievp/Persnal-Showcase-App.git
    - cd project-platform
    - write your own .env file with valid credentials (example)
        POSTGRES_DB=project_db
        POSTGRES_USER=example_user
        POSTGRES_PASSWORD=example_password
        
        POSTGRES_DB=project_db
        POSTGRES_USER=example_user
        POSTGRES_PASSWORD=example_password
        
        MAIL_HOST=smtp.gmail.com
        MAIL_PORT=587
        MAIL_USERNAME=example_email
        MAIL_PASSWORD=example_password
        
        SPRING_PROFILES_ACTIVE=dev
        NEXT_PUBLIC_API_URL=http://localhost:8080

    docker-compose --build
Project should be available at localhost:3000 after successful build

SPRING_PROFILES_ACTIVE=dev

NEXT_PUBLIC_API_URL=http://localhost:8080


Acknowledgments:
- Frontend Template: Based on [react-landing-page-template-2021]
(https://github.com/issaafalkattan/react-landing-page-template-2021) by [Issaaf Kattan]
(https://github.com/issaafalkattan) – a beautiful and responsive landing page template.
My Contributions: 
  - Built the entire Spring Boot backend from scratch
  - Implemented user authentication with JWT 
  - Integrated frontend with backend APIs
  - Added conditional rendering based on login state 
  - Containerized PostgreSQL with Docker
  - Modified and extended frontend components (Login/Register pages, Projects integration)

