import { useId, useState } from "react";

export default function TodoForm({ onAddTodo }) {
  const id = useId();
  const [value, setValue] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    if (!value.trim()) {
      return;
    }
    onAddTodo(value);
    setValue("");
  }
  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor={id}>Enter todo:</label>
      <input
        type="text"
        name="todo"
        id={id}
        placeholder="Create a new todo"
        value={value}
        onChange={(event) => setValue(event.target.value)}
      />
    </form>
  );
}
