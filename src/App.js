//import logo from './logo.svg';
import './App.css';
import axios from 'axios';
import navbar  from './components/navbar';
import { useEffect, useState } from 'react';
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
    <navbar/>
    <div className="App">
      <h1>Example of API call using axios</h1>
    </div>
    </>
  );
}

export default App;
