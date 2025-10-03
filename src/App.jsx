import { useState } from "react";
import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";
import TodoFilters from "./components/TodoFilters";

function App() {
  const [todos, setTodos] = useState([]);
  const [counter, setCounter] = useState(0);
  const [filter, setFilter] = useState("all");

  function handleDelete(id) {
    setTodos((prev) => prev.filter((todo) => todo.id !== id));
  }

  function handleComplete(id) {
    setTodos((prev) =>
      prev.map((todo) =>
        todo.id === id ? { ...todo, isCompleted: !todo.isCompleted } : todo
      )
    );
  }

  function handleAddTodo(text) {
    const newId = counter + 1;
    const newTodo = { id: newId, todoItem: text, isCompleted: false };
    setTodos((prev) => [...prev, newTodo]);
    setCounter(newId);
  }

  function clearCompleted() {
    setTodos((prev) => prev.filter((todo) => !todo.isCompleted));
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
      <TodoFilters
        setFilter={setFilter}
        itemsLeft={itemsLeft}
        onClearCompleted={clearCompleted}
      />
    </div>
  );
}

export default App;
