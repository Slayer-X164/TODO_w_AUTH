import React, { useEffect } from "react";
import { useState } from "react";
import axios from "axios";
const InputBox = ({fetchDataFromApi}) => {
  const [todo_desc, setTodoDesc] = useState("");

  const handleClick = async () => {
    if (!todo_desc || todo_desc.trim() === "") {
      window.alert("Enter a Task First");
      return;
    }
    try {
      const body = { todo_desc };
      await axios.post(
        "https://todo-w-auth.vercel.app/api/todo",
        body
      );
      setTodoDesc("");
      fetchDataFromApi()
      console.log("data sent to db!");

    } catch (error) {
      console.error(error.message);
    }
  };

  return (
    <div className="w-full h-auto text-neutral-300 flex justify-center mt-14 ">
      <div className="w-[80%]  md:w-[40%] h-14 rounded-xl flex justify-between items-center gap-2 border-2 border-neutral-600/30 bg-neutral-900/20 backdrop-blur-md px-2">
        <input
          placeholder="Enter Task..."
          className="w-full py-2 px-2 outline-none border-none"
          type="text"
          value={todo_desc}
          onChange={(e) => setTodoDesc(e.target.value)}
        />
        <button
          className="py-2 rounded-lg w-18 cursor-pointer px-4 bg-neutral-500/18 text-neutral-200 font-semibold active:scale-95"
          onClick={handleClick}
        >
          Add
        </button>
      </div>
    </div>
  );
};

export default InputBox;
