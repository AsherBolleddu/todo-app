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
      <div className="mb-4">
        <label htmlFor={id} className="block text-lg font-semibold mb-2">
          What needs to be done?
        </label>
        <div className="join w-full">
          <input
            className="input focus:outline-none join-item flex-1"
            type="text"
            name="todo"
            id={id}
            placeholder="Create a new todo"
            value={value}
            onChange={(event) => setValue(event.target.value)}
          />
          <button type="submit" className="btn btn-primary join-item">
            Add
          </button>
        </div>
      </div>
    </form>
  );
}
