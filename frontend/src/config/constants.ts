export const CONFIGURATION = {
  API_URL: import.meta.env.VITE_BACKEND_PORT
    ? `http://localhost:${import.meta.env.VITE_BACKEND_PORT}`
    : "http://localhost:8000",
  PORT: parseInt(import.meta.env.VITE_FRONTEND_PORT || "3000"),
};
