# Book Rental Service

A NestJS-based backend application for managing book rentals, users, and books. It includes authentication, authorization (role-based), and a rental flow.

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.

### Prerequisites

*   Node.js (LTS version recommended)
*   npm (Node Package Manager)
*   PostgreSQL database
*   Redis (for caching/session management)

### Local Development

Follow these steps to set up and run the application locally without Docker.

1.  **Clone the repository:**
    ```bash
    git clone https://github.com/Thuyatun16/library_book_rental_service.git
    cd library_book_rental_service
    ```

2.  **Install dependencies:**
    ```bash
    npm install
    ```

3.  **Database Setup:**
    *   Ensure you have a PostgreSQL database running.
    *   Set your database connection URL in a `.env` file at the project root. Example:
        ```
        DATABASE_URL="postgresql://user:password@localhost:5432/your_database_name"
        ```
    *   Apply Prisma migrations to set up your database schema:
        ```bash
        npx prisma migrate deploy
        ```

4.  **Run the application in development mode:**
    ```bash
    npm run start:dev
    ```
    The application will typically run on `http://localhost:3000`.

5.  **Access Swagger UI (API Documentation):**
    Once the application is running, you can access the Swagger UI for API documentation and testing at:
    `http://localhost:3000/api` (or similar, depending on your Swagger setup).

### Running Tests Locally

1.  **Unit and Integration Tests:**
    ```bash
    npm run test
    ```

2.  **End-to-End (E2E) Tests:**
    Ensure your application is running (either locally or via Docker Compose).
    ```bash
    npm run test:e2e
    ```

## Docker Development (Recommended)

Using Docker Compose is the recommended way to run this application, as it sets up the NestJS app, PostgreSQL database, and Redis cache in isolated containers.

### Prerequisites for Docker Development

*   Docker Desktop installed and running.

### Setup and Run with Docker Compose

1.  **Ensure Docker Desktop is running.**

2.  **Update `docker-compose.yml` credentials:**
    Open `docker-compose.yml` and replace the placeholder `user` and `password` for the `db` service with your desired secure credentials.

3.  **Build and run all services:**
    This command will build the NestJS application's Docker image, start the PostgreSQL and Redis containers, and automatically apply database migrations before starting the NestJS app.
    ```bash
    docker compose up --build -d
    ```

4.  **Verify services are running:**
    ```bash
    docker compose ps
    ```
    You should see `app`, `db`, and `redis` services listed with a `running` status.

5.  **Access the application:**
    The application will be accessible at `http://localhost:3000`.

6.  **Access Swagger UI (API Documentation) with Docker:**
    Once the Docker Compose services are up, you can access the Swagger UI at:
    `http://localhost:3000/api` (or similar, depending on your Swagger setup).

### Running Tests with Docker

You can run your tests directly within the Docker Compose environment for consistency.

1.  **Ensure your Docker Compose services are running:**
    ```bash
    docker compose up -d
    ```

2.  **Unit and Integration Tests in Docker:**
    ```bash
    docker compose run --rm app npm run test
    ```

3.  **End-to-End (E2E) Tests in Docker:**
    ```bash
    docker compose run --rm app npm run test:e2e
    ```

## API Documentation

The API documentation is available via Swagger UI.
*   **Local:** `http://localhost:3000/api`
*   **Docker:** `http://localhost:3000/api`

## Deployment

When you're ready to deploy your NestJS application to production, there are some key steps you can take to ensure it runs as efficiently as possible. Check out the [deployment documentation](https://docs.nestjs.com/deployment) for more information.

If you are looking for a cloud-based platform to deploy your NestJS application, check out [Mau](https://mau.nestjs.com), our official platform for deploying NestJS applications on AWS. Mau makes deployment straightforward and fast, requiring just a few simple steps:

```bash
$ npm install -g @nestjs/mau
$ mau deploy
```

With Mau, you can deploy your application in just a few clicks, allowing you to focus on building features rather than managing infrastructure.

## Resources

Check out a few resources that may come in handy when working with NestJS:

- Visit the [NestJS Documentation](https://docs.nestjs.com) to learn more about the framework.
- For questions and support, please visit our [Discord channel](https://discord.gg/G7Qnnhy).
- To dive deeper and get more hands-on experience, check out our official video [courses](https://courses.nestjs.com/).
- Deploy your application to AWS with the help of [NestJS Mau](https://mau.nestjs.com) in just a few clicks.
- Visualize your application graph and interact with the NestJS application in real-time using [NestJS Devtools](https://devtools.nestjs.com).
- Need help with your project (part-time to full-time)? Check out our official [enterprise support](https://enterprise.nestjs.com).
- To stay in the loop and get updates, follow us on [X](https://x.com/nestframework) and [LinkedIn](https://linkedin.com/company/nestjs).
- Looking for a job, or have a job to offer? Check out our official [Jobs board](https://jobs.nestjs.com).

## Support

Nest is an MIT-licensed open source project. It can grow thanks to the sponsors and support by the amazing backers. If you'd like to join them, please [read more here](https://docs.nestjs.com/support).

## Stay in touch

- Author - [Kamil Myśliwiec](https://twitter.com/kammysliwiec)
- Website - [https://nestjs.com](https://nestjs.com/)
- Twitter - [@nestframework](https://twitter.com/nestframework)

## License

Nest is [MIT licensed](https://github.com/nestjs/nest/blob/master/LICENSE).