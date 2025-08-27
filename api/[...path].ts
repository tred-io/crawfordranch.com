import type { VercelRequest, VercelResponse } from '@vercel/node';
import express from 'express';
import { registerRoutes } from '../server/routes.js';
import { storage } from '../server/storage.js';

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

// Initialize routes
app.post("/api/contact", async (req, res) => {
  try {
    const { insertContactInquirySchema } = await import('../shared/schema.js');
    const { z } = await import('zod');
    const inquiry = insertContactInquirySchema.parse(req.body);
    const createdInquiry = await storage.createContactInquiry(inquiry);
    res.json(createdInquiry);
  } catch (error) {
    if (error instanceof Error && 'issues' in error) {
      res.status(400).json({ message: "Invalid request data", errors: (error as any).issues });
    } else {
      res.status(500).json({ message: "Internal server error" });
    }
  }
});

app.get("/api/contact", async (req, res) => {
  try {
    const inquiries = await storage.getAllContactInquiries();
    res.json(inquiries);
  } catch (error) {
    res.status(500).json({ message: "Internal server error" });
  }
});

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