import axios from "axios";

const config = {
    headers: {
        "Content-Type": "Application/json"
    }
};

export const getTodos = () => async dispatch => {
    try {
        const res = await axios.get(`/todos/all`);

        dispatch({
            type: "GET_TODOS",
            payload: res.data
        });
    } catch (err) {
        console.error(err)
    }
};

export const todoAdded = (todo) => dispatch => dispatch({type: "ADD_TODO", payload: todo});
export const todoDeleted = (id) => dispatch => dispatch({type: "DELETE_TODO", payload: id});

export const addTodo = (formData) => dispatch => {
    try {
        const res = axios.post("/todos/insert", formData, config);
    } catch (err) {
        console.error(err)
    }
};

export const deleteTodo = id => dispatch => {
    try {
        const res = axios.delete(`/todos/delete/${id}`);
    } catch (err) {
        console.error(err)
    }
};
