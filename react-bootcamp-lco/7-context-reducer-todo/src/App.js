import React, { useReducer } from "react";
import { Container } from "reactstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

import { ToDoContext } from "./context/ToDoContext";
import todoReducer from "./context/reducer";
import TodoForm from "./Components/TodoForm";
import Todos from "./Components/Todos";

const App = () => {
  const [todos, dispatch] = (todoReducer, []);
  return (
    <ToDoContext.Provider value={{ todos, dispatch }}>
      <Container fluid>
        <h1>To Do App with Context API</h1>
        <Todos />
        <TodoForm />
      </Container>
    </ToDoContext.Provider>
  );
};
export default App;
