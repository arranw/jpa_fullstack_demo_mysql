import React, {useState} from 'react';
import logo from './logo.svg';
import './App.css';
import TodoList from "./components/TodoList";
import AddTodo from "./components/AddTodo";

function App() {
    const [todos, setTodos] = useState([]);

    return (
        <div className="App">
            <TodoList todos={todos} setTodos={setTodos}></TodoList>
            <AddTodo todos={todos} setTodos={setTodos}/>
        </div>

    );
}

export default App;
