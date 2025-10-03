import { useState } from "react";
import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";

function App() {
  const [todos, setTodos] = useState([]);
  const [counter, setCounter] = useState(0);
  const [filter, setFilter] = useState("all");

  function handleDelete(id) {
    return setTodos(todos.filter((todo) => todo.id !== id));
  }

  function handleComplete(id) {
    return setTodos(
      todos.map((todo) => {
        if (todo.id === id) {
          todo.isCompleted = !todo.isCompleted;
        }
        return todo;
      })
    );
  }

  function handleAddTodo(text) {
    setCounter((prev) => {
      const newId = prev + 1;
      const newTodo = { id: newId, todoItem: text, isCompleted: false };
      setTodos([...todos, newTodo]);
      return newId;
    });
  }

  function clearCompleted() {
    setTodos(todos.filter((todo) => !todo.isCompleted));
  }

  const itemsLeft = todos.filter((todo) => !todo.isCompleted).length;
  const filteredTodos =
    filter === "active"
      ? todos.filter((todo) => !todo.isCompleted)
      : filter === "completed"
      ? todos.filter((todo) => todo.isCompleted)
      : todos;

  return (
    <div>
      <TodoForm onAddTodo={handleAddTodo} />
      <TodoList
        filteredTodos={filteredTodos}
        onDelete={handleDelete}
        onComplete={handleComplete}
      />
      <p>{itemsLeft} items left</p>
      <button onClick={() => setFilter("all")}>All</button>
      <button onClick={() => setFilter("active")}>Active</button>
      <button onClick={() => setFilter("completed")}>Completed</button>
      <button onClick={clearCompleted}>Clear completed</button>
    </div>
  );
}

export default App;
