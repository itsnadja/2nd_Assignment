import React, { useState, useEffect } from "react";
import "./styles.css";
import DeleteItem from "./DeleteItem";
import AddItem from "./AddItem";
import Checkbox from "./Checkbox";

let initialState = [{ id: 0, label: "Create to-do-list :-)", done: false }];

const todosAsString = localStorage.getItem("todos");
if (todosAsString) {
  initialState = JSON.parse(todosAsString);
}

export default function App() {
  const [todos, setTodos] = useState(initialState);

  const [newTodoId, setNewTodoId] = useState(0);
  const [newTodo, setNewTodo] = useState("");

  useEffect(() => {
    setNewTodoId(newTodoId => newTodoId + 1);
  }, [todos]);

  function todoItemDone(id) {
    const todoDone = todos.map(todo => {
      if (todo.id === id) {
        todo.done = !todo.done;
      }
      return todo;
    });
    const todosAsString = JSON.stringify(todoDone);
    localStorage.setItem("todos", todosAsString);

    setTodos(todoDone);
  }

  function deleteTodoItem(id) {
    const deleteTodo = todos.filter(todo => todo.id !== id);

    const todosAsString = JSON.stringify(deleteTodo);
    localStorage.setItem("todos", todosAsString);

    setTodos(deleteTodo);
  }

  function addTodoItem() {
    const newTodos = [
      ...todos,
      {
        id: newTodoId,
        label: newTodo,
        done: false
      }
    ];

    const todosAsString = JSON.stringify(newTodos);
    localStorage.setItem("todos", todosAsString);
    setTodos(newTodos);

    setNewTodo("");
  }

  function handleInputEvent(dataFromChild) {
    setNewTodo(dataFromChild);
  }

  return (
    <div className="App">
      <h1>To-Do-List</h1>
      <ul>
        {todos.map(todo => (
          <li key={todo.id}>
            <Checkbox
              onCheckEvent={() => todoItemDone(todo.id)}
              checked={todo.done}
              label={todo.label}
            />
            <span className={todo.done ? "done" : ""}>{todo.label}</span>
            <DeleteItem onClickEvent={() => deleteTodoItem(todo.id)} />
          </li>
        ))}
      </ul>
      <AddItem
        onClickEvent={addTodoItem}
        onInputEvent={handleInputEvent}
        InputValue={newTodo}
      />
    </div>
  );
}
