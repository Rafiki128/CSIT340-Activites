import React from "react";
import { TodoProvider } from "./Components/TodoContext";
import TodoInput from "./Components/TodoInput";
import TodoList from "./Components/TodoList";
import "./Components/TodoApp.css";

export default function AbellaApp() {
  return (
    <TodoProvider>
      <div className="app-container">
        <header>
          <h1>Abella Todo App using useReducer and useContext</h1>
        </header>
        <main>
          <TodoInput />
          <TodoList />
        </main>
      </div>
    </TodoProvider>
  );
}
