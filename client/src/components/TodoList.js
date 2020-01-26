import React, {useEffect} from 'react';
import styled from "styled-components";
import {connect} from "react-redux";
import {getTodos, deleteTodo} from "../actions/todos"

const TodoListDiv = styled.div`
    width: 50%;
    margin: auto;
`;

const TodoListItem = styled.div`
    background-color: #fff;
    margin-bottom: 1rem;
    border-radius: 5px;
    padding: 0.75rem;
`;

const TodoTitle = styled.h4`
    margin: 0;
    float: left;
`;

const DeleteButton = styled.i`
    float: right;
    color: red;
    pointer: cursor;
`

function TodoList({getTodos, deleteTodo, todos}) {

    useEffect(() => {
        getTodos()
    }, [getTodos]);


    const handleDelete = (id) => {
        deleteTodo(id);
    }
    console.log(todos)

    if (!todos) return <h1>No Todos</h1>

    return (
        <TodoListDiv>
            {todos.map(todo => (
                <TodoListItem key={todo.id}>
                    <TodoTitle>
                        {todo.id}
                    </TodoTitle>
                    {todo.title}
                    <DeleteButton onClick={() => handleDelete(todo.id)} className="fas fa-times"></DeleteButton>
                </TodoListItem>
            ))}
        </TodoListDiv>
    );
}

const mapStateToProps = (state) => ({
    todos: state.todos.todos
})


export default connect(mapStateToProps, {getTodos, deleteTodo})(TodoList);