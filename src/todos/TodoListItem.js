import React from "react";
import './TodoListItem.css';

const TodoListItem = ({ todo, onRemovePressed, onMarkCompletedPressed }) => (
    <div className="todo-item-container">
        <h3>{todo.text}</h3>
        <div className="buttons-container">
            {todo.isCompleted ? null : <button
                onClick={() => onMarkCompletedPressed(todo.text)}
                className="completed-button">Mark as completed</button>}
            <button
                onClick={() => onRemovePressed(todo.text)}
                className="remove-button">Remove</button>
        </div>
    </div>
);


export default TodoListItem;