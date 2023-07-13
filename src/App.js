//import logo from './logo.svg';
import './App.css';
import axios from 'axios';
import navbar  from './components/navbar';
import { useEffect, useState } from 'react';
import ToDoList from './components/TodoList';
import Loading from './components/Loading';
function App() {
  const [todos,setTodos]=useState(null)
  useEffect(()=>{
    axios.get("https://jsonplaceholder.typicode.com/todos")
    .then((result)=>{
      console.log(result.data)
      setTodos(result.data)
      console.log(todos)

    })
  },[])
  return (
    <>
    <div >
      <h1>Example of API call using axios</h1>
      {todos? <ToDoList todos={todos}/>:<Loading/>}
    </div>
    </>
  );
}

export default App;
