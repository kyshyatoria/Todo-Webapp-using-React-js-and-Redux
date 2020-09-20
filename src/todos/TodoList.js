import React from "react";
import { connect } from 'react-redux';
import { markTodoCompleted, removeTodo } from './actions';
import NewTodoForm from "./NewTodoForm";
import './TodoList.css';
import TodoListItem from "./TodoListItem";

// Functional component
const TodoList = ({ todos = [], onRemovePressed, onMarkCompletedPressed }) => (
    <div className="list-wrapper">
        <NewTodoForm />
        {todos.map(todo => <TodoListItem
            todo={todo}
            onRemovePressed={onRemovePressed}
            onMarkCompletedPressed={onMarkCompletedPressed} />)}
    </div>
);

const mapStateToProps = state => ({
    todos: state.todos,
});

const mapDispatchToProps = dispach => ({
    onRemovePressed: text => dispach(removeTodo(text)),
    onMarkCompletedPressed: text => dispach(markTodoCompleted(text)),
});

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);