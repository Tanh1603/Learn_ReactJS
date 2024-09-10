// import { useEffect, useState, memo, useCallback, useMemo, useRef, useReducer, createContext , useContext} from "react";
// import { useContext } from "react";
// import { StoreContext } from "./store";

import {useStore, actions} from "./store"
import { adTodo } from "./store/actions";

// import Content from "./JS/useEffect.js";
// import DigitalClock from "./JS/digitalClock.js";
// import Example from "./JS/useRef.js";
// import StopWatch from "./JS/stopWatch";


function App() {
    const [state, dispatch] = useStore();
    const {todos, todoInput} = state;

    return (
        <div>
            <h1>Todo</h1>
            <input
                value={todoInput}
                placeholder="Enter task..."
                onChange={e => {
                    dispatch(actions.setTodoInput(e.target.value))
                }}
            />
            <button onClick={() => dispatch(adTodo(todoInput))}>Add</button>
            <ul>
                {todos
                    .filter(todo => todo.trim())
                    .map((todo, index) => (
                    <li key={index}>{todo}</li>
                ))}
            </ul>
        </div>
    )
}

export default App;
