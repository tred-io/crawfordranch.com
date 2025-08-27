import express from "express";
import { neon } from "@neondatabase/serverless";
import { drizzle } from "drizzle-orm/neon-http";
import { z } from "zod";
import { zfd } from "zod-form-data";
import { fromZodError } from "zod-validation-error";
// Schema definitions for Vercel serverless function
import { pgTable, text, serial, integer, timestamp } from "drizzle-orm/pg-core";
import { createInsertSchema } from "drizzle-zod";

const contactInquiries = pgTable("contact_inquiries", {
  id: serial("id").primaryKey(),
  firstName: text("first_name").notNull(),
  lastName: text("last_name").notNull(),
  email: text("email").notNull(),
  phone: text("phone"),
  eventType: text("event_type"),
  preferredDate: text("preferred_date"),
  guestCount: integer("guest_count"),
  message: text("message"),
  createdAt: timestamp("created_at").defaultNow().notNull(),
});

const insertContactInquirySchema = createInsertSchema(contactInquiries).omit({
  id: true,
  createdAt: true,
});

const schema = {
  contactInquiries,
  createInsertSchema: (table) => createInsertSchema(table)
};

const app = express();

// Enable CORS for Vercel
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

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Database setup
function getDb() {
  if (!process.env.DATABASE_URL) {
    throw new Error("DATABASE_URL is not set");
  }
  
  const sql = neon(process.env.DATABASE_URL);
  return drizzle(sql, { schema });
}

// Contact route
app.post("/api/contact", async (req, res) => {
  try {
    const result = insertContactInquirySchema.safeParse(req.body);
    
    if (!result.success) {
      const message = fromZodError(result.error).message;
      return res.status(400).json({ message });
    }

    const db = getDb();
    const [contact] = await db.insert(schema.contactInquiries).values(result.data).returning();
    
    res.status(201).json(contact);
  } catch (error) {
    console.error("Error creating contact:", error);
    res.status(500).json({ message: "Failed to create contact inquiry" });
  }
});

app.get("/api/contact", async (req, res) => {
  try {
    const db = getDb();
    const contacts = await db.select().from(schema.contactInquiries);
    res.json(contacts);
  } catch (error) {
    console.error("Error fetching contacts:", error);
    res.status(500).json({ message: "Failed to fetch contact inquiries" });
  }
});

// Handle 404 for API routes
app.use("/api/*", (req, res) => {
  res.status(404).json({ message: "API route not found" });
});

export default app;