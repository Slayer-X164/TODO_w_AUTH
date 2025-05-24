import React from 'react'
import Bg from './components/Bg'
import Navbar from './components/Navbar'
import InputBox from './components/InputBox'
import Todos from './components/Todos'
import TodosContainer from './components/TodosContainer'
import { useState, useEffect } from "react";
import axios from "axios";

const App = () => {
  const [loading,setLoading] = useState(false)
   const [todoData, setTodoData] = useState([]);

    const fetchDataFromApi = async () => {
      setLoading(true)
        try {
          const res = await axios.get("https://todo-w-auth.vercel.app/api/todo");
          const data = res.data.todo;
          setTodoData(data);

        } catch (error) {
          console.error(error.message);
        }
        finally{
          setLoading(false)
        }
      };
    useEffect(() => {
      fetchDataFromApi();
    }, []);
    const deleteTodo = async (id)=>{
      try {
      await axios.delete(`https://todo-w-auth.vercel.app/api/todo/${id}`)
      console.log("deleted");
      setTodoData(todoData.filter(e=>e.todo_id !== id))

      } catch (error) {
        console.log(error.message);

      }

    }
  return (
    <>
      <Bg/>
      <Navbar/>
      <InputBox fetchDataFromApi={fetchDataFromApi}/>
      <TodosContainer todoData={todoData} deleteTodo={deleteTodo} loading={loading} fetchDataFromApi={fetchDataFromApi}/>
    </>
  )
}

export default App