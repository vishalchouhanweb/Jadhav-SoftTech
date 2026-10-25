import express from 'express';
import helmet from 'helmet';
import cors from 'cors';
import dotenv from 'dotenv';
dotenv.config();

import contactRoutes from './routes/contact.routes.js';
import { errorHandler } from './middleware/errorHandler.js';

const app = express();

// Vercel/proxy ke peeche asli visitor IP (rate limiter ke liye zaroori)
app.set('trust proxy', 1);

app.use(helmet());
// CLIENT_ORIGIN: ek ya kai domains, comma se alag (trailing slash nahi)
const allowedOrigins = (process.env.CLIENT_ORIGIN || 'http://localhost:5173')
  .split(',')
  .map((o) => o.trim().replace(/\/+$/, ''))
  .filter(Boolean);

app.use(cors({
  origin: allowedOrigins,
  credentials: true
}));
app.use(express.json({ limit: '10kb' }));
app.use(express.urlencoded({ extended: true, limit: '10kb' }));

app.get('/api/health', (req, res) => {
  res.json({ success: true, message: 'jadhavsofttech API is running' });
});

app.use('/api', contactRoutes);

app.use((req, res) => {
  res.status(404).json({ success: false, message: 'Not Found' });
});

app.use(errorHandler);

export default app;
