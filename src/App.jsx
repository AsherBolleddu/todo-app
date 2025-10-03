import { useId } from "react";
import { useState } from "react";
function App() {
  const id = useId();
  const [todos, setTodos] = useState([]);
  const [counter, setCounter] = useState(0);
  const [todoValue, setTodoValue] = useState("");
  const [filter, setFilter] = useState("all");

  function handleSubmit(e) {
    e.preventDefault();
    setCounter((c) => c + 1);
    const newTodo = { id: counter, todoItem: todoValue, isCompleted: false };
    setTodos([...todos, newTodo]);
    setTodoValue("");
  }

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

  function renderTodos(filteredTodos) {
    return filteredTodos.map((todo) => (
      <li key={todo.id}>
        <span className={todo.isCompleted ? "checked" : ""}>
          {todo.todoItem}
        </span>{" "}
        - <button onClick={() => handleComplete(todo.id)}>Completed</button>
        <button onClick={() => handleDelete(todo.id)}>Delete</button>
      </li>
    ));
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
      <form onSubmit={handleSubmit}>
        <label htmlFor={id}>Enter todo:</label>
        <input
          type="text"
          name="todo"
          id={id}
          placeholder="Create a new todo"
          value={todoValue}
          onChange={(event) => setTodoValue(event.target.value)}
        />
      </form>
      <ul>{renderTodos(filteredTodos)}</ul>
      <p>{itemsLeft} items left</p>
      <button onClick={() => setFilter("all")}>All</button>
      <button onClick={() => setFilter("active")}>Active</button>
      <button onClick={() => setFilter("completed")}>Completed</button>
      <button onClick={clearCompleted}>Clear completed</button>
    </div>
  );
}

export default App;
