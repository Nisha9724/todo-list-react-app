import NavBar from './components/NavBar';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import { Footer } from './components/Footer';
import { ToDos } from './components/ToDos';
import { AddTodo } from './components/AddTodo';
import React, { useState, useEffect } from 'react';
import './App.css';
import { About } from './components/About';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

function App() {
  let initTodo;
  if (localStorage.getItem("todos") === null) {
    initTodo = []
  } else {
    initTodo = JSON.parse(localStorage.getItem("todos"))
  }

  const onDelete = (todo) => {
    setTodo(todos.filter((e) => {
      return e !== todo
    }))
    localStorage.setItem("todos", JSON.stringify(todos));
  }


  const addTodo = (title, description) => {
    let sno;
    if (todos.length === 0) {
      sno = 0;
    } else {
      sno = todos[todos.length - 1].sno + 1;
    }
    const myTodo = {
      sno: sno,
      title: title,
      description: description,
    }
    setTodo([...todos, myTodo])
  }

  const [todos, setTodo] = useState(initTodo)
  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos])

  return (
    <div className="App">
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={[<AddTodo addTodo={addTodo} />, <ToDos todos={todos} onDelete={onDelete} />]} />
          <Route path="about"
            element={<About />}
          />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}
export default App;
