import React from "react";

export default function TodoList(){
    const [todos, setTodos] = React.useState([]);
    const [newTodo, setNewTodo] = React.useState("");

    function handleAddTodo(){
        if(newTodo.trim() !== ""){
            setTodos([...todos, {text: newTodo.trim(), checked: false}]);
            setNewTodo("");
        }
    }

    function handleToglleTodo(index){
        const newTodos = [...todos];
        newTodos[index].checked = !newTodos[index].checked;
        setTodos(newTodos);
    }

    function handleDeleteTodo(index){
        const newTodos = [...todos];
        newTodos.splice(index, 1);
        setTodos(newTodos);
    }

    return (
        <div className="todo-wrapper">
            <h1>Todo List</h1>
            <input type="text"  placeholder="Enter new todo" value={newTodo} onChange={(e) => setNewTodo(e.target.value)} />
            <button onClick={handleAddTodo}>Add</button>
            <ul>
                {todos.map((todo, index) => (
                    <li key={index}>
                        <input className="checkbox" type="checkbox" checked={todo.checked} onChange={() => handleToglleTodo(index)} />
                        <span style={{textDecoration: todo.checked ? "line-through" : "none"}}>{todo.text}</span>
                        <button className="delete-button" onClick={() => handleDeleteTodo(index)}>Delete</button>
                    </li>
                ))}
            </ul>
        </div>
    )
}