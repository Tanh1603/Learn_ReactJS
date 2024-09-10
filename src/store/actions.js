import {ADD_TODO, SET_TODO_INPUT} from "./constants"
export const setTodoInput = payload => {
    return {
        type: SET_TODO_INPUT,
        payload
    }
}
export const adTodo= payload => {
    return {
        type: ADD_TODO,
        payload
    }
}