import React, { useState } from "react";
import { connect } from "react-redux";
import { createTodo } from './actions';
import './NewTodoForm.css';


const NewTodoForm = ({todos, onCreatePressed}) => { // Since todos is returned in mapStateToProps and compoent is wrapped in connect,  component will have access to it automatically. 
    const [inputValue, setInputValue] = useState('');
    return (
        <div className="new-todo-form">
            <input
                className="new-todo-input"
                type="text"
                placeholder="Type your new todo here"
                value={inputValue}
                onChange={e => setInputValue(e.target.value)}
            >
            </input>
            <button
                onClick={() => {
                    const isDuplicateText = todos.some(todo => todo.text === inputValue);
                    if (!isDuplicateText) {
                        onCreatePressed(inputValue);
                        setInputValue('');
                    }
                }}
                className="new-todo-button">Create Todo</button>
        </div>
    );
}

// Connect from react-redux is a higher order function. connect()()
const mapStateToProps = state => ({
    todos: state.todos,
});

// dispatch is a function which allows us to trigger actions for updating state. 
const mapDispatchToProps = dispatch => ({
    onCreatePressed: text => dispatch(createTodo(text)),
});

export default connect(mapStateToProps, mapDispatchToProps)(NewTodoForm);