require('dotenv').config(); // Loads `.env` file contents into process.env by default

const express = require('express');
const cors = require('cors');

const app = express();
const port = process.env.BACKEND_PORT;
const corsOrigin = process.env.CORS_ORIGIN || `http://localhost:${process.env.FRONTEND_PORT}`; // Default to frontend's origin

// Allow requests from frontend
app.use(cors({
  origin: corsOrigin,
  credentials: true
}));

console.log(`CORS enabled for origin: ${corsOrigin}`);
console.log(`Backend running on port: ${port}`);

app.get('/api/hello', (req, res) => {
  res.json({ message: 'Hello from the backend!' });
});

app.listen(port, () => {
  console.log(`Backend listening at http://localhost:${port}`);
});
