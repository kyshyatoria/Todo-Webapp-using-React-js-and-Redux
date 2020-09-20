// Redux actions return action  and the payload for that action. 
export const CREATE_TODO = 'CREATE_TODO';
export const createTodo = text => ({
    type: CREATE_TODO,
    payload: {text},
});

// createTodo is called Action creators. They abstract away all the action related code 

export const REMOVE_TODO = 'REMOVE_TODO';
export const removeTodo = text => ({
    type: REMOVE_TODO,
    payload: {text},
});

export const COMPLETED_TODO = 'COMPLETED_TODO';
export const markTodoCompleted  = text  => ({
    type: COMPLETED_TODO,
    payload: {text},
});
