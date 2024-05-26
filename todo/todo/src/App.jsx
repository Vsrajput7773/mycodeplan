import React, { useState, useEffect } from 'react';
import "./App.css"
const TodoApp = () => {
  const [tasks, setTasks] = useState([]);
  const [editTask, setEditTask] = useState({ id: null, text: '' });

  useEffect(() => {
    // Load tasks from local storage on initial render
    const storedTasks = JSON.parse(localStorage.getItem('tasks')) || [];
    setTasks(storedTasks);
  }, []);
    useEffect(() => {
    // Save tasks to local storage whenever tasks state changes
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }, [tasks]);
  const handleSubmit = (e) => {
    e.preventDefault();
    if (editTask.id === null) {
      // Add a new task
      setTasks([...tasks, { id: Date.now(), text: editTask.text, completed: false }]);
    } else {
      // Edit an existing task
      const updatedTasks = tasks.map((task) =>
        task.id === editTask.id ? { ...task, text: editTask.text } : task
      );
      setTasks(updatedTasks);
      setEditTask({ id: null, text: '' });
    }
  };
  const handleEdit = (id, text) => {
    setEditTask({ id, text });
  };
  const handleRemove = (id) => {
    const updatedTasks = tasks.filter((task) => task.id !== id);
    setTasks(updatedTasks);
  };
  const handleComplete = (id) => {
    const updatedTasks = tasks.map((task) =>
      task.id === id ? { ...task, completed: !task.completed } : task
    );
    setTasks(updatedTasks);
  };
  return (
    <div>
      <h1>Todo App</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Task:
          <input
            type="text"
            value={editTask.text}
            onChange={(e) => setEditTask({ ...editTask, text: e.target.value })}
          />
        </label>
        <button type="submit">{editTask.id === null ? 'Add Task' : 'Update Task'}</button>
      </form>
      <ul>
        {tasks.map((task) => (
          <li key={task.id} className={task.completed ? 'completed' : ''}>
            <span>{task.text}</span>
            <button onClick={() => handleComplete(task.id)}>
              {task.completed ? 'Undo' : 'Complete'}
            </button>
            <button onClick={() => handleEdit(task.id, task.text)}>Edit</button>
            <button onClick={() => handleRemove(task.id)}>Remove</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodoApp;
