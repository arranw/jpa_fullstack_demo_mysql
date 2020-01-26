import React, {useState} from 'react';
import './App.css';
import TodoList from "./components/TodoList";
import AddTodo from "./components/AddTodo";
import MyStompClient from "./components/MyStompClient.js";
import {Provider} from "react-redux";
import store from "./store";

function App() {
    const [todos, setTodos] = useState([]);

    return (
        <Provider store={store}>
            <div className="App">
                <TodoList todos={todos} setTodos={setTodos}></TodoList>
                <AddTodo todos={todos} setTodos={setTodos}/>
                <MyStompClient></MyStompClient>
            </div>
        </Provider>
    );
}

export default App;
