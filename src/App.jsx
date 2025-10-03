import { useId } from "react";
import { useState, useEffect } from "react";
function App() {
  const id = useId();
  const [todos, setTodos] = useState([]);
  const [counter, setCounter] = useState(0);
  const [todoValue, setTodoValue] = useState("");
  useEffect(() => {
    console.log("Todos changed: ", todos);
  }, [todos]);

  function handleSubmit(e) {
    e.preventDefault();
    setCounter(counter + 1);
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

  function getAll() {
    return todos;
  }

  function getCompletedTodos() {
    return todos.filter((todo) => todo.isCompleted);
  }

  function getActiveTodos() {
    return todos.filter((todo) => !todo.isCompleted);
  }

  function renderTodos(filteredTodos) {
    return filteredTodos.map((todo, i) => (
      <li key={i}>
        <span className={todo.isCompleted ? "checked" : ""}>
          {todo.todoItem}
        </span>{" "}
        - <button onClick={() => handleComplete(todo.id)}>Completed</button>
        <button onClick={() => handleDelete(todo.id)}>Delete</button>
      </li>
    ));
  }

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
      <ul>{renderTodos(getAll())}</ul>
      <p>items left</p>
      <button>All</button>
      <button onClick={() => renderTodos(getActiveTodos())}>Active</button>
      <button onClick={() => renderTodos(getCompletedTodos())}>
        Completed
      </button>
      <button>Clear completed</button>
    </div>
  );
}

export default App;
