import React, { useContext } from "react";
import { ListGroup, ListGroupItem } from "reactstrap";
import { FaCheckDouble } from "react-icons/fa";
import { ToDoContext } from "../context/ToDoContext";
import { REMOVE_TODO } from "../context/action.types";

const Todos = () => {
  const {todos, dispatch} = useContext(ToDoContext);
  return (
    <ListGroup className="mt-5 mb-2 items">
      {todos.map((todo) => (
        <ListGroupItem key={todo.id}>{todo.todoString}</ListGroupItem>
      ))}
    </ListGroup>
  );
};

export default Todos;
