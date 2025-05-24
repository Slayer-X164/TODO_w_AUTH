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


      <div className="top-[50%] left-[50%] w-full translate-x-[-50%] translate-y-[-80%] flex flex-col justify-center items-center gap-3 bg-neutral-400 backdrop-blur-lg z-20  text-neutral-900   p-4 rounded-lg absolute">
        <h3 className="cursor-default font-semibold">Edit Task</h3>
        <input
          className="w-full bg-neutral-500 font-semibold  py-1 px-2 rounded-md outline-none border-dashed border-2 border-blue-600/40 text-center mt-4"
          type="text"
          value={todo_desc}
          onChange={(e) => setTodoDesc(e.target.value)}
        />
        <div className="flex gap-3 mt-2">
          <button className="py-1 px-6 text-green-900 font-semibold border-2 border-green-800 bg-green-800/50 rounded-md cursor-pointer"
          onClick={()=>handleSave(todo.todo_id)}
          >
            save
          </button>
          <button
            className="py-1 px-6  border-2 text-red-900 font-semibold border-red-800 bg-red-800/40 rounded-md cursor-pointer"
            onClick={() => setEditMode(!editMode)}
          >
            close
          </button>
        </div>
      </div>



  );
};

export default EditModal;
