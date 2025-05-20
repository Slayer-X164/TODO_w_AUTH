import db from "../config/db.js";

export const createTableInDatabase = async () => {
  const query = `
    CREATE TABLE IF NOT EXISTS todos (
    todo_id SERIAL PRIMARY KEY,
    todo_desc varchar(255) not null
)`
  try {
    await db.query(query)
    console.log('table created');
  } catch (error) {
    console.log('error while creating table');
  }
};
