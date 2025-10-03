import { useId, useState } from "react";

export default function TodoForm({ todos, setTodos, counter, setCounter }) {
  const id = useId();
  const [todoValue, setTodoValue] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    setCounter((c) => c + 1);
    const newTodo = { id: counter, todoItem: todoValue, isCompleted: false };
    setTodos([...todos, newTodo]);
    setTodoValue("");
  }
  return (
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
  );
}
