import React, {useEffect, useState} from 'react';
import styled from "styled-components";
import axios from "axios";

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

function TodoList({todos, setTodos}) {

    useEffect(() => {
        async function fetch() {
            const res = await axios.get("/todos/all");
            setTodos(res.data);
        }
        fetch();
    }, []);


    const handleDelete = async (id) => {
        const res = await axios.delete(`/todos/delete/${id}`);
        setTodos(res.data);
    }

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

export default TodoList;