TRUNCATE TABLE project;
INSERT INTO project (id, title, description, image_url, github_url, live_url)
VALUES
(1,
 'Sirma Final Exam - Football Players SQL Task',
 'Spring Boot application for solving a complex SQL task: finding the pair of EURO 2024 football players who played together for the longest total time. The project includes CSV import, CRUD operations for players, teams and matches, native SQL queries with CTEs, validation, tests with JUnit and Mockito, and MS SQL database integration.',
 '/assets/images/euro_2024.jpeg',
 'https://github.com/evgenievp/SirmaAcademyFinalExam',
 NULL
),

(2,
 'Blog',
 'REST API for managing blog posts and likes with user authentication. Includes registration, login, JWT access and refresh tokens, BCrypt password hashing, PostgreSQL persistence, like/unlike toggle logic, database constraint for one like per user, and endpoints for like counts and users who liked a post.',
 '/assets/images/blog_api.jpg',
 'https://github.com/evgenievp/Blog',
 NULL
),

(3,
 'Task Manager API',
 'Spring Boot REST API for managing projects, tasks and comments. The project demonstrates JWT authentication, CRUD operations, pagination, relational database design between users, projects, tasks and comments, PostgreSQL integration and Docker support.',
 '/assets/images/task.png',
 'https://github.com/evgenievp/TaskManagerApi',
 NULL
),

(4,
 'Personal Showcase App',
 'Full-stack portfolio web application with a custom Spring Boot backend and a modified React/Next.js frontend template. Includes JWT authentication, protected routes, project management API, PostgreSQL database, Docker Compose setup, Tailwind CSS and frontend-backend integration.',
 '/assets/images/portfolio.jpeg',
 'https://github.com/evgenievp/Persnal-Showcase-App',
 NULL
),

(5,
 'Logic Proof Engine',
 'Pure Java automated theorem prover for propositional logic using Hilbert-style axiomatic systems. It includes formula representation, implication, axioms, substitution rules, Modus Ponens matching and a proof engine capable of proving basic tautologies such as p → p.',
 '/assets/images/logic.jpeg',
 'https://github.com/evgenievp/Hilbert-Style-Axiom-Proof',
 NULL
),

(6,
 'Gold Price Tracker',
 'Application for tracking gold prices using a Python Selenium scraper and a Spring Boot REST API. The scraper collects price data, the backend stores price history in MS SQL Server, and endpoints return the latest prices, full history, highest price and lowest price.',
 '/assets/images/gold_price.jpeg',
 'https://github.com/evgenievp/GoldPriceTracker',
 NULL
),

(7,
 'Crypto Tracker',
 'Spring Boot application for tracking cryptocurrency prices from public APIs such as CoinGecko. It stores price history, exposes REST endpoints for all or specific currencies, supports manual price updates and includes mock email notifications when thresholds are crossed.',
 '/assets/images/web_scraping.jpeg',
 'https://github.com/evgenievp/CryptoTracker',
 NULL
),

(8,
 'Java Multithreading Lab',
 'Collection of small Java projects demonstrating multithreading concepts such as synchronized blocks, ReentrantLock, ExecutorService, Callable and Future, ScheduledExecutorService, BlockingQueue, ForkJoin, WatchService, parallel streams, JUnit and Mockito testing.',
 '/assets/images/async.png',
 'https://github.com/evgenievp/MultithreadingLab',
 NULL
)
