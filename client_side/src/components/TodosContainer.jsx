import React from "react";
import Todos from "./Todos";
import { AiOutlineLoading3Quarters } from "react-icons/ai";

const TodosContainer = ({ todoData, deleteTodo, loading,fetchDataFromApi }) => {
  return (
    <div className="relative w-full flex justify-center mt-14">
      <div className="w-full  py-2 md:p-0 md:w-[70%] flex justify-center flex-col items-center flex-wrap gap-4 ">

        {loading ? (
          <AiOutlineLoading3Quarters className="text-neutral-400 animate-spin text-4xl"/>
        ) : (
          <Todos fetchDataFromApi={fetchDataFromApi} todoData={todoData}  deleteTodo={deleteTodo} />
        )}
      </div>
    </div>
  );
};

export default TodosContainer;
