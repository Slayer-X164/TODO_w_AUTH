import React, { useState,useEffect } from "react";
import axios from "axios";

const EditModal = ({ todo, editMode, setEditMode, currentId,fetchDataFromApi }) => {

  const [todo_desc, setTodoDesc] = useState("");
  useEffect(() => {
    if (currentId === todo.todo_id) {
      setTodoDesc(todo.todo_desc);
    }
  }, [currentId, todo.todo_id, todo.todo_desc]);

  if (currentId !== todo.todo_id) return null;

  const handleSave = async(id)=>{
    try {
      const body = {todo_desc}
      await axios.put(`https://todo-w-auth.vercel.app/api/todo/${id}`,body)
      fetchDataFromApi()
      setEditMode(false)
    } catch (error) {
      console.log("failed to update: ",error.message);
    }
  }

  return (


      <div className="top-[50%] left-[50%] w-[90%] translate-x-[-50%] translate-y-[-80%] flex flex-col justify-center items-center gap-3 bg-neutral-900 p-4 rounded-md fixed">
        <h3 className="cursor-default text-neutral-300">Edit Task</h3>
        <input
          className="w-full bg-neutral-800 text-neutral-300 py-1 px-2 rounded-md outline-none border-1 border-blue-600/50 text-center mt-4"
          type="text"
          value={todo_desc}
          onChange={(e) => setTodoDesc(e.target.value)}
        />
        <div className="flex gap-3">
          <button className="py-1 px-6  text-green-500 bg-green-800/50 rounded-md cursor-pointer"
          onClick={()=>handleSave(todo.todo_id)}
          >
            save
          </button>
          <button
            className="py-1 px-6  text-red-400 bg-red-800/40 rounded-md cursor-pointer"
            onClick={() => setEditMode(!editMode)}
          >
            close
          </button>
        </div>
      </div>



  );
};

export default EditModal;
