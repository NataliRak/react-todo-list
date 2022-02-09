import React, { useState, useEffect } from "react";
import "./App.css";
import Form from "./components/form";
import TodoList from "./components/todoList";

function App() {
  const [inputText, setInputText] = useState("");
  const [todos, setTodos] = useState([]);
  const [status, setStatus] = useState("all");
  const [filterTodos, setFilterTodos] = useState([]);

  // useEffect(() => {
  //   getLocalTodos();
  // }, []);

  useEffect(() => {
    handleFilter();
    // saveLocalTodos();
  }, [todos, status]);

  const handleFilter = () => {
    switch (status) {
      case "completed":
        setFilterTodos(todos.filter((item) => item.completed === true));
        break;
      case "uncompleted":
        setFilterTodos(todos.filter((item) => item.completed === false));
        break;
      default:
        setFilterTodos(todos);
        break;
    }
  };

  // //save to local
  // const saveLocalTodos = () => {
  //   localStorage.setItem("todos", JSON.stringify([]));
  // };
  // const getLocalTodos = () => {
  //   if (localStorage.getItem("todos") === null) {
  //     localStorage.setItem("todos", JSON.stringify([]));
  //   } else {
  //     let todoLocal = JSON.parse(localStorage.getItem("todos"));
  //     setTodos(todoLocal);
  //   }
  // };

  return (
    <div className="App">
      <header>
        <h1>Natali Todo List </h1>
      </header>
      <Form
        setInputText={setInputText}
        inputText={inputText}
        todos={todos}
        setTodos={setTodos}
        setStatus={setStatus}
      />
      <TodoList todos={todos} setTodos={setTodos} filterTodos={filterTodos} />
    </div>
  );
}

export default App;
