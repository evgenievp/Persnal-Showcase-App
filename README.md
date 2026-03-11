Portfolio Platform (Work in progress)


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
- Spring Security + JWT (planned)
- Spring Data JPA / Hibernate
- PostgreSQL
- Maven
- Docker
 Frontend
- React / Next.js
- Tailwind CSS
- TypeScript
Features
User Authentication – Register, login, logout with JWT (planned)
Protected Routes – Projects visible only to authenticated users (planned)
REST API – Fully functional endpoints for projects and auth
Responsive Design – Mobile-friendly frontend

Project Structure

Getting Started
 Prerequisites
- Java 21
- Node.js
- Docker (optional, for database)
- Maven

Backend Setup:
bash
cd backend
mvn spring-boot:run

Frontend Setup:
bash
cd frontend
npm install
npm run dev
Database Setup (with Docker)
bash
docker run -d 
  --name postgres_db 
  -e POSTGRES_USER=evgenievp \
  -e POSTGRES_PASSWORD=newPass123. \
  -e POSTGRES_DB=blog_db \
  -p 5432:5432 \
  postgres:latest

Acknowledgments:
- Frontend Template: Based on [react-landing-page-template-2021]
(https://github.com/issaafalkattan/react-landing-page-template-2021) by [Issaaf Kattan]
(https://github.com/issaafalkattan) – a beautiful and responsive landing page template.
My Contributions: 
  - Built the entire Spring Boot backend from scratch
  - Implemented user authentication with JWT (in progress)
  - Integrated frontend with backend APIs
  - Added conditional rendering based on login state (planned)
  - Containerized PostgreSQL with Docker
  - Modified and extended frontend components (Login/Register pages, Projects integration)

