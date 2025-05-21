import express from 'express'
import cors from 'cors'
import dotenv from 'dotenv'
import db from './config/db.js'
import { createTableInDatabase } from './db_table.js/createTable.js'
import router from './routes/todoRoutes.js'
dotenv.config()
const app = express()
const port = process.env.PORT || 3001

//middleware
app.use(cors())
app.use(express.json())

//created table in db
createTableInDatabase()

//route
app.use('/api',router)

app.listen(port,()=>{
    console.log("server is running on port ",port);
})
