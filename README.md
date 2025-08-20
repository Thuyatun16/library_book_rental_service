# Book Rental Service

Hey there! This is a NestJS-powered backend for a book rental service. It handles users, books, and rentals, complete with login, roles, and all that good stuff.

## Getting Started

Ready to get this app running? Here's how you can set it up, whether you prefer working directly on your machine or with Docker.

### What you'll need:

*   Node.js (the latest stable version is usually best!)
*   npm (Node Package Manager, comes with Node.js)
*   A PostgreSQL database (that's where your data lives!)
*   Redis (for some speedy caching)

---

### Option 1: Running it Locally (No Docker)

If you like keeping things on your machine, follow these steps:

1.  **Grab the code:**
    ```bash
    git clone https://github.com/Thuyatun16/library_book_rental_service.git
    cd library_book_rental_service
    ```

2.  **Install the goodies:**
    ```bash
    npm install
    ```

3.  **Database Time!**
    *   Make sure your PostgreSQL database is up and running.
    *   Create a `.env` file in the project's main folder. Inside, put your database connection string. It'll look something like this:
        ```
        DATABASE_URL="postgresql://your_user:your_password@localhost:5432/your_database_name"
        ```
    *   Now, let's get your database schema ready. Run this:
        ```bash
        npx prisma migrate deploy
        ```

4.  **Fire it up!**
    ```bash
    npm run start:dev
    ```
    Your app should be chilling at `http://localhost:3000`.

5.  **Check out the API Docs (Swagger):**
    Once the app is running, pop open your browser and head to `http://localhost:3000/api` to see all the API endpoints.

#### Testing Locally:

*   **Quick Checks (Unit/Integration Tests):**
    ```bash
    npm run test
    ```

*   **Full App Tests (End-to-End):**
    Make sure your app is running first (either locally or with Docker Compose).
    ```bash
    npm run test:e2e
    ```

---

### Option 2: Running it with Docker (Super Recommended!)

This is the easiest way to get everything (your app, database, and Redis) running together in a neat, isolated environment.

#### What you'll need for Docker:

*   Docker Desktop (download and install it if you haven't!)

#### Let's get Docker-ized:

1.  **First, make sure Docker Desktop is open and running.**

2.  **A quick `docker-compose.yml` check:**
    Open the `docker-compose.yml` file in the main project folder. You'll see some placeholder `user` and `password` for the database. **Change these to something secure you'll remember!**

3.  **Build and Launch Everything!**
    This single command does it all: builds your app's Docker image, starts PostgreSQL and Redis, and even sets up your database before your app kicks off.
    ```bash
    docker compose up --build -d
    ```

4.  **See if it's all running:**
    ```bash
    docker compose ps
    ```
    You should see `app`, `db`, and `redis` all happily running.

5.  **Your app is live!**
    Head to `http://localhost:3000` in your browser.

6.  **API Docs (Swagger) in Docker:**
    Just like locally, your API docs are at `http://localhost:3000/api`.

#### Testing with Docker:

Want to run tests in a super consistent environment? Docker's got you covered!

1.  **Make sure your Docker Compose services are up:**
    ```bash
    docker compose up -d
    ```

2.  **Unit/Integration Tests in Docker:**
    ```bash
    docker compose run --rm app npm run test
    ```

3.  **End-to-End Tests in Docker:**
    ```bash
    docker compose run --rm app npm run test:e2e
    ```
