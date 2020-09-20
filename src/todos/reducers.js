import {COMPLETED_TODO, CREATE_TODO, REMOVE_TODO} from "./actions";

// Reducers are just functions with state and action properties and decide what changes should occur in this state as a result of this action and returns the updates state. 
export const todos = (state = [], action) => { // Defaulting state to empty array
    const {type, payload} = action; // why did we need not call this function?

    switch (type) {
        case CREATE_TODO: {
            const {text} = payload; // Since payload was defined as {text}, defining {text} in curly braces will assign text value from pyalaod to text const here.  
            const newTodo = {
                text,
                isCompleted: false,
            };
            return state.concat(newTodo);
        }
        case REMOVE_TODO: {
            const {text} = payload;
            return state.filter(todo => todo.text !== text);
        }
        case COMPLETED_TODO: {
            const {text} = payload;
            return state.map( todo => {
                if (todo.text === text) {
                    return {...todo, isCompleted:true} // ... spread operator
                }
                return todo; // Return update todo item
            });
        }
        default: // defining default is super important to handle actions which aren't handled.
            return state;
    }
}
