import {Pool} from 'pg'
import dotenv from 'dotenv'

dotenv.config()

const db = new Pool({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    port: process.env.DB_PORT,
    database: process.env.DB_NAME,
    password: process.env.DB_PASSWORD,
})

db.connect()
.then(() => console.log('✅ PostgreSQL database connected'))
  .catch(err => console.error('❌ PostgreSQL connection error', err));

export default db