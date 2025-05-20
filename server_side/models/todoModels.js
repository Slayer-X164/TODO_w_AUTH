import db from "../config/db.js"

export const getAllTodosModel = async()=>{
    const result = await db.query('SELECT * FROM todos')
    return result.rows
}

export const createTodoModel = async (todo_desc) => {
    const result = await db.query('INSERT INTO todos (todo_desc) VALUES ($1) RETURNING *',[todo_desc])
    return result.rows[0]
}

export const updateTodoModel = async(todo_id,todo_desc)=>{
    const result = await db.query('UPDATE todos SET todo_desc = $1 WHERE todo_id = $2 RETURNING *',[todo_desc,todo_id])
    return result.rows[0]
}

export const deleteTodoModel = async (todo_id) => {
    const result = await db.query('DELETE FROM todos WHERE todo_id = $1',[todo_id])
    return result.rows[0]
}
export const getTodoByIdModel = async (todo_id) => {
    const result = await db.query('SELECT * FROM todos WHERE todo_id = $1',[todo_id])
    return result.rows[0]
}