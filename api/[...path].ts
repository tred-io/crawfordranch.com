import type { VercelRequest, VercelResponse } from '@vercel/node';
import express from 'express';
import { setupRoutes } from '../server/routes.js';
import { getStorage } from '../server/storage.js';

const app = express();

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// CORS for Vercel
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, Authorization');
  
  if (req.method === 'OPTIONS') {
    res.sendStatus(200);
  } else {
    next();
  }
});

// Initialize storage and routes
const storage = getStorage();
setupRoutes(app, storage);

export default async function handler(req: VercelRequest, res: VercelResponse) {
  return new Promise((resolve) => {
    app(req as any, res as any, (result: any) => {
      if (result instanceof Error) {
        return resolve(result);
      }
      return resolve(result);
    });
  });
}