# Minimal Auth Portal

This project is a minimal authentication portal built with **React**, **TypeScript**, and **Vite** for the frontend, and **Python** (Django) for the backend.

---

## Getting Started

Follow these steps to run the project locally after cloning or downloading the repository.

---

### 1. Clone the Repository

```sh
git clone https://github.com/your-username/minimal-auth-portal.git
cd minimal-auth-portal
```

---

## Backend Setup

1. **Navigate to the backend directory** (if your backend is in the root or a `backend/` folder, adjust accordingly):

   ```sh
   cd backend  # or stay in root if backend files are here
   ```

2. **Create and activate a virtual environment**:

   ```sh
   python -m venv .venv
   .venv\Scripts\activate  # On Windows
   # source .venv/bin/activate  # On macOS/Linux
   ```

3. **Install dependencies**:

   ```sh
   pip install -r requirements.txt
   ```

4. **Set up environment variables**:
   - Copy `.env.example` to `.env` and fill in the required values.

5. **Apply database migrations** (for Django):

   ```sh
   python manage.py migrate
   ```

6. **Run the backend server**:

   ```sh
   python manage.py runserver
   ```

   The backend will typically run at [http://localhost:8000](http://localhost:8000).

---

## Frontend Setup

1. **Navigate to the frontend directory**:

   ```sh
   cd frontend
   ```

2. **Install dependencies**:

   ```sh
   npm install
   ```

3. **Start the development server**:

   ```sh
   npm run dev
   ```

   This will start the Vite development server. Open [http://localhost:5173](http://localhost:5173) in your browser to view the app.

---

## Project Structure

- `frontend/` - React app (Vite + TypeScript)
- `backend/` - Python backend (Django)
- `.env` - Environment variables (not committed to git)

---

## Linting and Formatting

This project uses ESLint for code linting in the frontend. To run the linter:

```sh
npm run lint
```

##
