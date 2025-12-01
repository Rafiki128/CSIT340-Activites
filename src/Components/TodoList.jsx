import { useContext } from "react";
import {TodoContext} from "./TodoContext";
import './TodoApp.css'

export default function TodoList() {
    const {state, dispatch} = useContext(TodoContext);

    return (
        <ul className="todo-list">
            {state.map(todo => (
                <li key={todo.id}>
                    <span
                        className={todo.done ? "done" : ""}
                        onClick={() => dispatch({type: "TOGGLE", payload: todo.id})}
                        >
                            {todo.text}
                    </span>
                    <button 
                    className="delete-btn"
                    onClick={() => dispatch({type: "DELETE", payload: todo.id})}>
                        ✖
                    </button>
                </li>
            ))}
        </ul>
    );
}