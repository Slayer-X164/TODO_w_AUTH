import express from 'express'
import { getAllTodosController,createTodoController, updateTodoController, deleteTodoController,getTodoByIdController } from '../controllers/TodoControllers.js'

const router = express.Router()

router.post('/todo',createTodoController)
router.get('/todo',getAllTodosController)
router.put('/todo/:id',updateTodoController)
router.delete('/todo/:id',deleteTodoController)
router.get('/todo/:id',getTodoByIdController)


export default router