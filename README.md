Portfolio Platform 


![Project-Showcase-App](demo.gif)


A full-stack web application showcasing my journey as a Java developer.
The project is built with a custom Spring Boot backend, PostgreSQL database, Docker Compose setup, and a modified React/Next.js frontend template.

## Overview

This project demonstrates:

* Custom backend development with Spring Boot, JPA and PostgreSQL
* User authentication with JWT
* Registration, login and logout functionality
* REST API design and implementation
* Protected routes and conditional frontend rendering
* Dockerized PostgreSQL database
* Integration between a Spring Boot backend and a React/Next.js frontend
* Preloaded portfolio projects using an SQL seed file

## Tech Stack

### Backend

* Java 21
* Spring Boot
* Spring Security + JWT
* Spring Data JPA / Hibernate
* PostgreSQL
* Maven
* Docker

### Frontend

* React / Next.js
* TypeScript
* Tailwind CSS

## Features

* User registration and login
* JWT-based authentication
* Protected project routes
* REST API for projects and authentication
* PostgreSQL database integration
* Docker Compose support
* Responsive frontend design
* Predefined portfolio project data loaded from SQL

## Project Data

The application includes predefined project records.

The SQL seed file is located in:

```text
backend/src/main/resources/data.sql
```

When the backend starts, this file is used to insert the initial portfolio projects into the database.

## Running with Docker Compose

Before starting the project, create your own `.env` file in the root directory.

Example:

```env
POSTGRES_DB=project_db
    POSTGRES_USER=example_user
POSTGRES_PASSWORD=example_password

MAIL_HOST=smtp.gmail.com
MAIL_PORT=587
MAIL_USERNAME=example_email
MAIL_PASSWORD=example_password

SPRING_PROFILES_ACTIVE=dev
NEXT_PUBLIC_API_URL=http://localhost:8080
JWT_SECRET=mysecretkeymysecretkeymysecretkeymysecretkey
JWT_EXPIRATION_MS=3600000
```



The credentials above are examples. You can use your own local dummy values.

Then run:

```bash
docker compose up -d --build
```

After a successful build, the frontend should be available at:

```text
http://localhost:3000
```

The backend should be available at:

```text
http://localhost:8080
```

## Running Backend and Frontend Separately

### Backend

Open the backend project in IntelliJ IDEA or another Java IDE.

Before running the backend:

1. Reload / update Maven dependencies.
2. Enable annotation processing, because the project uses Lombok.
3. Make sure PostgreSQL is running.
4. Provide the required environment variables or configure them manually in your IDE.

Useful Maven command:

```bash
mvn clean install
```

Then run the Spring Boot application.

### Frontend

Open the frontend folder:

```bash
cd frontend
```

Install dependencies:

```bash
npm install
```

Run the development server:

```bash
npm run dev
```

The frontend should be available at:

```text
http://localhost:3000
```

## Important Notes

* A local `.env` file is required when running the full Docker Compose setup.
* The `.env` file is not intended to contain real production credentials.
* If the project is run outside Docker, backend and frontend dependencies must be installed separately.
* Maven dependencies should be reloaded before running the backend manually.
* Annotation processing must be enabled for Lombok-generated code.
* The predefined project data is inserted from `backend/src/main/resources/data.sql`.

## Acknowledgments

Frontend template based on:

[react-landing-page-template-2021](https://github.com/issaafalkattan/react-landing-page-template-2021) by [Issaaf Kattan](https://github.com/issaafalkattan)

## My Contributions

* Built the Spring Boot backend from scratch
* Implemented JWT authentication
* Added registration, login and logout logic
* Integrated frontend with backend APIs
* Added protected project routes
* Added database persistence with PostgreSQL
* Added predefined project seed data through SQL
* Containerized the application with Docker Compose
* Modified and extended the frontend template
* Added project cards, login/register pages and backend-driven project rendering

## Example .env

spring.application.name=portfolio-page
spring.datasource.url=jdbc:postgresql://localhost:5432/some db
spring.datasource.username=user
spring.datasource.password=pass
spring.datasource.driver-class-name=org.postgresql.Driver
spring.jpa.hibernate.ddl-auto=update
spring.jpa.show-sql=true
spring.jpa.properties.hibernate.format_sql=true
spring.jpa.properties.hibernate.dialect=org.hibernate.dialect.PostgreSQLDialect

spring.mail.host=smtp.gmail.com
spring.mail.port=587
spring.mail.username=some_user
spring.mail.password=some token
spring.mail.properties.mail.smtp.auth=true
spring.mail.properties.mail.smtp.starttls.enable=true
