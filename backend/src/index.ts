import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import dicomRouter from './routes/dicom.routes';
import modelsRouter from './routes/models.routes';

// Load environment variables from .env file if not in production
if (process.env.ENVIRONMENT !== 'production') {
  console.log('[SERVER] Loading environment variables from parent .env file');
  dotenv.config({ path: '../.env' }); 
}

const port = process.env.BACKEND_PORT;
const corsOrigin = process.env.CORS_ORIGIN || `http://localhost:${process.env.FRONTEND_PORT}`; // Default to frontend's origin

const app = express();

// Middleware to parse JSON
app.use(express.json());

// Allow requests from frontend client
console.log(`[SERVER] CORS origin added: ${corsOrigin}`);
app.use(cors({
  origin: corsOrigin,
  credentials: true
}));

// Routes
app.use('/api/dicom', dicomRouter);
app.use('/api/models', modelsRouter);

app.listen(port, () => {
  console.log(`[SERVER] Listening at http://localhost:${port}`);
});