import { Pool } from "pg";
import dotenv from "dotenv";

dotenv.config();

const db = new Pool({
  connectionString: process.env.DATABASE_URL,
  ssl: {
    rejectUnauthorized: false,
  },
});

db.connect()
  .then(() => console.log("✅ PostgreSQL database connected"))
  .catch((err) => console.error("❌ PostgreSQL connection error", err.message));

export default db;