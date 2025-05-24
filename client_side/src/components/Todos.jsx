import React, { useState } from "react";
import { HiOutlineDotsVertical } from "react-icons/hi";
import { FaRegEdit, FaSketch } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import EditModal from "./EditModal";


const Todos = ({ todoData, deleteTodo,fetchDataFromApi }) => {
  const [editMode,setEditMode] = useState(false)
  const [currentId , setCurrentId] = useState(null)
  const handleClick = (id)=>{
    setEditMode(!editMode)
    setCurrentId(id)
  }
  console.log(currentId);

  return (
    <div className="w-full  flex justify-center flex-col items-center gap-3">
      {todoData.map((e, index) => (

        <div
          key={e.todo_id}
          className=" w-[80%]  backdrop-blur-sm md:max-w-[60%] flex justify-between items-center text-neutral-300 py-2 px-3 bg-neutral-600/20 rounded-lg z-[1]"
        >
        {editMode?<EditModal fetchDataFromApi={fetchDataFromApi} currentId={currentId} todo={e} editMode={editMode} setEditMode={setEditMode}/>:null}
          <div className="w-auto flex justify-center items-center gap-3">
            <p className="text-neutral-500">{index + 1}.</p>
            <p className="max-w-96">{e.todo_desc}</p>
          </div>
          <div className=" flex flex-row md:gap-4 gap-3 ml-4">
            <button
              className="cursor-pointer p-2 rounded-lg bg-blue-600/10 text-blue-500 text-sm"
              onClick={()=>handleClick(e.todo_id)}
            >
              <FaRegEdit />
            </button>
            <button
              className="cursor-pointer p-2 rounded-lg bg-red-600/10 text-red-500 text-sm"
              onClick={() => deleteTodo(e.todo_id)}
            >
              <MdDelete />
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Todos;
