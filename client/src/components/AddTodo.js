import React, {useState} from 'react';
import styled from "styled-components";
import {addTodo} from "../actions/todos";
import {connect} from "react-redux";

const AddTodoDiv = styled.div`
    width: 50%;
    margin: auto;
      background-color: #fff;
    margin-bottom: 1rem;
    border-radius: 5px;
    padding: 0.75rem;
`

function AddTodo({addTodo}) {
    const [todo, setTodo] = useState({
        title: "",
        content: ""
    })

    const handleSubmit = async (e) => {
        e.preventDefault();
        addTodo(todo);
    }

    const onChangeHandler = (e) => setTodo({...todo, [e.target.name]: e.target.value});

    return (
        <AddTodoDiv>
            <form onSubmit={(e) => handleSubmit(e)}>
                <input name='title' type='text' value={todo.title} onChange={(e) => onChangeHandler(e)}/>
                <input name='content' type='text' value={todo.content} onChange={(e) => onChangeHandler(e)}/>
                <button type="submit">Add</button>
            </form>
        </AddTodoDiv>
    );
}

export default connect(null, {addTodo})(AddTodo);