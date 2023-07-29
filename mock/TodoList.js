import React, { useState, useEffect } from 'react';
import { fetchTodos } from './TodoService';

const TodoList = () => {
  const [todos, setTodos] = useState([]);
  const [newTodo, setNewTodo] = useState('');

  const handleInputChange = (e) => {
    setNewTodo(e.target.value);
  };

  const handleAddTodo = () => {
    if (newTodo.trim() !== '') {
      setTodos([...todos, newTodo.trim()]);
      setNewTodo('');
    }
  };

  const handleDeleteTodo = (index) => {
    const updatedTodos = [...todos];
    updatedTodos.splice(index, 1);
    setTodos(updatedTodos);
  };

  useEffect(() => {
    const fetchAndSetTodos = async () => {
      const todosFromApi = await fetchTodos();
      setTodos(todosFromApi);
    };

    fetchAndSetTodos();
  }, []);

  return (
    <div>
      <h2>Todo List</h2>
      <ul>
        {todos.map((todo, index) => (
          <li key={index}>
            {todo} <button onClick={() => handleDeleteTodo(index)}>Delete</button>
          </li>
        ))}
      </ul>
      <input type="text" value={newTodo} onChange={handleInputChange} />
      <button onClick={handleAddTodo}>Add Todo</button>
    </div>
  );
};

export default TodoList;
