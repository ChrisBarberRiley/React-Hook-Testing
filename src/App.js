import React, { useState } from "react";
import './App.css';

function Todo({ todo, i, deleteTodo, completeTodo}) {
    return (
        <div style={{textDecoration: todo.isCompleted ? 'line-through' : '' }} className="todo">
            <p>
                {todo.text}
            </p>
            <button onClick={() => completeTodo(i)}>Complete</button>
            <button onClick={() => deleteTodo(i)}> X </button>
        </div>
    )
}


function TodoForm({addTodo}) {
    const [value, setValue] = useState('');

    const handleSubmit= e => {
        e.preventDefault();
        if(!value) return;
        addTodo(value);
        setValue('');
    }

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                className="input"
                value={value}
                onChange={e => setValue(e.target.value)}
                placeholder="Add new todo"
            />
        </form>
    )
}

function App() {
    const [todos, setTodos] = useState([
        {
            text: 'Learn React',
            isCompleted: false
        },
        {
            text: 'Learn Python',
            isCompleted: false
        },
        {
            text: 'Learn Machine Learning',
            isCompleted: false
        }
    ])

    const addTodo = text => {
        const newTodos = [...todos, {text}]

        setTodos(newTodos);
    }

    const completeTodo = i => {
        const newTodos = [...todos];
        newTodos[i].isCompleted = true;

        setTodos(newTodos)
    }

    const deleteTodo = i => {
        const newTodos = [...todos]
        newTodos.splice(i, 1)

        setTodos(newTodos)
    }

    return (
        <div>
            <h1>Hello world</h1>
            {todos.map((todo, i) => (
                <Todo
                    key={i}
                    todo={todo}
                    i={i}
                    completeTodo={completeTodo}
                    deleteTodo={deleteTodo}
                />
            ))}
            <TodoForm addTodo={addTodo}/>
        </div>
    )
}

export default App;