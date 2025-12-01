import { createContext, useReducer } from "react";

export const TodoContext = createContext();

const initialState = [];

function todoReducer(state,action){
    switch (action.type) {
        //Add todo case
        //add toggle todo case
        //add delete todo case

        case "ADD":
            return[...state,action.payload];

        case "TOGGLE":
            return state.map(todo =>
                todo.id === action.payload
                ? { ...todo, done: !todo.done}
                :todo 
            );

        case "DELETE":
            return state.filter(todo => todo.id !== action.payload);

        default:
            return state;
    } 
}

export function TodoProvider ({children}) {
    const [state,dispatch] = useReducer(todoReducer,initialState);

    return(
        <TodoContext.Provider value= {{state,dispatch}}>
            {children}
        </TodoContext.Provider>
    );
}