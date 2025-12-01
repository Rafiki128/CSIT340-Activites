import { useState,useContext } from "react";
import {TodoContext} from './TodoContext';
import './TodoApp.css';

export default function TodoInput(){
    const [text, setText] = useState("");
    const {dispatch} = useContext(TodoContext);

    const handleAdd = () => {
        //Add code
        if(text.trim()==="") return;
        dispatch({
            type:"ADD",
            payload: {
                id: Date.now(),
                text,
                done: false,
            },
        })

        setText("");
    };

    return(
        <div className="todo-input">
            <input value={text}
                    onChange={e => setText(e.target.value)}/>
            <button onClick={handleAdd}>Add Todo</button>
        </div>
    );
} 