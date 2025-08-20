# Book Rental Service

### Option 1: Running it Locally (No Docker)

1.  **Clone the repository:**
    ```bash
    git clone https://github.com/Thuyatun16/library_book_rental_service.git
    cd library_book_rental_service
    ```

2.  **npm install:**
    ```bash
    npm install
    ```

3.  **For Backend Database**
    *   Make sure PostgreSQL database is up and running.
    *   Create a `.env` file in the project's main folder. Inside, put your database connection string. 
        ```
        DATABASE_URL="postgresql://your_user:your_password@localhost:5432/your_database_name"
        ```
    *   Make the database ready
        ```bash
        npx prisma migrate deploy
        ```

4.  **Run**
    ```bash
    npm run start:dev
    ```
    Your app should be running at `http://localhost:3000`.

5.  **Check out the API Docs (Swagger):**
    Once the app is running, check `http://localhost:3000/api` to see all the API endpoints.

#### Testing Locally:

*   **For unit testing:**
    ```bash
    npm run test
    ```

*   **For E2E testing:**
    Make sure your app is running first (either locally or with Docker Compose).
    ```bash
    npm run test:e2e
    ```

---

### Option 2: Running it with Docker 


#### Instructions:

1.  **Run Docker desktop.**

2.  **Build with Docker**
    Run this code
    ```bash
    docker compose up --build -d
    ```

4.  **See if it's all running:**
    ```bash
    docker compose ps
    ```
    You should see `app`, `db`, and `redis` running.

5.  **After completed!**
    Check `http://localhost:3000` in your browser.

6.  **API Docs (Swagger) in Docker:**
    Just like locally, your API docs are at `http://localhost:3000/api`.

#### Testing with Docker:

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
