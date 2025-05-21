import {
  getAllTodosModel,
  createTodoModel,
  updateTodoModel,
  deleteTodoModel,
  getTodoByIdModel
} from "../models/todoModels.js";

export const createTodoController = async (req, res) => {
  const { todo_desc } = req.body;
  try {
    const newTodo = await createTodoModel(todo_desc);
    res.status(200).json({
      message: "todo created successfully!!",
      todo: newTodo,
    });
  } catch (error) {
    res
      .status(500)
      .json({ message: `error while creating todo ${error.message}` });
  }
};
export const getAllTodosController = async (req, res) => {
  try {
    const allTodos = await getAllTodosModel();
    res
      .status(200)
      .json({ message: "todos fetched successfully!!", todo: allTodos });
  } catch (error) {
    res
      .status(500)
      .json({ message: `error while fetching todos ${error.message}` });
  }
};
export const updateTodoController = async (req, res) => {
  const todo_id = req.params.id;
  const { todo_desc } = req.body;
  try {
    const updatedTodo = await updateTodoModel(todo_id, todo_desc);
    if (!updatedTodo) {
      res.status(404).json({ message: "todo not found" });
    }
    res
      .status(200)
      .json({ message: "todos updated successfully!!", todo: updatedTodo });
  } catch (error) {
    res
      .status(500)
      .json({ message: `error while updating todo ${error.message}` });
  }
};
export const deleteTodoController = async (req, res) => {
  const todo_id = req.params.id;
  try {
    await deleteTodoModel(todo_id);
    res
      .status(200)
      .json({ message: "todo deleted successfully!!"});
  } catch (error) {
    res
      .status(500)
      .json({ message: `error while deleting todo ${error.message}` });
  }
};
export const getTodoByIdController = async (req,res) => {
    const todo_id = req.params.id
    try {
        const todoById = await getTodoByIdModel(todo_id)
        res.status(200).json({message:"todo by id fetched successfullly",todo:todoById})
    } catch (error) {
        res.status(500).json({message:`error while fetching todo by id ${error.message}`})
    }

}