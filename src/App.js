import React, { useState } from "react";
import Task from "./components/Task";  

const App = () => {
  const [value, setValue] = useState("");
  const [todos, setTodos] = useState([]);

  const addTodo = () => {
    if (value.trim()) {
      setTodos([...todos, { id: Date.now(), text: value }]);
      setValue("");
    }
  };

  const deleteTodo = (id) => {
    setTodos(todos.filter(todo => todo.id !== id));
  };

  const editTodo = (id, newText) => {
    setTodos(todos.map(todo =>
      todo.id === id ? { ...todo, text: newText } : todo
    ));
  };

  return (
    <div className="post-container">
      <div className="post-box">
        {/* <img
          src="profile.webp"
          alt="Profile Picture"
          className="profile-pic"
        /> */}
        <img src="D:\React-Js\my-app\src\profile.webp"
           alt="Profile Picture"
          className="profile-pic"
          />
        <input
          type="text"
          value={value}
          onChange={(e) => setValue(e.target.value)}
          placeholder="What's happening?"
        />
        <button onClick={addTodo}>Post</button>
      </div>

      <div id="post-display">
        {todos.map(todo => (
          <Task
            key={todo.id}
            todo={todo}
            deleteTodo={deleteTodo}
            editTodo={editTodo}
          />
        ))}
      </div>
    </div>
  );
};

export default App;
